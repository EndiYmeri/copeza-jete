import * as dotenv from "dotenv";

try {
  dotenv.config();
} catch (error) {
  console.warn("Could not load .env file:", error);
}

const WP_DOMAIN = process.env.WP_DOMAIN;

export const getPages = async () => {
  if (!WP_DOMAIN) {
    console.warn("WP_DOMAIN environment variable not set. Exiting.");
    return process.exit();
  }
  try {
    const pagesResponse = await fetch(`${WP_DOMAIN}/wp-json/wp/v2/pages`);
    return await pagesResponse.json();
  } catch (e) {
    console.log("Error fetching wp pages:", e);
  }
};

export const getImageByID = async (id: number) => {
  if (!WP_DOMAIN) {
    console.warn("WP_DOMAIN environment variable not set. Exiting.");
    return process.exit();
  }

  try {
    const imageResponse = await fetch(`${WP_DOMAIN}/wp-json/wp/v2/media/${id}`);
    return await imageResponse.json();
  } catch (e) {
    console.log("Error fetching wp image:", e);
  }
};
