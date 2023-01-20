export interface Quiz {
  questions: Question[];
}

export interface Question {
  id: number;
  text: string;
  type: QUESTION_TYPE;
  answers: Answer[];
  active: boolean;
}

export interface Answer {
  id: number;
  label: string;
  checked: boolean;
}

export enum QUESTION_TYPE {
  SINGLE_CHOICE = 'SINGLE_CHOICE',
  MULTI_CHOICE = 'MULTI_CHOICE',
  TRUE_FALSE = 'TRUE_FALSE',
  CHRONOLOGY = 'CHRONOLOGY',
}

export const NEW_QUESTION = () => {
  return {
    id: Math.random(),
    text: 'Example question text',
    type: QUESTION_TYPE.MULTI_CHOICE,
    answers: [
      { id: Math.random(), label: 'Answer A', checked: false },
      { id: Math.random(), label: 'Answer B', checked: false },
    ],
    active: false,
  };
};
