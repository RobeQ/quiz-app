const BASE_URL = 'http://localhost:8000/api/v1/';

export const GET_QUIZZES = `${BASE_URL}quizzes/`;
export const GET_QUIZ_BY_ID = (id: number) => `${GET_QUIZZES}${id}`;
export const GET_QUIZ_CATEGORIES = `${GET_QUIZZES}categories/`;
export const GET_QUESTION_GROUPS = `${GET_QUIZZES}groups/`;

export const POST_QUIZ = GET_QUIZZES;
export const POST_CATEGORY = GET_QUIZ_CATEGORIES;
export const POST_GROUP = GET_QUESTION_GROUPS;

export const UPDATE_QUIZ = (id: number | undefined) => `${GET_QUIZZES}${id}/`;

export const DELETE_QUIZ_BY_ID = (id: number) => GET_QUIZ_BY_ID(id);
