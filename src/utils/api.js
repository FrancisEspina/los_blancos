import axios from "axios";
const vercel_url = "https://los-blancos-iota.vercel.app/api";
const limit = 10;

export const getMatches = async (category) => {
  try {
    const response = await axios.get(vercel_url + "/football", {
      params: {
        status: category,
        limit: limit,
        order: "desc",
      },
    });

    return response.data.matches;
  } catch (error) {
    console.error("Error fetching match data:", error);
  }
};

export const getStandings = async (division) => {
  try {
    const response = await axios.get(vercel_url + "/standings", {
      params: {
        competition: division,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
