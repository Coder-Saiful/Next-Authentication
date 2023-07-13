import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
import { prisma } from '../../../../../lib/prisma';
import { signJwtAccessToken } from '../../../../../lib/jwt';

export async function POST (req) {
    try {
        const {name, email, password} = await req.json();
        const hashedPass = await bcrypt.hash(password, 10);
        const existUser = await prisma.user.findUnique({
            where: {
                email: email
            }
        });

        if (!existUser) {
            const user = await prisma.user.create({
                data: {
                    name,
                    email,
                    password: hashedPass
                }
            });
    
            const data = {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
            }
            const accessToken = signJwtAccessToken(data);
            const result = {...data, accessToken};
            return NextResponse.json(result, {status: 201});
        } else {
            return NextResponse.json({error: {message: 'This email already been taken.'}}, {status: 400});
        }

        
    } catch (error) {
        return NextResponse.json({error: {message: 'User signup failed.'}}, {status: 400});
    }
}