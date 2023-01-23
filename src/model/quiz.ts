export interface Quiz {
  id: number;
  name: string;
  description: string;
  createdDate: string;
  createdBy: string;
  imageSrc: string;
  category: Category;
  questions: Question[];
}

export interface Question {
  id: number;
  order: number;
  text: string;
  imageSrc: string;
  feedback: string;
  type: Question_Type;
  group: Group;
  time: number;
  answers: Answer[];
}

export interface Group {
  id: number;
  name: string;
}

export interface Category {
  id: number;
  name: string;
  description: string;
}

export interface Answer {
  id: number;
  content: string;
  isCorrect: boolean;
}

export enum Question_Type {
  SINGLE_CHOICE = 'SINGLE_CHOICE',
  MULTI_CHOICE = 'MULTI_CHOICE',
  TRUE_FALSE = 'TRUE_FALSE',
  CHRONOLOGY = 'CHRONOLOGY',
}

export const NEW_QUESTION = (): Question => {
  return {
    feedback: '',
    group: { id: 0, name: '' },
    imageSrc: '',
    order: 0,
    id: Math.random(),
    text: 'Example question text',
    type: Question_Type.MULTI_CHOICE,
    time: 30,
    answers: [
      { id: Math.random(), content: 'Answer A', isCorrect: false },
      { id: Math.random(), content: 'Answer B', isCorrect: false },
    ],
  };
};

export const EMPTY_QUIZ = (): Quiz => {
  return {
    id: 0,
    createdDate: '',
    createdBy: '',
    name: '',
    description: '',
    imageSrc: '',
    category: {
      id: 0,
      name: '',
      description: '',
    },
    questions: [],
  };
};
