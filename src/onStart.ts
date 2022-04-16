import { Composer } from "grammy";

export const onStart = new Composer();

onStart.command("start", (ctx) => {
    ctx.reply(
        "*Welcome\\!* \n\nWith me you can test your knowledge in different topics",
        {
            parse_mode: "MarkdownV2",
        }
    );
});
