export type IBook = {
  [x: string]: any;
  id: string;
  title: string;
  bookDescription: string;
  author: string;
  genre: string;
  year: string;
  publicationDate: string;
  price: number;
  bookImage?: string;
  rating?: number;
};
