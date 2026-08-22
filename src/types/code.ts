export type CodeLanguage =
  | "typescript"
  | "javascript"
  | "python"
  | "java"
  | "php"
  | "go"
  | "cpp"
  | "csharp"
  | "rust";

export interface CodeImplementation {
  language: CodeLanguage;
  label: string;
  code: string;
  filename?: string;
  explanation?: string;
}

export interface CodeExample {
  title: string;
  description?: string;
  implementations: CodeImplementation[];
}
