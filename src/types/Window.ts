import { WriterDocument } from './Document'

export enum WriterWindowType {
  Document = 'document',
  Settings = 'settings',
  Guide = 'guide'
}

export interface WriterWindow {
  type: WriterWindowType;
  index: number; // tab order if in single window mode
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface WriterDocumentWindow extends WriterWindow {
  document: WriterDocument;
  welcomeDismissed: boolean;
  // showWelcome () { if document is empty && welcomeDismissed }
  // new documents after the first is dismissed can be created with welcomeDismissed: true
}
