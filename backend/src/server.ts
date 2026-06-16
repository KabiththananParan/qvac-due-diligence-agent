import express from "express";
import type { Request, Response } from "express";
import cors from "cors"


const app = express()

const PORT = 5000
app.use(cors())
app.use(express.json())

app.get('/health', (req: Request, res: Response) => {
    res.status(200).json({
        status: "OK",
        message: "Backend connected"
    })
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})

export default app;