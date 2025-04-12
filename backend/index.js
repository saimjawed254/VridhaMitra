import express from "express";
import cors from "cors";
import { config } from "dotenv";
import multer from "multer";
import { Admin } from "./models/admin/admin.js";
import { Volunteer } from "./models/volunteer/volunteer.js";
import { sendOtp } from "./utils/sendOtp.js";

const storage = multer.memoryStorage();
const upload = multer({ storage });
const app = express();
const router = express.Router();

config({ path: "config.env" });

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.get("/", async (req, res) => {
  // console.log(req);
  console.log("Connected");
  res.json({
    message: "Connected Successfully",
  });
});

router.post("/login", async (req, res) => {
  const { email, type } = req.body;
  console.log(req.body);

  let digits = "0123456789";
  let otp = "";
  for (let i = 0; i < 6; i++) {
    otp += digits[Math.floor(Math.random() * 10)];
  }

  otp = Number(otp);

  if (type == "admin") {
    const admin = await Admin.findOne({ email });
    if (!admin) {
      res.status(404).json({
        message: "Not a Valid User. Please Sign-up instead!",
      });
    } else {
      await Admin.findOneAndUpdate({ email: email }, { $set: { otp: otp } });
    }
    try {
      await sendOtp({
        subject: "VRIDHA MITR OTP",
        receiver: email,
        otp,
      });
      res.status(200).json({
        success: true,
        message: "OTP sent successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Internal Server Error. Please try after some time.",
      });
    }
  }
  if (type == "volunteer") {
    const volunteer = await Volunteer.findOne({ email });
    if (!volunteer) {
      res.status(404).json({
        message: "Not a Valid User. Please Sign-up instead!",
      });
    } else {
      await Volunteer.findOneAndUpdate(
        { email: receiver },
        { $set: { otp: otp } }
      );
    }
    try {
      await sendOtp({
        subject: "VRIDHA MITR OTP",
        receiver,
        otp,
      });
      res.status(200).json({
        success: true,
        message: "OTP sent successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Internal Server Error. Please try after some time.",
      });
    }
  }
});
router.post(
  "/sign-up",
  upload.fields([{ name: "image" }, { name: "govid" }]),
  async (req, res) => {
    const { type, name, age, gender, email, number, address } = req.body;
    const image = req.files["image"][0];
    const govid = req.files["govid"][0];
    if (type == "admin") {
        const admin=await Admin.findOne({email})
        if(admin){
            res.status(404).json({
                message:"You are already registered. Log in instead"
            })
        } else{
            await Admin.create({
                name: name,
                age: age,
                gender: gender,
                mobileNumber: number,
                email: email,
                address: address,
                photo: {
                  data: image.buffer,
                  contentType: image.mimetype,
                },
                idPhoto: {
                  data: govid.buffer,
                  contentType: govid.mimetype,
                },
              });
              res.json({
                message: "Data Received Successfully",
              });
        }
      
    }
    if (type == "volunteer") {
        const volunteer=await Volunteer.findOne({email})
        if(volunteer){
            res.status(404).json({
                message:"You are already registered. Log in instead"
            })
        } else{
            await Volunteer.create({
                name: name,
                age: age,
                gender: gender,
                mobileNumber: number,
                email: email,
                address: address,
                photo: {
                  data: image.buffer,
                  contentType: image.mimetype,
                },
                idPhoto: {
                  data: govid.buffer,
                  contentType: govid.mimetype,
                },
              });
              res.json({
                message: "Data Received Successfully",
              });
        }
      
    }
    console.log(type, name, age, gender, email, number, address);
    // console.log(req.files);
    
  }
);

app.post("/otp-verify", async (req, res) => {
  const { otp, receiver, type } = req.body;

  if (type == "admin") {
    let checkUser = await Admin.findOne({ email: receiver });

    if (checkUser.otp == otp) {
      res.json({
        success: true,
        message: "User Authorized ",
      });
    } else {
      res.status(500).json({
        success: false,
        message: "OTP is incorrect. ",
      });
    }
  }
  if (type == "volunteer") {
    let checkUser = await Admin.findOne({ email: receiver });
    premium = checkUser.premium;

    if (checkUser.otp == otp) {
      res.json({
        success: true,
        message: "User Authorized ",
      });
    } else {
      res.status(500).json({
        success: false,
        message: "OTP is incorrect. ",
      });
    }
  }
});

router.post("/file", async (req, res) => {
  try {
    const { email } = req.body;
    console.log(email);
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(404).send({ message: "Admin not found" });
    // console.log(admin)
    const fileData = admin.idPhoto.data; // Retrieve idPhoto binary data
    const contentType = admin.idPhoto.contentType; // Retrieve idPhoto MIME type

    if (!fileData || !contentType)
      return res.status(404).send({ message: "File not found" });

    res.set("Content-Type", contentType); // Set response Content-Type header
    res.send(fileData); // Send binary data to the client
  } catch (error) {
    console.error("Error retrieving idPhoto:", error);
    res.status(500).send({ message: "Server error" });
  }
});

app.get("/register", async (req, res) => {
  res.json({
    message: "Connected Successfully",
  });
});

app.get("/logout", async (req, res) => {
  res.json({
    message: "Connected Successfully",
  });
});

app.use(router);

app.listen(3000, async (req, res) => {
  console.log("Server listening on PORT: 3000");
});
