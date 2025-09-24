// app/api/post/route.ts
import { NextResponse } from "next/server";
import { postToLinkedIn, postToTwitter, postToInstagram } from "@/lib/social";

export async function POST(req: Request) {
  try {
    const { content, platform } = await req.json();
    let response;

    if (platform === "linkedin") response = await postToLinkedIn(content);
    if (platform === "twitter") response = await postToTwitter(content);
    if (platform === "instagram") response = await postToInstagram(content);

    return NextResponse.json({ success: true, data: response });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
