import express from "express";
import type { Request, Response } from "express";

const app = express()

const PORT = 5000

app.use(express.json())

app.get('/health', (req: Request, res: Response) => {
    res.status(200).json({
        status: "OK",
        message: "Backend running"
    })
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})

export default app;