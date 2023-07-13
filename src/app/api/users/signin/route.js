import bcrypt from 'bcrypt';
import {
    NextResponse
} from 'next/server';
import {
    prisma
} from '../../../../../lib/prisma';
import {
    signJwtAccessToken
} from '../../../../../lib/jwt';
import { loginValidation } from '../../../../../validations/loginValidation';

export async function POST(req) {
    try {
        const {
            email,
            password
        } = await req.json();
        const error = loginValidation({email, password});
        if (error) {
            return NextResponse.json({error: {validationError: error}}, {status: 400});
        } else {
            const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        });
        if (user) {
            const isValidPassword = await bcrypt.compare(password, user.password);
            if (isValidPassword) {
                const data = {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role
                }
                const accessToken = signJwtAccessToken(data);
                const result = {
                    ...data,
                    accessToken
                };
                return NextResponse.json(result, {
                    status: 200
                });
            } else {
                return NextResponse.json({
                    error: {
                        in_val_pass: 'Your email or password is invalid.'
                    }
                }, {
                    status: 400
                });
            }
        } else {
            return NextResponse.json({
                error: {
                    in_val_pass: 'Your email or password is invalid.'
                }
            }, {
                status: 400
            });
        }
        }
        

    } catch (error) {
        return NextResponse.json({
            error: {
                message: 'Your sign in process was unsuccessful.'
            }
        }, {
            status: 400
        });
    }
}