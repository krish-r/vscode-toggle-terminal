import * as vscode from "vscode";

let statusBarItem: vscode.StatusBarItem;
let disposable: vscode.Disposable;
let isTerminalVisible = false;

export function activate({ subscriptions }: vscode.ExtensionContext) {
    const commandId = "vscode-toggle-terminal.toggleTerminal";

    subscriptions.push(
        (disposable = vscode.commands.registerCommand(commandId, () => {
            // Create a terminal if it does not already exist
            if (vscode.window.terminals.length === 0) {
                isTerminalVisible = false;
                vscode.window.createTerminal();
            }
            toggleTerminal();
        })),
    );

    const conf = vscode.workspace.getConfiguration("vscode-toggle-terminal");
    const alignment =
        conf.get<string>("alignment") === "right"
            ? vscode.StatusBarAlignment.Right
            : vscode.StatusBarAlignment.Left;
    statusBarItem = vscode.window.createStatusBarItem(
        alignment,
        0,
    );
    statusBarItem.command = commandId;
    statusBarItem.name = "Toggle Terminal";
    statusBarItem.text = `$(terminal) ${vscode.window.terminals.length}`;
    statusBarItem.tooltip = "Toggle Terminal";
    statusBarItem.show();

    subscriptions.push(statusBarItem);

    vscode.window.onDidChangeTerminalState(() => {
        statusBarItem.text = `$(terminal) ${vscode.window.terminals.length}`;
    });
    vscode.window.onDidChangeActiveTerminal(() => {
        statusBarItem.text = `$(terminal) ${vscode.window.terminals.length}`;
    });
    vscode.window.onDidOpenTerminal(() => {
        statusBarItem.text = `$(terminal) ${vscode.window.terminals.length}`;
    });
    vscode.window.onDidCloseTerminal(() => {
        statusBarItem.text = `$(terminal) ${vscode.window.terminals.length}`;
    });
}

export function deactivate({ subscriptions }: vscode.ExtensionContext) {
    statusBarItem?.hide();
    disposable?.dispose();
}

function toggleTerminal() {
    let activeTerminal = vscode.window.activeTerminal;
    if (isTerminalVisible) {
        activeTerminal?.hide();
        isTerminalVisible = false;
    } else {
        // activeTerminal is undefined until its accessed. In such cases, try to show the first terminal
        if (activeTerminal !== undefined) {
            activeTerminal.show();
        } else {
            vscode.window.terminals[0]?.show();
        }
        isTerminalVisible = true;
    }
}
