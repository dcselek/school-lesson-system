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
    if (req.headers.get('Authorization')) {
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
  }),
  rest.get("/lessons", (req, res, ctx) => {
    return res(
      ctx.json(
        [
          {
            id: 1,
            lessonCode: "BTO331",
            name: "Bilgisayar Ağları",
            value: 43,
          },
          {
            id: 2,
            lessonCode: "BTO330",
            name: "Bilgisayar Donanımları",
            value: 15,
          },
          {
            id: 3,
            lessonCode: "BTO365",
            name: "Veri Güvenliği",
            value: 43,
          },
          {
            id: 4,
            lessonCode: "BTO355",
            name: "Web Tabanlı Programlama",
            value: 21,
          }
        ]
      )
    )
  })
]