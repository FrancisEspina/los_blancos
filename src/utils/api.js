import axios from "axios";

const limit = 10;

export const getMatches = async (category) => {
  try {
    const response = await axios.get(
      import.meta.env.VITE_VERCEL_URL + "/football",
      {
        params: {
          status: category,
          limit: limit,
          order: "desc",
        },
      }
    );

    return response.data.matches;
  } catch (error) {
    console.error("Error fetching match data:", error);
  }
};

export const getStandings = async (division) => {
  try {
    const response = await axios.get(
      import.meta.env.VITE_VERCEL_URL + `/standings?${division}/standings`
    );
    console.log(response);
  } catch (error) {}
};

getStandings();
