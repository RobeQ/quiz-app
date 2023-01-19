export interface Quiz {
  questions: Question[];
}

export interface Question {
  text: string;
  type: QUESTION_TYPE;
  answers: Answer[];
  active: boolean;
}

export interface Answer {
  label: string;
  checked: boolean;
}

export enum QUESTION_TYPE {
  SINGLE_CHOICE = 'SINGLE_CHOICE',
  MULTI_CHOICE = 'MULTI_CHOICE',
  TRUE_FALSE = 'TRUE_FALSE',
  CHRONOLOGY = 'CHRONOLOGY',
}
