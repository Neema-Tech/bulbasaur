import axios from 'axios';

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
    let webhook_url =
    "https://discord.com/api/webhooks/1262707799301816391/DCf191NalBaltoMmXfmKuSDinVsmDRttz8OIc5IT-OspN3BYSZXtlTPp3s00zWis_1T2";

    let params = {
      username,
      content: message,
    };

    const response = await axios({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(params),
      url: webhook_url,
    });
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
