import { Composer } from "grammy";

export const onStart = new Composer();

onStart.command("start", (ctx) => {
    ctx.reply(
        "*Welcome\\!* \n\nWith me you can test your knowledge in Linux, DevOps, Networking, Programming, Cloud, Docker, Kubernetes and lots more!",
        {
            parse_mode: "MarkdownV2",
        }
    );
});
