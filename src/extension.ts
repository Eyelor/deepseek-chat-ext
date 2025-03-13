// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import ollama from 'ollama';
import { exec } from 'child_process';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "deepseek-chat-ext" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('deepseek-chat-ext.start', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		const panel = vscode.window.createWebviewPanel(
			'deepseekChat',
			'DeepSeek Chat',
			vscode.ViewColumn.One,
			{enableScripts: true}
		);

		panel.webview.html = getWebviewContent();

		panel.webview.onDidReceiveMessage( async (message: any) => {
			if (message.command === 'chat') {
				const userPrompt = message.text;
				let responseText = '';

				try {
					const streamResponse = await ollama.chat({
						model: 'deepseek-coder-v2:16b',
						messages: [{ role: 'user', content: userPrompt }],
						stream: true
					});

					for await (const part of streamResponse) {
						responseText += part.message.content;
						panel.webview.postMessage({ command: 'chatResponse', text: responseText });
					}
				} catch (err) {
					console.error(err);
					panel.webview.postMessage({ command: 'chatResponse', text: `Error: ${String(err)}, wait a few seconds and try again :)` });
					exec('ollama serve', (error, stdout, stderr) => {
                        if (error) {
                            console.error(`Error executing ollama serve: ${error.message}`);
                            return;
                        }
                        if (stderr) {
                            console.error(`stderr: ${stderr}`);
                            return;
                        }
                        console.log(`stdout: ${stdout}`);
                    });
				}
			}
		});
	});

	context.subscriptions.push(disposable);
}

function getWebviewContent(): string {
	return /*html*/`
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>DeepSeek Chat</title>
		<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"></script>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/monokai.min.css">
		<style>
			body { 
				font-family: sans-serif; 
				margin: 1em; 
				background-color: #2e2e2e; 
				color: #eaeaea; 
			}
			#prompt { width: 100%; 
				box-sizing: border-box; 
				background-color: #3d3d3d; 
				color: #eaeaea; 
				border: 1px solid #555; 
				padding: 10px;
				border-radius: 5px;
			}
			#response { 
				border: 1px solid #ccc; 
				width: 100%; 
				margin-top: 1em; 
				padding: 0.5em; 
				min-height: 100px; 
				background-color: #3c3c3c; 
				white-space: pre-wrap; 
				border-radius: 5px;
			}
			.code-block { 
				background-color: #383838; 
				color: #f8f8f2;
				padding: 10px; 
				border-radius:5px; 
				overflow-x: auto; 
			}
			pre code {
				background-color: #2c2c2c;
				color: #f8f8f2;
				padding: 10px;
				border-radius: 5px;
				overflow-x: auto;
			}
		</style>
	</head>
	<body>
		<h2>DeepSeek Chat VS Code Extension</h2>
		<textarea id="prompt" rows="3" placeholder="Ask something..."></textarea><br>
		<button id="askBtn" >Ask</button>
		<div id="response"></div>
		
		<script>
			const vscode = acquireVsCodeApi();

			document.getElementById('askBtn').addEventListener('click', () => {
				const text = document.getElementById('prompt').value;
				vscode.postMessage({ command: 'chat', text });
			});

			window.addEventListener('message', event => {
				const { command, text} = event.data;
				if (command === 'chatResponse') {
					const responseHtml = marked.parse(text);
					document.getElementById('response').innerHTML = responseHtml;
					hljs.highlightAll();
				}
			});
		</script>
	</body>
	</html>
	`
}

// This method is called when your extension is deactivated
export function deactivate() {}
