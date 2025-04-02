import axios from "axios";
const BASE_URL = "/api/teams/86/matches?";
const API_KEY = import.meta.env.VITE_API_KEY; // Correct way in Vite
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

export const upcomingMatches = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}status=SCHEDULED&limit=${limit}&order=desc`,
      {
        headers: {
          "X-Auth-Token": API_KEY,
        },
      }
    );
    console.log(response.data.matches);
    return response.data.matches;
  } catch (error) {
    console.error("Error fetching matches:", error);
  }
};
