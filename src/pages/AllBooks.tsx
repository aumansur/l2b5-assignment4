import BookTable from "@/components/module/BookTable";
import { useGetBooksQuery } from "@/redux/features/book/bookApi";
import type { IBook } from "@/types/book";
import Container from "@/utils/Container";
import { ScaleLoader } from "react-spinners";

const AllBooks = () => {
  const { data, isLoading } = useGetBooksQuery(undefined);

  return (
    <Container>
      <h2 className="text-xl font-semibold mb-4 text-[#1976D2]">
        📘 Book List
      </h2>
      {isLoading ? (
        <ScaleLoader color="#1976D2" className="text-center" />
      ) : (
        data?.data?.map((book: IBook) => (
          <BookTable key={book._id} book={book} />
        ))
      )}
    </Container>
  );
};

export default AllBooks;
