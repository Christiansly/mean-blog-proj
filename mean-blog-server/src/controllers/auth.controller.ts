import { Request, Response } from 'express';
import User from '../models/user.model';
import bcryptjs from 'bcryptjs';
export const signup = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    if(!username || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    const newUser = new User({ username, email, password: hashedPassword });
    try {
        await newUser.save();
        return res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        return res.status(500).json({ message: (error as Error).message });
    }
}