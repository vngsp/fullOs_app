import { Prisma } from "../../generated/prisma/browser";
import bcrypt from 'bcrypt'
import { prisma } from "../lib/prisma";
import { jwtService } from "./jwtTokenService";

export const createUserService = async (data: Prisma.UsersCreateInput) => {
    if (!data.email || !data.password) {
        throw new Error("Password and email is required");
    }
    const hashedPass = await bcrypt.hash(data.password, 10);

    const user = await prisma.users.create({
        data: {
            email: data.email,
            password: hashedPass,
        },
        select: {
            id: true,
            email: true
        }
    });

    return user;
}

export const AuthUserService = async (data: Prisma.UsersCreateInput) => {
    const { email, password } = data;

    if(!email || !password) {
        throw new Error("Email and password required");
    }

    const user = await prisma.users.findUnique({
        where: {email},
    })

    if(!user) {
        throw new Error("Invalid credentials")
    }

    const passMatch = await bcrypt.compare(password, user?.password as string);

    if(!passMatch) {
        throw new Error("Invalid password");
    }
    
    const token = jwtService.generateAccessToken(user?.id);

    return {
        token,
        id: user?.id,
        email: user?.email
    }
}