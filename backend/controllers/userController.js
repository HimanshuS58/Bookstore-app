import User from '../models/userModel.js'
import bcrypt from "bcrypt"

export const signupUser = async (req, res) => {

    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            res.status(400).json({ message: "All fields are mandatory" })
        }

        const user = await User.findOne({ email });
        if (user) {
            res.status(400).json({ message: "User already exist" })
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const createUser = await User.create({
            name,
            email,
            password: hashedPassword,
        })
        await createUser.save();
        res.status(201).json({
            message: "Signup succesfully", user: {
                _id: createUser._id,
                name: createUser.name,
                email: createUser.email
            }
        })
    }
    catch (error) {
        console.log("Error: ", error.message);
        res.status(400).json({ message: "User data is not valid" })
    }
}


export const loginUser = async (req, res) => {

    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({ message: "email and password are mandatory" })
        }

        const user = await User.findOne({ email })

        if (user && (await bcrypt.compare(password, user.password))) {
            res.status(200).json({
                message: "Login successful",
                user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email
                }
            })
        }
        else {
            res.status(400).json({ message: "Invalid email or password" })

        }
    }
    catch (error) {
        console.log("Error: ", error.message);
        res.status(400).json({ message: "Error in login" })
    }
}

