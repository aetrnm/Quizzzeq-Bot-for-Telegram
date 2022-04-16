import { Bot } from "grammy";
import { config } from "dotenv";
import { onInfo } from "./onInfo";
import { onStart } from "./onStart";
config();

const BOT_TOKEN = process.env.BOT_TOKEN;

const bot: Bot = new Bot(BOT_TOKEN);

bot.use(onStart).use(onInfo);

bot.start();
