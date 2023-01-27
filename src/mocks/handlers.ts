import { rest } from 'msw';
import { QUESTION_GROUPS, QUIZ_CATEGORIES, QUIZZES } from './data';
import {
  GET_QUESTION_GROUPS,
  GET_QUIZ_BY_ID,
  GET_QUIZ_CATEGORIES,
  GET_QUIZZES,
} from '@/api/api-url';

export const handlers = [
  rest.get(GET_QUIZ_BY_ID(1), (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(QUIZZES[0]));
  }),
  rest.get(GET_QUIZ_BY_ID(2), (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(QUIZZES[1]));
  }),
  rest.get(GET_QUIZ_BY_ID(3), (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(QUIZZES[2]));
  }),
  rest.get(GET_QUIZZES, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(QUIZZES));
  }),
  rest.get(GET_QUESTION_GROUPS, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(QUESTION_GROUPS));
  }),
  rest.get(GET_QUIZ_CATEGORIES, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(QUIZ_CATEGORIES));
  }),
];
