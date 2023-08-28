import axios from "axios";
const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID fCuza0hw0yP8vSwEQdl7ccL8SOiW8vRN-tvnX4APTVU",
    },
    params: { query: term },
  });
  debugger;
  return response.data.results;
};
export default searchImages;
