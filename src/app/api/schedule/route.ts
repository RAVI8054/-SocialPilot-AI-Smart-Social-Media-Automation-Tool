// app/api/schedule/route.ts

import { NextResponse } from "next/server";
import { addToGoogleCalendar } from "@/lib/calendar";
import { addScheduledPost } from "@/lib/scheduledPosts";

export async function POST(req: Request) {
  try {
    const { content, platform, scheduleTime } = await req.json();

    const post = { id: Date.now(), content, platform, scheduleTime };
    addScheduledPost(post);

    // Add event to Google Calendar
    await addToGoogleCalendar(post);

    return NextResponse.json({ success: true, post });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
