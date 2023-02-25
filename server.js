import express from "express";
import bodyParser from "body-parser";

const PORT = 3000;
const app = express();

app.use(bodyParser.json());

// example API endpoint that would receive a hook and do something
app.post("/", (req, res) => {
  console.log("Request Received:", req.body);
  res.json({
    status: "ok",
    body: req.body
  });
});

app.listen(PORT, () => {
  console.log(`Example server listing on http://localhost:${PORT}`);
});
