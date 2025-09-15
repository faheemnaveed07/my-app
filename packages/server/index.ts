import "dotenv/config";
import Express from "express";
import type { Request, Response } from "express";
const app = Express();
const port = process.env.PORT || 3000;

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello World!" );
});
app.get("/api/hello",(_req: Request, res: Response) => {
  res.json({"message": "Hello from the API!"});
});
app.listen(port, () => {
  console.log(`✅ Server is running on http://localhost:${port}`);
});
