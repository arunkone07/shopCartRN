import client from "./Client";

const endpoint = "/sampleData";
const getProducts = () => client.get(endpoint);

export default {
  getProducts,
};
