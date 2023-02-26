// src/mocks/handlers.js
import { graphql } from 'msw'
    const my=graphql.link('http://localhost:3000/graphql')
export const handlers = [
  // Handles a "Login" mutation
  my.mutation('Login', (req, res, ctx) => {
    const { username } = req.variables
    sessionStorage.setItem('is-authenticated', username)

    return res(
      ctx.data({
        login: {
          username,
        },
      }),
    )
  }),

  // Handles a "GetUserInfo" query
  my.query('GetUserInfo', (req, res, ctx) => {
    // const authenticatedUser = sessionStorage.getItem('is-authenticated')

    

    // When authenticated, respond with a query payload
    return res(
      ctx.data({
        user: {
          username: "John W",
          firstName: 'John',
        },
      }),
    )
  }),
]