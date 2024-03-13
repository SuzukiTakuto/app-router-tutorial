import Image from "next/image";
import { Book } from "../utils/types";

type Props = {
  book: Book;
  index?: number;
};

const BookDetails = (props: Props) => {
  const { book, index } = props;
  return (
    <div className="flex w-full mb-4">
      <div>
        <Image src={book.image} alt="" width={40} height={180} />
      </div>
      <div>
        <ul className="list-none text-black ml-4">
          <li>{index && index + "."}</li>
          <li>
            {book.title} ({book.price})
          </li>
          <li>{book.author}</li>
          <li>{book.publisher}刊</li>
          <li>{book.published}発売</li>
        </ul>
      </div>
    </div>
  );
};

export default BookDetails;
