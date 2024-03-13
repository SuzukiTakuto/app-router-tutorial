import Image from "next/image";
import { getAllReviews } from "./lib/getter";
import LinkedBookDetails from "./components/LinkedBookDetails";

export const dynamic = "force-dynamic";
export default async function Home() {
  const reviews = await getAllReviews();
  return (
    <>
      {reviews.map((b, i) => (
        <LinkedBookDetails key={b.id} book={b} index={i + 1} />
      ))}
    </>
  );
}
