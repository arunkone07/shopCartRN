import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://effulgent-alpaca-30edae.netlify.app/.netlify/functions/api",
});

export default apiClient;
