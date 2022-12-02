const express = require("express");
const axios = require("axios").default;

const app = express();

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  const response = await axios.get("https://randomuser.me/api?results=5");
  const json = response.data;
  const user = json.results[0];

  res.render("user.ejs", { user });
});

app.get("/user-list", async (req, res) => {
    const response = await axios.get("https://randomuser.me/api?results=5");
    const json = response.data;
    const userList = json.results;
  
    res.render("user-List.ejs", { userList });
  });

app.listen(3000);