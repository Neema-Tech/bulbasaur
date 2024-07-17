import axios from 'axios';

export const sendToDiscord = async (username: string, msg: string) => {
  let webhook_url =
    "https://discord.com/api/webhooks/1262707799301816391/DCf191NalBaltoMmXfmKuSDinVsmDRttz8OIc5IT-OspN3BYSZXtlTPp3s00zWis_1T2";

  let params = {
    username: username,
    content: msg,
  };

  return axios({
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(params),
    url: webhook_url,
  });
};
