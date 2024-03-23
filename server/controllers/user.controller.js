import User from "../models/user.model.js";
import config from "../../config/config.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({message: "All fields are mandatory!"});
    }
    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
        return res.status(400).json({message: "User already registered!"});
    }

    //Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password: ", hashedPassword);
    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    });

    console.log(`User created ${user}`);
    if (user) {
        res.status(201).json({ _id: user.id, email: user.email });
    } else {
        res.status(400).json({message: "User data is not valid"});
    }
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({message: "All fields are mandatory!"});
    }
    const user = await User.findOne({ email });
    //compare password with hashedpassword
    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign(
            {
                user: {
                    username: user.username,
                    email: user.email,
                    id: user.id,
                },
            },
            config.jwtSecret,
            { expiresIn: "60m" }
        );
        res.status(200).json({ accessToken });
    } else {
        res.status(401).json({message: "email or password is not valid"});
    }
}

export default {registerUser, loginUser}