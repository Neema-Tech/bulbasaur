import { sendToDiscord } from '@/service/discordWebhook';

export async function POST(request: Request) {
  const { username, message } = await request.json();
  if (!username || !message) {
    return new Response(JSON.stringify({
      data: {},
      message: "Missing [username, message] field!",
    }), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 400,
    });
  }

  try {
    const response = await sendToDiscord(username, message);
    return new Response(JSON.stringify({
      data: response.data,
      message: "Message Sent!",
    }), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({
      data: {},
      message: "Internal Server Error, Please try again later!",
    }), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 500,
    });
  }
  return new Response(JSON.stringify({
    data: {},
    message: "OK",
  }), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 200,
  })
}
