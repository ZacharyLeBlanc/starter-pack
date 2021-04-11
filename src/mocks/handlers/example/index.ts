import { rest } from 'msw';

interface Book {
  title: string;
  description: string;
}

interface Review {
  id: string;
  author: string;
  text: string;
}

const getBookHandler = rest.get<null, Book>(
  'https://my.backend/book',
  (req, res, ctx) =>
    res(
      ctx.json({
        title: 'Lord of the Rings',
        description:
          'The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.',
      })
    )
);

const getReviewsHandler = rest.get<null, [Review]>(
  '/reviews',
  (req, res, ctx) =>
    res(
      ctx.json([
        {
          id: '60333292-7ca1-4361-bf38-b6b43b90cb16',
          author: 'John Maverick',
          text:
            'Lord of The Rings, is with no absolute hesitation, my most favored and adored book by‑far. The triology is wonderful‑ and I really consider this a legendary fantasy series. It will always keep you at the edge of your seat‑ and the characters you will grow and fall in love with!',
        },
      ])
    )
);

export const exampleHandlers = [getBookHandler, getReviewsHandler];
