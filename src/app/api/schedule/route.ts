// app/api/schedule/route.ts
import { NextResponse } from "next/server";
import { addToGoogleCalendar } from "@/lib/calendar";

let scheduledPosts: any[] = [];

export async function POST(req: Request) {
  try {
    const { content, platform, scheduleTime } = await req.json();

    const post = { id: Date.now(), content, platform, scheduleTime };
    scheduledPosts.push(post);

    // Add event to Google Calendar
    await addToGoogleCalendar(post);

    return NextResponse.json({ success: true, post });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export function getScheduledPosts() {
  return scheduledPosts;
}
