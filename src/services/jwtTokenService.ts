import jwt from 'jsonwebtoken'

const ACCESS_SECRET = process.env.JWT_ACCESS_SECRET || 'access_secret';
const REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'access_secret';

export const jwtService = {
    generateAccessToken: (userId: number) => {
        return jwt.sign({ id: userId }, ACCESS_SECRET, { expiresIn: '15m' });
    },

    generateRefreshToken: (userId: number) => {
        return jwt.sign({ id: userId }, REFRESH_SECRET, {expiresIn: '7d'})
    },

    verifyRefreshToken: (token: string) => {
        try {
            return jwt.verify(token, REFRESH_SECRET) as {id: number};
        }
        catch {
            return null;
        }
    }
}