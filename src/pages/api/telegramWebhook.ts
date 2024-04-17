/* eslint-disable no-console */
import { InlineKeyboardMarkup, Message } from '@grammyjs/types';
import { NextApiRequest, NextApiResponse } from 'next';

import { telegramClient } from '@/clients/TelegramApiClient';

export default async function reply(req: NextApiRequest, res: NextApiResponse) {
  try {
    if(!req.body || !req.body.message) {
      console.warn('No body or message');
      res.status(200).end();
      return;
    }

    const message = req.body.message as Message;

    const reply_markup: InlineKeyboardMarkup = {
      inline_keyboard:[
        [{
          text: 'Launch App',
          web_app: { url: process.env.NEXT_PUBLIC_APP_URL || 'https://chonki.ai' },
        }]
      ]
    };

    await telegramClient.sendMessage(
      message.chat.id,
      `You said ${req.body.message.text}`,
      reply_markup,
      );
    res.status(200).end();
  }
  catch(error) {
    console.error(error);
    res.status(200).end();
  }
}
