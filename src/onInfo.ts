import { Composer } from "grammy";

export const onInfo = new Composer();

onInfo.command("info", (ctx) => {
    ctx.reply(
        "Bot created by @aetrnm \nGithub repository: https://github.com/aetrnm/Wordle-Bot-for-Telegram",
        { disable_web_page_preview: true }
    );
});
