import { HTMLCaption } from "./constants.js";
import { getRandomDocuments } from "./fetchques.js";
import { sendChannelPoll, sendImage } from "./sendpollstg.js";

const ANS_MAPPING = {
  opt_a: 0,
  opt_b: 1,
  opt_c: 2,
  opt_d: 3,
  opt_e: 4,
};

function isBetweenFiveAndFiveTwentyFive() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  return hours === 17 && minutes >= 0 && minutes <= 25;
}

export const main = async (count = 2) => {
  try {
    const questions = await getRandomDocuments(count);
    questions.forEach(async (q, index) => {
      const {
        question,
        opt_a,
        opt_b,
        opt_c,
        opt_d,
        opt_e,
        explanation,
        answer,
      } = q;
      const options = [opt_a, opt_b, opt_c, opt_d, opt_e].filter((opt) => opt); // Filter out any empty options
      await sendChannelPoll({
        question,
        options,
        explanation: explanation.replace(/[_*[\]()~`>#+\-=|{}.!]/g, "\\$&"),
        answer: ANS_MAPPING[answer],
      });
    });
    // if (isBetweenFiveAndFiveTwentyFive()) {
    //   await sendImage(
    //     "https://ik.imagekit.io/gdh78m7fu/prj1504/Branding/PrepSO%20(1).jpg",
    //     HTMLCaption,
    //   );
    // }
    await sendImage(
      "https://ik.imagekit.io/gdh78m7fu/prj1504/Branding/PrepSO%20(1).jpg",
      HTMLCaption,
    );
  } catch (error) {
    console.error("Error in main function:", error);
  }
};
