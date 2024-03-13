import { Book, Item } from "../utils/types";
import prisma from "./prisma";

export async function getAllReviews() {
  return await prisma.reviews.findMany({
    orderBy: {
      read: "desc",
    },
  });
}

export function createBook(book: Item): Book {
  const authors = book.volumeInfo.authors;
  const price = book.saleInfo.listPrice?.amount || 0;
  const image = book.volumeInfo.imageLinks?.smallThumbnail || "/vercel.svg";
  return {
    id: book.id,
    title: book.volumeInfo.title,
    author: authors ? authors.join(", ") : "",
    price: price,
    publisher: book.volumeInfo.publisher,
    published: book.volumeInfo.publishedDate,
    image: image,
  };
}

export async function getBooksByKeyword(keyword: string): Promise<Book[]> {
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${keyword}&langRestrice=ja&maxResults=20&printType=books`
  );
  const result = await res.json();
  const books = result.items.map(createBook);
  return books;
}

export async function getBookById(id: string): Promise<Book> {
  const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
  const result = await res.json();
  return createBook(result);
}

export async function getReviewById(id: string) {
  return await prisma.reviews.findUnique({
    where: {
      id: id,
    },
  });
}
