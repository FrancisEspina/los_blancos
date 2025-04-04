import axios from "axios";

// Load environment variables from .env file
const BASE_URL = "https://api.football-data.org/v4/teams/86/matches?";
const API_KEY = "898ccbc228804b32b9362871084ecded";
const limit = 10;

export const finishedMatches = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}status=FINISHED&limit=${limit}&order=desc`,
      {
        headers: {
          "X-Auth-Token": API_KEY,
        },
      }
    );
    return response.data.matches;
  } catch (error) {
    console.error("Error fetching matches:", error);
  }
};

// export const upcomingMatches = async () => {
//   console.log(BASE_URL);
//   try {
//     const response = await axios.get(
//       `${BASE_URL}status=SCHEDULED&limit=${limit}&order=desc`,
//       {
//         headers: {
//           "X-Auth-Token": API_KEY,
//           "Access-Control-Allow-Origin": "*",
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     console.log(response.data.matches);
//     return response.data.matches;
//   } catch (error) {
//     console.error("Error fetching matches:", error);
//   }
// };

export const upcomingMatches = async () => {
  axios
    .get("/api/football-proxy")
    .then((res) => {
      console.log("API response:", res.data); // <--- Check what comes back
    })
    .catch((err) => {
      console.error("Error fetching from proxy:", err);
    });
};
