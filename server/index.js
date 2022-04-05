const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser')
const userRouter = require("./routes/routes");
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use(userRouter);


app.get("/", (req, res) => {
  res.json({ message: "CloudTail Home Page" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
