export interface Quiz {
  id?: number;
  name: string;
  description: string;
  createdDate: string;
  createdBy?: string;
  imageSrc: string;
  category: number;
  questions: Question[];
}

export interface Question {
  id?: number;
  position: number;
  text: string;
  imageSrc: string;
  feedback: string;
  type: Question_Type;
  group: number;
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
}

export interface Answer {
  id: number;
  content: string;
  chronologyOrder: number;
  isCorrect: boolean;
}

export type SaveAnswer = Omit<Answer, 'id'>;
export interface SaveQuestion extends Omit<Question, 'id' | 'answers'> {
  answers: SaveAnswer[];
}
export interface SaveQuiz
  extends Omit<Quiz, 'id' | 'createdDate' | 'questions'> {
  questions: SaveQuestion[];
}

export type UpdateQuiz = Omit<SaveQuiz, 'createdBy'>;

export enum Question_Type {
  SC = 'SC',
  MC = 'MC',
  TF = 'TF',
  CHR = 'CHR',
}

export enum QuestionStatus {
  NEW = 'NEW',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
}

export const NEW_QUESTION = (): Question => {
  return {
    id: Math.random(),
    feedback: '',
    group: 0,
    imageSrc: '',
    position: 0,
    text: 'Example question text',
    type: Question_Type.MC,
    time: 30,
    answers: [
      {
        id: Math.random(),
        content: 'Answer A',
        chronologyOrder: 1,
        isCorrect: false,
      },
      {
        id: Math.random(),
        content: 'Answer B',
        chronologyOrder: 2,
        isCorrect: false,
      },
    ],
  };
};

export const EMPTY_QUIZ = (): Quiz => {
  return {
    createdDate: '',
    createdBy: '',
    name: '',
    description: '',
    imageSrc: '',
    category: 0,
    questions: [],
  };
};
