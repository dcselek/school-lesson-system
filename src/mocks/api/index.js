import { rest } from 'msw'

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    const { username, password } = req.body

    return res(
      ctx.json({
        id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
        username,
        password,
      })
    )
  }),
  rest.get("/me", (req, res, ctx) => {
    if (req.headers.get('Authorization').length > 0) {
      return res(
        ctx.json({
          username: "can",
          credit: "170",
        })
      )
    }
    return res(
      ctx.status(403)
    )
  })
]