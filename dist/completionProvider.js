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
exports.JasonCompletionProvider = JasonCompletionProvider;
function activate(context) {
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider({ language: 'jason', scheme: 'file' }, new JasonCompletionProvider()));
}
