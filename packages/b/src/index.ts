import * as express from "express"
import { exportedVariable } from "../../a/src/index"

const app = express()

app.get("/", (req, res) => {
    res.send("hey there " + exportedVariable)
})

app.listen(8080, () => {
    console.log("app running on port 8080")
})