import * as vscode from 'vscode';

export class JasonCompletionProvider implements vscode.CompletionItemProvider {
  provideCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position
  ): vscode.CompletionItem[] {
    const suggestions = [
      { label: 'move', detail: 'Move agent (north, south, east, west)' },
      { label: 'attach', detail: 'Attach an object' },
      { label: 'detach', detail: 'Detach an object' },
      { label: 'submit', detail: 'Submit a task' },
      { label: 'goal', detail: 'Declare a goal' },
      { label: 'obstacle', detail: 'Define an obstacle' }
    ];

    return suggestions.map(s => {
      const item = new vscode.CompletionItem(s.label, vscode.CompletionItemKind.Keyword);
      item.detail = s.detail;
      return item;
    });
  }
}

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.languages.registerCompletionItemProvider(
      { language: 'jason', scheme: 'file' },
      new JasonCompletionProvider()
    )
  );
}
