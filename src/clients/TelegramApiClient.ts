/* eslint-disable no-console */



import { InlineKeyboardMarkup } from '@grammyjs/types';

import { BaseClient, extractErrorFromClientException } from '@/clients/BaseClient';

const BASE_URL = 'https://api.telegram.org/bot';

class TelegramApiClient extends BaseClient {
  constructor() {
    const url = `${BASE_URL}${process.env.TELEGRAM_BOT_TOKEN}`;
    super(url);
  }

  public async sendMessage(chat_id: number, text: string, reply_markup?: InlineKeyboardMarkup) {
    try {
      const result = await this.client.post(`sendMessage`, {
        chat_id,
        text,
        reply_markup,
      });
      return {
        response: result?.data,
        error: null,
      };
    } catch (error) {
      console.error(error);
      return {
        response: null,
        error: extractErrorFromClientException(error),
      };
    }
  }
}

export const telegramClient = new TelegramApiClient();
