"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.JasonCompletionProvider = void 0;
exports.activate = activate;
const vscode = __importStar(require("vscode"));
class JasonCompletionProvider {
    provideCompletionItems(document, position) {
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
exports.JasonCompletionProvider = JasonCompletionProvider;
function activate(context) {
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider({ language: 'jason', scheme: 'file' }, new JasonCompletionProvider()));
}
