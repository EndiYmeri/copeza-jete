import fs from "node:fs/promises";
import path from "node:path";
import * as dotenv from "dotenv";
import { getPages } from "./src/utils/wordpressAPI";
import { pagesTransformer } from "./src/utils/helpers";
dotenv.config();

export const downloadWordpressDataToJSON = async () => {
  try {
    const pagesResponse = await getPages();

    const pagesSimplified = pagesTransformer(pagesResponse);

    const configDir = path.resolve(process.cwd(), "src/config");
    const filePath = path.join(configDir, "pages.json");

    // Ensure the directory exists
    await fs.mkdir(configDir, { recursive: true });

    // Write the data to the JSON file
    await fs.writeFile(
      filePath,
      JSON.stringify(pagesSimplified, null, 2),
      "utf-8"
    );

    console.log(`WordPress data saved to ${filePath}`);
  } catch (error) {
    console.error("Error saving WordPress data:", error);
    process.exit(1); // Exit with an error code
  }
};

// You might want to call this function somewhere in your application
// downloadWordpressDataToJSON();
