import { rest } from 'msw'
import { db } from '../db'
import { seedData } from '../seeds/seeds'
seedData();

const teacherToken = "f79e82e8-c34a-4dc7-a49e-9fadc0979fd1"

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    const { username } = req.body

    return res(
      ctx.json({
        id: username === "teacher" ? teacherToken : "f79e82e8-c34a-4dc7-a49e-9fadc0979fda" ,
        username,
      })
    )
  }),
  rest.get("/me", (req, res, ctx) => {
    const token = req.headers.get('Authorization')
    if (token) {
      return res(
        ctx.json({
          username: "can",
          type: token === teacherToken ? "teacher" : "student",
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
  }),
  rest.get("/user", (req, res, ctx) => {
    db.user.create()
    const user = db.user.getAll()
    return res(ctx.json(user));
  })
]