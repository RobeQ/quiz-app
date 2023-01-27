import {
  Answer,
  Question,
  Quiz,
  SaveAnswer,
  SaveQuestion,
  SaveQuiz,
  UpdateQuiz,
} from '@/model/quiz';

export const QUIZ_TO_UPDATE_QUIZ_MAPPER = (quiz: Quiz): UpdateQuiz => {
  const saveQuiz = QUIZ_TO_SAVE_QUIZ_MAPPER(quiz);
  delete saveQuiz.createdBy;
  return saveQuiz;
};

export const QUIZ_TO_SAVE_QUIZ_MAPPER = (quiz: Quiz): SaveQuiz => {
  return {
    name: quiz.name,
    description: quiz.description,
    imageSrc: quiz.imageSrc,
    createdBy: 'admin@admin.com',
    // createdBy: quiz.createdBy || 'admin@admin.com',
    category: quiz.category,
    questions: quiz.questions.map((question, index) =>
      QUESTION_TO_SAVE_QUESTION(question, index)
    ),
  };
};

const QUESTION_TO_SAVE_QUESTION = (
  question: Question,
  order: number
): SaveQuestion => {
  return {
    position: ++order,
    text: question.text,
    imageSrc: question.imageSrc,
    time: question.time,
    feedback: question.feedback,
    type: question.type,
    group: question.group,
    answers: question.answers.map((answer) => ANSWER_TO_SAVE_ANSWER(answer)),
  };
};

const ANSWER_TO_SAVE_ANSWER = (answer: Answer): SaveAnswer => {
  return {
    content: answer.content,
    // TODO: Add logic to chronologyOrder
    chronologyOrder: 1,
    isCorrect: answer.isCorrect,
  };
};
