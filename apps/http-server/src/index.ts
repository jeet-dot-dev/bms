import express from "express";
import { client } from "@repo/db/client";
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/signup", async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const user = await client.user.create({
      data: {
        username,
        password,
      },
    });

    return res.json({ msg: "signup success full" });
  } catch (error) {
    return res.json({ error: "Something wrong" });
  }
});

app.listen(3000, () => {
  console.log("server is on ");
});
