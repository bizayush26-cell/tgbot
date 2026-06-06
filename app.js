import cron from "node-cron";
import { main } from "./main.js";

// Schedule a task to run every 30 mins
cron.schedule("*/30 * * * *", async () => {
  const currentTime = new Date().toLocaleTimeString();
  console.log(`Running a task every 30 mins - ${currentTime}`);
  await main();
});

console.log("ES Module Cron job server started...");

// import { main } from "./src/utils/main.js";
// import express from "express";

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.get("/sendpoll", async (req, res) => {
//   try {
//     await main();
//     res.send("Polls sent successfully!");
//   } catch (error) {
//     console.error("Error in main function:", error);
//     res.status(500).send("An error occurred while sending polls.");
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// pm2 start app.js --name "PrepSOTGBot" --watch
