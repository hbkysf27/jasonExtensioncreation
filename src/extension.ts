import * as vscode from 'vscode';
import { exec } from 'child_process';

export function activate(context: vscode.ExtensionContext) {
  let runSimulation = vscode.commands.registerCommand('jason.runSimulation', () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showErrorMessage("No active editor found.");
      return;
    }

    const filePath = editor.document.fileName;
    exec(`jason ${filePath}`, (error, stdout, stderr) => {
      if (error) {
        vscode.window.showErrorMessage(`Error running Jason: ${stderr}`);
      } else {
        vscode.window.showInformationMessage(`Simulation Output: ${stdout}`);
      }
    });
  });

  context.subscriptions.push(runSimulation);
}

export function deactivate() {}
