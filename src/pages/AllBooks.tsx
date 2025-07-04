import BookTable from "@/components/module/BookTable";
import { useGetBooksQuery } from "@/redux/features/book/bookApi";
import type { IBook } from "@/types/book";
import Container from "@/utils/Container";

const AllBooks = () => {
  const { data, isLoading } = useGetBooksQuery(undefined);
  console.log("data", data);
  console.log("isLoading", isLoading);
  return (
    <Container>
      <h2 className="text-xl font-semibold mb-4 text-[#1976D2]">
        📘 Book List
      </h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        data?.data?.map((book: IBook) => (
          <BookTable key={book._id} book={book} />
        ))
      )}
    </Container>
  );
};

export default AllBooks;
