import BookTable from "@/components/module/BookTable";
import Slider from "@/components/module/Slider";
import { Button } from "@/components/ui/button";
import { useGetBooksQuery } from "@/redux/features/book/bookApi";
import type { IBook } from "@/types/book";
import Container from "@/utils/Container";
import { Link } from "react-router-dom";

const Home = () => {
  const { data, isLoading } = useGetBooksQuery(undefined);

  console.log("isLoading", isLoading);
  return (
    <div>
      <div className="min-h-screen w-screen">
        <Slider />
      </div>

      <div className="py-8">
        <Container>
          {isLoading ? (
            <p>Loading...</p>
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
      </div>
    </div>
  );
};

export default Home;
