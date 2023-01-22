import { rest } from 'msw';
import { QUIZZES } from './data';

export const handlers = [
  rest.get('/quiz/1', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(QUIZZES[0]));
  }),
  rest.get('/quiz/2', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(QUIZZES[1]));
  }),
  rest.get('/quiz/3', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(QUIZZES[2]));
  }),
  rest.get('/quizzes', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(QUIZZES));
  }),
];
