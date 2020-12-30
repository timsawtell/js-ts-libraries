import * as express from "express"

const app = express()

app.get("/", (req, res) => {
    res.send("hey there")
})

app.listen(8080, () => {
    console.log("app running on port 8080")
})