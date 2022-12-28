require("dotenv").config();
const Discord = require("discord.js");
import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: process.env.OPENAI_ORGANIZATION,
  apiKey: process.env.OPENAI_APIKEY,
});
const webhookClient = new Discord.WebhookClient({
  id: process.env.DISCORD_ID,
  token: process.env.DISCORD_TOKEN,
});

const openai = new OpenAIApi(configuration);

type Data = {
  data: undefined | {} | unknown;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const prompt = req.body.prompt;

  try {
    const response = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "512x512",
    });
    const webhook = await webhookClient.send({
      embeds: [
        {
          title: "Imagem gerada com sucesso",
          description: `Prompt: "${req.body.prompt}"`,
          url: response.data.data[0].url,
          color: "32896",
          image: {
            url: response.data.data[0].url,
          },
        },
      ],
    });
    res.status(200).json({ data: response.data.data[0] });
  } catch (data: any) {
    const webhookfail = await webhookClient.send({
      embeds: [
        {
          title: "Erro ao gerar imagem",
          description: `Prompt: "${prompt}"`,
          color: "16711680",
        },
      ],
    });
    if (data.response) {
      res.status(data.response.status).json({ data: data.response.data.error });
      console.log(data.response.data.error);
    } else {
      console.log(data.message);
    }
  }
}
