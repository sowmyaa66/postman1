import express from "express";
const app = express();
const PORT = process.env.PORT || 5001;
app.use(express.json());
app.get("/hello world", (req, res) => {
  res.status(200).json({ "ok": true, "message": "Server is healthy " });
});
app.get("/global", (req, res) => {
  res.status(200).send(" hello global server.");
});
app.post("/register", (req, res) => {
  const userData = req.body;
  console.log(" user resgistered successfully", userData);
});
app.post("/student/:roll", (req, res) => {
  const userData = req.body;
  console.log("send roll number", userData);
});


app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
})