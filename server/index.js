import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import UserModel from "./Models/UserModel.js"; //write js
import bcrypt from "bcrypt";

const app = express();
app.use(express.json());
app.use(cors());

//Database connection
const connectString =
  "mongodb+srv://alfatima20233:fatima20233@cluster0.wllrxot.mongodb.net/postITDb?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(connectString);

//API routes
app.post("/registerUser", async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const hashedpassword = await bcrypt.hash(password, 10);

    const user = new UserModel({
      name: name, //can write as (name, )
      email: email,
      password: hashedpassword,
    });
    await user.save();
    res.send({ user: user, msg: "Added." });
  } catch (error) {
    console.log(error);
  }
});

app.listen(3001, () => {
  console.log("You are connected , Thnak you ");
});
