import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { streamText, convertToModelMessages } from 'ai';

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
});

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    console.log("API received messages:", messages);

    const result = await streamText({
      model: google('gemini-1.5-flash-8b'),
      messages: await convertToModelMessages(messages),
      system: `Aap Hashir ke AI Assistant hain. Hashir ek Expert Web Developer hai.
      Hashir ke projects:
      - Vehicle VINs Report
      - Zetsol Official Website
      - BCAPPA Dashboard
      - RoziApp
      - POS Inventory System
      - Pinned Doctors Page
      Aapka kaam Hashir ki skills (React, Next.js, Firebase) promote karna hai.`,
    });

    console.log("API response success");
    return result.toTextStreamResponse(); 
  } catch (error) {
    console.error("Chat Error:", error);
    return new Response(JSON.stringify({ error: "Server Error" }), { status: 500 });
  }
}