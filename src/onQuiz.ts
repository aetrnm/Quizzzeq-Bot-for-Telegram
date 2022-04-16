import { Composer } from "grammy";
import fetch from "node-fetch";

export const onQuiz = new Composer();

onQuiz.command("quiz", async (ctx) => {
    const response = await fetch(
        "https://opentdb.com/api.php?amount=1&type=multiple"
    );
    const body = await response.text();
    const data = JSON.parse(body);

    const q = data.results[0];
    console.log(q);
    const ans = decodeAnswers([q.correct_answer, ...q.incorrect_answers]);

    ctx.replyWithPoll(decodeHTMLEntities(q.question), ans, {
        is_anonymous: false,
        open_period: 14,
        correct_option_id: 0,
        type: "quiz",
    });
});

/*
 * These functions are needed because the response from the API
 * is a bit old-fashioned and needs to be improved manually
 */
function decodeHTMLEntities(text: string) {
    const entities = [
        ["amp", "&"],
        ["apos", "'"],
        ["#x27", "'"],
        ["#x2F", "/"],
        ["#039", "'"],
        ["#47", "/"],
        ["lt", "<"],
        ["gt", ">"],
        ["nbsp", " "],
        ["quot", '"'],
    ];

    for (let i = 0, max = entities.length; i < max; ++i)
        text = text.replace(
            new RegExp("&" + entities[i][0] + ";", "g"),
            entities[i][1]
        );

    return text;
}

function decodeAnswers(answers: Array<string>) {
    const decoded = [];
    answers.forEach((answer) => {
        decoded.push(decodeHTMLEntities(answer));
    });
    return decoded;
}
