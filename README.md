<p align="center"><h1 align="center">DEEPSEEK-CHAT-EXT</h1></p>
<p align="center">
    <em>Code smarter, chat faster.
</em>
</p>
<p align="center">
    <!-- local repository, no metadata badges. --></p>
<p align="center">Built with the tools and technologies:</p>
<p align="center">
    <img src="https://img.shields.io/badge/npm-CB3837.svg?style=default&logo=npm&logoColor=white" alt="npm">
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=default&logo=JavaScript&logoColor=black" alt="JavaScript">
    <img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=default&logo=TypeScript&logoColor=white" alt="TypeScript">
    <img src="https://img.shields.io/badge/Ollama-FFFFFF.svg?style=default&logo=Ollama&logoColor=black" alt="Ollama">
</p>
<br>

##  Table of Contents

- [ Overview](#overview)
- [ Features](#features)
- [ Project Structure](#project-structure)
  - [ Project Index](#project-index)
- [ Getting Started](#getting-started)
  - [ Prerequisites](#prerequisites)
  - [ Installation](#installation)
  - [ Debugging & Manual Testing](#debugging-&-manual-testing)
  - [ Usage](#usage)
- [ Project Roadmap](#project-roadmap)
- [ License](#license)

---

##  Overview

Deepseek-chat-ext boosts developer productivity by integrating a powerful AI chat interface directly into VS Code.  Ask coding questions, get instant answers, and streamline your workflow.  This VS Code extension leverages a DeepSeek model via Ollama, providing on-demand code assistance and information retrieval within your editor.

---

##  Features

|      | Feature         | Summary       |
| :--- | :---:           | :---          |
| ⚙️  | **Architecture**  | <ul><li>The extension uses a client-server architecture, with the VS Code extension (`src/extension.ts`) as the client and the Ollama server hosting the DeepSeek model. </li><li>A webview is employed to display the chat interface within VS Code.</li><li>The architecture relies on `<ollama>` library for communication with the language model.</li><li>Error handling includes restarting the Ollama server if necessary, indicating a robust design for handling potential connection issues.</li></ul> |
| 🔩 | **Code Quality**  | <ul><li>Uses `<TypeScript>` for development, enabling static type checking and improved code maintainability.  See `tsconfig.json`.</li><li>Employs `<ESLint>` with a configuration file (`eslint.config.mjs`) to enforce code style and detect potential errors.  This configuration includes rules for naming conventions, missing curly braces, loose equality comparisons, literal throws, and missing semicolons.</li></ul> |
| 🔌 | **Integrations**  | <ul><li>Integrates with `<Ollama>` to interact with the DeepSeek language model.</li><li>Uses the VS Code extension API to create a webview for the chat interface.</li><li>Leverages `<@vscode/test-cli>` and `<@vscode/test-electron>` for testing within the VS Code environment.</li><li>Dependencies include various TypeScript and testing related packages as seen in `package.json`.</li></ul> |
| 🧩 | **Modularity**    | <ul><li>The codebase is structured with a `src` directory containing the main extension logic (`src/extension.ts`) and a `src/test` directory for tests.</li><li>The use of TypeScript promotes modularity through interfaces and classes.</li></ul> |

---

##  Project Structure

```sh
└── deepseek-chat-ext/
    ├── CHANGELOG.md
    ├── eslint.config.mjs
    ├── LICENSE
    ├── package.json
    ├── README.md
    ├── src
    │   ├── extension.ts
    │   └── test
    ├── tsconfig.json
    └── vsc-extension-quickstart.md
```


###  Project Index
<details open>
    <summary><b><code>DEEPSEEK-CHAT-EXT/</code></b></summary>
    <details> <!-- __root__ Submodule -->
        <summary><b>__root__</b></summary>
        <blockquote>
            <table>
            <tr>
                <td><b><a href='./eslint.config.mjs'>eslint.config.mjs</a></b></td>
                <td>- The eslint.config.mjs file configures ESLint for TypeScript code within the project<br>- It defines linting rules and parser settings to enforce consistent code style and detect potential errors in TypeScript files<br>- Specifically, it mandates naming conventions for imports and employs warnings for missing curly braces, loose equality comparisons, literal throws, and missing semicolons.</td>
            </tr>
            <tr>
                <td><b><a href='./package.json'>package.json</a></b></td>
                <td>- The package.json file configures a VS Code extension named deepseek-chat-ext<br>- It integrates a DeepSeek model, leveraging Ollama, to provide a chat interface within the IDE<br>- The extension's primary function is to enable users to interact with the DeepSeek model directly from VS Code, enhancing the development workflow<br>- Necessary dependencies and build scripts are also defined.</td>
            </tr>
            <tr>
                <td><b><a href='./tsconfig.json'>tsconfig.json</a></b></td>
                <td>- tsconfig.json configures the TypeScript compiler for the project<br>- It specifies the JavaScript module system, target ECMAScript version, output directory, and includes strict type checking<br>- The configuration ensures consistent code compilation and enhances maintainability by leveraging TypeScript's advanced type system features<br>- It directs the compiler to output to the out directory from the src directory, using ES2022 and DOM libraries.</td>
            </tr>
            </table>
        </blockquote>
    </details>
    <details> <!-- src Submodule -->
        <summary><b>src</b></summary>
        <blockquote>
            <table>
            <tr>
                <td><b><a href='./src\extension.ts'>extension.ts</a></b></td>
                <td>- The extension integrates a chat interface within VS Code<br>- It leverages the ollama library to communicate with a language model, enabling users to ask questions and receive responses directly within the editor<br>- A webview displays the conversation, and error handling includes restarting the ollama server if necessary<br>- The extension enhances coding workflows by providing on-demand code assistance and information retrieval.</td>
            </tr>
            </table>
            <details>
                <summary><b>test</b></summary>
                <blockquote>
                    <table>
                    <tr>
                        <td><b><a href='./src\test\extension.test.ts'>extension.test.ts</a></b></td>
                        <td>- Tests comprise the extension.test.ts file,  verifying core functionality within the VS Code extension<br>- It uses the VS Code testing framework and assertion library to execute test cases<br>- Currently, the provided tests are rudimentary examples, demonstrating basic assertion capabilities.</td>
                    </tr>
                    </table>
                </blockquote>
            </details>
        </blockquote>
    </details>
</details>

---
##  Getting Started

###  Prerequisites

Before getting started with deepseek-chat-ext, ensure your runtime environment meets the following requirements:

- **IDE:** VS Code - version *^1.96.0*
- **Programming Language:** JavaScript runtime - Node.js
- **Package Manager:** Npm
- **AI model provider server:** Ollama


###  Installation

Install deepseek-chat-ext using the following method:

1. Clone the deepseek-chat-ext repository:
```sh
git clone https://github.com/Eyelor/deepseek-chat-ext
```

2. Navigate to the project directory:
```sh
cd deepseek-chat-ext
```

3. Install the project dependencies:


**Using `npm`**

```sh
npm install
```

4. Install the DeepSeek Coder 2 Lite (you need to have ollama server installed before):

**Using `ollama`**

```sh
ollama pull deepseek-coder-v2:16b
```


###  Debugging & Manual Testing
To start debugging and testing, open the project in VS Code and press `F5` to launch the extension in a new separate window in `watch` mode. You can also find helpful information in the `vsc-extension-quickstart.md` file. To find the chat window, type `Ctrl`+`Shift`+`P`, then select `DeepSeek Chat`. When you hit `Enter`, the chat window will open.


###  Usage
If you want to run deepseek-chat-ext in your VS Code as normal extension you need to generate the `.vsix` file using this command (make sure that the `out/` directory is generated after using `F5` - watch mode):

**Using `npm`**

```sh
npm run package
```

After the `.vsix` file is generated, go to the `Extensions` tab is VS Code, then click `...` -> `Install from VSIX...`, and choose the generated `.vsix` file. From this point on, the extension will be available as described in the [ Debugging & Manual Testing](#debugging-&-manual-testing) section.


---
##  Project Roadmap

- [X] **`Task 1`**: <strike>Basic behaviour and styling implemented.</strike>
- [ ] **`Task 2`**: Implement context for conversation.
- [ ] **`Task 3`**: Implement more features and optimize workflow.
- [ ] **`Task 4`**: Implement tests.
- [ ] **`Task 5`**: Implement detailed documentation.
- [ ] **`Task 6`**: Publish extension.

---

## Extension Settings

The extension does not add any settings to VS Code by default.

---

## Known Issues

- Syntax highlighting may not be perfect for all languages.
- If the Ollama server has not started before, an error will be returned in the chat, and you will need to wait a few seconds and try again.

---

## Release Notes

### 0.0.1

- Initial release of the extension.
- Basic chat functionality with a simple user interface.

---

##  License

This project is protected under the Apache 2.0 License. For more details, refer to the [LICENSE](./LICENSE) file.

---

