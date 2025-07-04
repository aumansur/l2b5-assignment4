import BorrowCard from "@/components/module/BorrowCard";

import { useGetBorrowQuery } from "@/redux/features/borrow/borrowApi";
import type { IBorrowItem } from "@/types/borrow";
import Container from "@/utils/Container";

const BorrowBook = () => {
  const { data, isLoading, error } = useGetBorrowQuery(undefined);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error loading borrow data</p>;
  }

  // Access the actual array inside `data`
  const borrowList = data?.data || [];

  return (
    <Container>
      <h2 className="text-xl font-semibold mb-4 text-[#1976D2]">
        📚 Borrow Summary
      </h2>
      {borrowList.map((borrow: IBorrowItem) => (
        <BorrowCard key={borrow.book.isbn} borrow={borrow} />
      ))}
    </Container>
  );
};

export default BorrowBook;
