import React from "react";

const rawgApiKey = "8608540b08ab4fd48b8f6c31d188fac4";

if (!rawgApiKey) {
  console.log("RAWG api key is NOT found among environment variables!");
  process.exit(1);
}

const gameDetails = {
  method: "GET",
  url: "https://api.rawg.io/api/games/{id}",
  qs: {
    key: rawgApiKey,
    ordering: "-relevance",
    discover: true,
    page_size: 10,
  },
};

export default function Card() {
  return <div className="Card"></div>;
}
