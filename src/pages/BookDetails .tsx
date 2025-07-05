import { useParams } from "react-router-dom";
import { useGetSingleBookQuery } from "@/redux/features/book/bookApi";
import { Card, CardContent } from "@/components/ui/card";
import Container from "@/utils/Container";
import { ScaleLoader } from "react-spinners";

const BookDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetSingleBookQuery(id);

  if (isLoading) return <ScaleLoader color="#1976D2" className="text-center" />;
  if (error || !data?.data) return <p>Book not found.</p>;

  const book = data.data;

  return (
    <Container className="py-8">
      <Card>
        <CardContent className="space-y-3">
          <h1 className="text-2xl font-bold">{book.title}</h1>
          <p>
            <strong>Author:</strong> {book.author}
          </p>
          <p>
            <strong>Genre:</strong> {book.genre}
          </p>
          <p>
            <strong>ISBN:</strong> {book.isbn}
          </p>
          <p>
            <strong>Copies:</strong> {book.copies}
          </p>
          <p>
            <strong>Available:</strong>{" "}
            <span
              className={`text-sm font-medium px-2 py-1 rounded ${
                book.available
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}>
              {book.available ? "Yes" : "No"}
            </span>
          </p>
        </CardContent>
      </Card>
    </Container>
  );
};

export default BookDetails;
