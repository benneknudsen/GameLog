// implement API KEY
require("dotenv").config();

const rawgApiKey = process.env.RAWG_KEY;

if (!rawgApiKey) {
  console.log("RAWG api key is NOT found among environment variables!");
  process.exit(1);
}
