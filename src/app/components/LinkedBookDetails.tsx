import Link from "next/link";
import BookDetails from "./BookDetails";
import { Book } from "../utils/types";

type Props = {
  book: Book;
  index: number;
};

const LinkedBookDetails = (props: Props) => {
  const { book, index } = props;
  return (
    <>
      <Link href={`/edit/${book.id}`}>
        <div className="hover: bg-green-50">
          <BookDetails book={book} index={index} />
        </div>
      </Link>
    </>
  );
};

export default LinkedBookDetails;
