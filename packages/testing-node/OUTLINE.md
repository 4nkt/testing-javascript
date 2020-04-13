# Testing Node

> Let's make our backends Rock Solid 🗿💪

## Scripts

- `npm run test`

## Data Model

- User

  - id: string
  - username: string

- List Item

  - id: string
  - bookId: string
  - ownerId: string
  - rating: number (-1 is no rating, otherwise it's 1-5)
  - notes: string
  - startDate: number (`Date.now()`)
  - finishDate: number (`Date.now()`)

> For convenience, we return a `book` object on each list item which is the
> book it's associated to. You're welcome frontend folks!

> /me wishes we could use GraphQL

- Book

  - id: string
  - title: string
  - author: string
  - coverImageUrl: string
  - pageCount: number
  - publisher: string
  - synopsis: string

## Emoji

- **Kody the Koala Bear** 🐨 "Do this"
- **Marty the Money Bag** 💰 "Here's a hint"
- **Hannah the Hundred** 💯 "Extra Credit"
- **Olivia the Owl** 🦉 "Pro-tip"
- **Dominic the Document** 📜 "Docs links"
- **Berry the Bomb** 💣 "Remove this code"
- **Alfred the Alert** 🚨 "Extra helpful in test errors"

## Exercises

Here are the kinds of files you'll be working with:

- `src/**/__tests__/[title].md`: Background, Exercise Instructions, Extra Credit
- `src/**/__tests__/[title].exercise.js`: Exercise with Emoji helpers
- `src/**/__tests__/[title].final.js`: Final version
- `src/**/__tests__/[title].final.extra-#.js`: Final version of extra credit
- `src/**/[title].js`: The source file that you'll be testing

Here's the order of exercises we'll be doing as well as where you can find the
markdown file associated with each.

1.  🏋 Testing Pure Functions: `src/utils/__tests__/auth.md`
2.  🏋 Testing Middleware: `src/utils/__tests__/error-middleware.md`
3.  🏋 Testing Controllers: `src/routes/__tests__/list-items-controller.md`
4.  🏋 Testing Authentication API Routes: `src/__tests__/auth.md`
5.  🏋 Testing CRUD API Routes: `src/__tests__/list-items.md`
