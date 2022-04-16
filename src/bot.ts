import { Bot } from "grammy";
import { config } from "dotenv";
import { onInfo } from "./onInfo.js";
import { onStart } from "./onStart.js";
import { onQuiz } from "./onQuiz.js";
config();

const BOT_TOKEN = process.env.BOT_TOKEN;

const bot: Bot = new Bot(BOT_TOKEN);

bot.use(onStart).use(onInfo).use(onQuiz);

bot.start();
