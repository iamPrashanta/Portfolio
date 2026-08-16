export type LegalBlockType = "paragraph" | "list_bullet" | "list_number" | "callout" | "note" | "emails_list";

export interface LegalContentBlock {
  type: LegalBlockType;
  content?: string | React.ReactNode;
  items?: string[];
  title?: string;
}

export interface LegalSection {
  id: string;
  number: string;
  title: string;
  content: LegalContentBlock[];
  subsections?: LegalSection[];
}
