import * as vscode from 'vscode';

export class JasonCompletionProvider implements vscode.CompletionItemProvider {
  provideCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position
  ): vscode.CompletionItem[] {
    const suggestions = [
      { label: 'send', detail: 'Send a message to an agent' },
      { label: 'belief', detail: 'Declare a belief' },
      { label: 'intend', detail: 'Check agent’s intentions' },
      { label: 'fail_goal', detail: 'Abort a goal with failure' },
      { label: 'succeed_goal', detail: 'Abort a goal with success' },
      { label: 'drop_desire', detail: 'Remove an agent’s desire' },
      { label: 'drop_intention', detail: 'Remove an agent’s intention' },
      { label: 'add_plan', detail: 'Add a new plan' },
      { label: 'remove_plan', detail: 'Remove an existing plan' }
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
