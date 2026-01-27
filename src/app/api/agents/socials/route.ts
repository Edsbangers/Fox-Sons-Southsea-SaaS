import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { platform, topic, propertyId } = await req.json();

  const prompt = buildPrompt(platform, topic, propertyId);

  const { text } = await generateText({
    model: openai("gpt-4o"),
    prompt,
  });

  // Parse the generated content
  const content = parseGeneratedPost(text);

  return NextResponse.json({
    success: true,
    post: content,
  });
}

function buildPrompt(
  platform: string,
  topic: string,
  propertyId?: string
): string {
  return `Generate a ${platform.toLowerCase()} post for Fox & Sons Southsea estate agency.

Topic: ${topic}
${propertyId ? `Property ID: ${propertyId}` : ""}

Requirements:
- Professional but approachable tone
- Include local Portsmouth/Southsea references and landmarks
- For Instagram: include engaging caption with line breaks, emojis, and hashtags
- For Facebook: include longer-form content with a clear CTA
- Reference specific local landmarks: Southsea seafront, Canoe Lake, Albert Road, Portsmouth Historic Dockyard, Spinnaker Tower, Isle of Wight views
- Mention local events or seasonal context when relevant
- Include 5-8 relevant hashtags

Return as JSON:
{
  "content": "Post content here",
  "hashtags": ["#tag1", "#tag2"],
  "imagePrompt": "Detailed image description for AI generation",
  "suggestedTime": "Optimal posting time"
}`;
}

function parseGeneratedPost(text: string) {
  try {
    return JSON.parse(text);
  } catch {
    return {
      content: text,
      hashtags: ["#Southsea", "#FoxAndSons", "#Portsmouth"],
      imagePrompt: "Southsea seafront at golden hour",
      suggestedTime: "12:00 PM",
    };
  }
}
