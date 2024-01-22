import express from 'express'
let app = express();

app.use(express.json())

app.get("/", () => {
  console.log("Listening Get")
  res.json({
    "new": "listen"
  })
})

app.listen(5000, () => {
  console.log("Listening Port")
})
