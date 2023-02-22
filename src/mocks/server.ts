import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { Data } from './types';

const handler1 = rest.get('https://from-backend-1.com', (_req, res, ctx) => {
  return res(
    ctx.json<Data>({
      title: 'title 1',
      description: 'description 1',
    })
  );
});

const handler2 = rest.get('https://from-backend-2.com', (_req, res, ctx) => {
  return res(
    ctx.json<Data>({
      title: 'title 2',
      description: 'description 2',
    })
  );
});

export const server = setupServer(handler1, handler2);
