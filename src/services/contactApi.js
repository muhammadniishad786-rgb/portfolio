import api from "./api";

export const sendContactMessage = (contactData) => {
  return api.post("/contact", contactData);
};