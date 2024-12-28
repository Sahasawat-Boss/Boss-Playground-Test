import { NextResponse } from "next/server";
import {connectMongoDB} from "../../../../lib/mongodb";
import Content from "../../../../models/content";

export async function POST(req){
    const {title,img,content,userEmail} = await req.json()
    await connectMongoDB();
    await Content.create({title,img,content,userEmail});
    return NextResponse.json({ message:"Content Created"},{status:201});
}

export async function GET(req){
    //Check userEmail, If match with DB = GET and Show 
    const userEmail = req.nextUrl.searchParams.get("email");
    await connectMongoDB();
    const Contents = await Content.find ({ userEmail: userEmail });
    return NextResponse.json({ Contents });
    
}