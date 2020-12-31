import * as express from "express"
import { exportedVariable } from "../../workspace-a/src/index"
import { hashInput } from "../../common/crypto/src/index"

const app = express()

app.get("/", (req, res) => {
    res.send("hey there " + exportedVariable)
})

app.get("/:path", async (req, res) => {
    const hashThis = req.params.path
    const hashed = await hashInput(hashThis)
    res.send(`${hashThis} hashed is ${hashed}`)
})

app.listen(8080, () => {
    console.log("app running on port 8080")
})