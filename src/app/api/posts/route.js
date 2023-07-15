import {
    NextResponse
} from "next/server";
import {
    prisma
} from "../../../../lib/prisma";
import {
    verifyJwt
} from "../../../../lib/jwt";
import {
    authorize
} from "../../../../lib/authorize";
import { admin } from "../../../../lib/admin";

export async function POST(req) {
    if (admin(req)) {
        try {
            const {
                title
            } = await req.json();
            const post = await prisma.post.create({
                data: {
                    title
                }
            });
            return NextResponse.json({
                success: {
                    message: "Post created successfully."
                },
                data: post
            }, {
                status: 201
            });
        } catch (error) {
            return NextResponse.json({
                error: {
                    message: "Post created failed."
                }
            }, {
                status: 400
            });
        }
    } else {
        return NextResponse.json({
            error: {
                message: "Forbidden"
            }
        }, {
            status: 403
        });
    }
}

export async function GET(req) {
    // if (authorize(req)) {
        try {
            const posts = await prisma.post.findMany({
                orderBy: {
                    createdAt: 'desc'
                }
            });
            return NextResponse.json(posts);
        } catch (error) {
            return NextResponse.json({
                error: {
                    message: "Failed to fetch posts."
                }
            }, {
                status: 400
            });
        }
    // }
    //  else {
        // return NextResponse.json({
        //     error: {
        //         message: "Unauthorized"
        //     }
        // }, {
        //     status: 401
        // });
    // }
}