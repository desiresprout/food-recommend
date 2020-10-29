const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

dotenv.config();
const apiRouter = require("./routes");

const app = express();
app.set("PORT", process.env.PORT || 5000);
const prod = process.env.NODE_ENV === "production";

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRouter);

app.listen(app.get("PORT"), () => {
  console.log(`listening on port ${app.get("PORT")}`);
});
