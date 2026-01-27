import { NextResponse } from "next/server";

// Vercel Cron endpoint for Scout Agent
// Configure in vercel.json: { "crons": [{ "path": "/api/cron", "schedule": "0 */1 * * *" }] }

export async function GET(req: Request) {
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Trigger the scout agent
    const scoutResponse = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/agents/scout`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.CRON_SECRET}`,
        },
      }
    );

    const scoutResult = await scoutResponse.json();

    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      scout: scoutResult,
    });
  } catch (error) {
    console.error("Cron job failed:", error);
    return NextResponse.json(
      { error: "Cron job failed" },
      { status: 500 }
    );
  }
}
