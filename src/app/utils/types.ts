export type Book = {
  id: string;
  title: string;
  author: string;
  publisher: string;
  published: string;
  image: string;
  price: number;
};

export type Item = {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    imageLinks: {
      smallThumbnail: string;
    };
  };
  saleInfo: {
    listPrice: {
      amount: number;
    };
  };
};

export type Review = {
  id: string;
  title: string;
  author: string;
  price: number;
  publisher: string;
  published: string;
  image: string;
  read: string;
  memo: string;
};
