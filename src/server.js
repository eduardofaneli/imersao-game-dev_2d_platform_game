const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.sendFile(path.join(__dirname, "index.html"));
});

app.use(express.static(path.join(__dirname, "/")));
app.use(express.static(path.join(__dirname, "/assets")));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`listening at ${PORT}`));
