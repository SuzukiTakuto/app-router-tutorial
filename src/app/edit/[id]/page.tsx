import React from "react";
import BookDetails from "@/app/components/BookDetails";
import FormEdit from "@/app/components/FormEdit";
import { getBookById, getReviewById } from "@/app/lib/getter";

const EditPage = async ({ params }: { params: { id: string } }) => {
  const book = await getBookById(params.id);
  const review = await getReviewById(params.id);
  const read = (review?.read || new Date()).toLocaleDateString("sv-SE");
  return (
    <div id="form">
      <BookDetails book={book} />
      <hr />
      <FormEdit id={params.id} read={read} memo={review?.memo || ""} />
    </div>
  );
};

export default EditPage;
