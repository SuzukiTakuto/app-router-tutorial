import React from "react";
import LinkedBookDetails from "@/app/components/LinkedBookDetails";
import { getBooksByKeyword } from "@/app/lib/getter";

const BookResult = async ({ params: { keyword = "React" } }) => {
  console.log("sdsd");
  const books = await getBooksByKeyword(keyword);
  return (
    <>
      {books.map((b, i) => (
        <LinkedBookDetails key={b.id} book={b} index={i + 1} />
      ))}
    </>
  );
};

export default BookResult;
