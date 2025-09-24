type TImageSizeDetails = {
  file: string;
  width: number;
  height: number;
  filesize: number;
  mime_type: string;
  source_url: string;
};

type ImageSizesTypes =
  | "medium"
  | "large"
  | "thumbnail"
  | "medium_large"
  | "full"
  | string;

export type ImageSizes = Record<ImageSizesTypes, TImageSizeDetails>;

export type MasonryImages = {
  col1: any[];
  col2: any[];
  col3: any[];
  col4: any[];
};

export interface WordPressImageSize {
  file: string;
  width: number;
  height: number;
  source_url: string;
}

export interface WordPressImageDetails {
  id: number;
  title: { rendered: string };
  alt_text: string; // Add alt text if available
  media_details: {
    width: number;
    height: number;
    sizes: {
      medium_large?: WordPressImageSize;
      full?: WordPressImageSize; // <--- Make sure 'full' is here
      // ... other sizes
    };
  };
  source_url: string; // Original source URL
  // Add flattened size properties if your getMediaDetails does that
  medium_large?: WordPressImageSize;
  full?: WordPressImageSize; // <--- And here if flattened
}
