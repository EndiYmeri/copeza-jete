import type { ImageSizes } from "../types/image";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}



export const pagesTransformer = (pages: any[]) => {
  return pages.map((page: any) => ({
    id: page.id,
    slug: page.slug,
    title: page.title.rendered,
    masonryGrid: page.acf?.masonry_grid, // Added optional chaining in case acf or masonry_grid is undefined
  }));
};

export const getMediaDetails = (media: any): ImageSizes => {
  return media.media_details.sizes;
};
