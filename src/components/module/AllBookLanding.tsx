import BookTable from "@/components/module/BookTable";
import { Button } from "@/components/ui/button";
import { useGetBooksQuery } from "@/redux/features/book/bookApi";
import type { IBook } from "@/types/book";
import Container from "@/utils/Container";
import { Link } from "react-router-dom";
import { ScaleLoader } from "react-spinners";

const AllBookLanding = () => {
  const { data, isLoading } = useGetBooksQuery(undefined);

  return (
    <Container>
      <h2 className="text-xl flex justify-center font-semibold mb-4 text-[#1976D2]">
        📘 Book List
      </h2>
      {isLoading ? (
        <ScaleLoader color="#1976D2" className="text-center" />
      ) : (
        <>
          {data?.data?.slice(0, 10).map((book: IBook) => (
            <BookTable key={book._id} book={book} />
          ))}

          {/* "See More" Button */}
          {data?.data?.length > 10 && (
            <div className="flex justify-center mt-6">
              <Link to="/books">
                <Button variant="default">See More Books</Button>
              </Link>
            </div>
          )}
        </>
      )}
    </Container>
  );
};

export default AllBookLanding;
