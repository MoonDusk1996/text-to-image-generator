require("dotenv").config();

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: process.env.ORGANIZATION,
  apiKey: process.env.APIKEY,
});
const openai = new OpenAIApi(configuration);

type Data = {
  data: undefined | {} | unknown;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const response = await openai.createImage({
      prompt: req.body.prompt,
      n: 1,
      size: "1024x1024",
    });
    res.status(200).json({ data: response.data.data[0] });
  } catch (data: any) {
    if (data.response) {
      res.status(data.response.status).json({ data: data.response.data.error });
      console.log(data.response.data.error);
    } else {
      console.log(data.message);
    }
  }
}
