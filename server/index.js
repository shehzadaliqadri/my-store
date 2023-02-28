import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.get("/abc", (req, res) => {
  console.log("requested ip: ", req.ip);
  res.send("hello world!" + new Date().toString());
});

app.listen(port, () => {
  console.log("listening on port", port);
});
