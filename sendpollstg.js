const BOT_TOKEN = "8237854824:AAEAYQpaXuMgCTGWYGnNpmOKkvVWL4tot9c";
const CHANNEL_ID = "@ibps_so_itofficer";

const API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendPoll`;
const API_URL_MSG = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
const API_URL_IMG = `https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`;

export const sendChannelPoll = async ({
  question,
  options,
  explanation,
  answer,
}) => {
  try {
    let payload = {
      chat_id: CHANNEL_ID,
      question: question,
      options: JSON.stringify(options), // Telegram requirement: must be a JSON string
      is_anonymous: true,
      type: "quiz",
      correct_option_id: answer,
      explanation: explanation,
      explanation_parse_mode: "MarkdownV2", // Recommended over legacy 'Markdown'
      allows_multiple_answers: false,
    };

    // Ensure your API_URL ends with the correct method, e.g., ".../sendPoll"
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload), // FIX: Stringify the payload object
    });

    if (!response.ok) {
      // Try to catch the actual error message from Telegram for better debugging
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        `HTTP error! Status: ${response.status} - ${errorData.description || "Unknown Error"}`,
      );
    }

    await response.json();
  } catch (error) {
    console.error("Error sending poll:", error);
  }
};

export const sendMessage = async (chatId, text) => {
  try {
    const payload = {
      chat_id: chatId,
      text: text,
      parse_mode: "HTML",
    };

    const response = await fetch(API_URL_MSG, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        `HTTP error! Status: ${response.status} - ${errorData.description || "Unknown Error"}`,
      );
    }

    await response.json();
  } catch (error) {
    console.error("Error sending message:", error);
  }
};

export const sendImage = async (imageUrl, caption = "") => {
  try {
    const payload = {
      chat_id: CHANNEL_ID,
      photo: imageUrl,
      caption: caption,
      parse_mode: "HTML",
    };

    const response = await fetch(API_URL_IMG, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        `HTTP error! Status: ${response.status} - ${errorData.description || "Unknown Error"}`,
      );
    }

    await response.json();
  } catch (error) {
    console.error("Error sending image:", error);
  }
};

