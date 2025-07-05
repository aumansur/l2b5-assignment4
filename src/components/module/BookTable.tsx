import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Trash2, View } from "lucide-react";

import type { IBook } from "@/types/book";
import Container from "@/utils/Container";
import { useDeleteBookMutation } from "@/redux/features/book/bookApi";
import { toast } from "sonner";
import UpdateBookModal from "./UpdateBookModal";

import CreateBorrow from "./CreateBorrow";
import { Link } from "react-router-dom";

const BookTable: React.FC<{ book: IBook }> = ({ book }) => {
  const [deleteBook] = useDeleteBookMutation();

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this book?")) {
      try {
        await deleteBook(id).unwrap();
        toast.success("Book deleted");
      } catch {
        toast.error("Failed to delete book");
      }
    }
  };
  // };

  return (
    <Container>
      <Card className="mt-4">
        <CardContent>
          {/* Desktop Table */}
          <div className="hidden md:block max-h-[400px] overflow-y-auto border rounded-md">
            <ScrollArea>
              <table className="w-full table-fixed text-sm border-collapse border border-gray-300">
                <thead className="sticky top-0 bg-[#1976D2] text-white z-10">
                  <tr>
                    <th className="p-3 w-[150px]">Title</th>
                    <th className="p-3 w-[120px]">Author</th>
                    <th className="p-3 w-[100px]">Genre</th>
                    <th className="p-3 w-[160px]">ISBN</th>
                    <th className="p-3 w-[80px] text-center">Copies</th>
                    <th className="p-3 w-[100px] text-center">Available</th>
                    <th className="p-3 w-[140px] text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 w-[150px] truncate">{book.title}</td>
                    <td className="p-3 w-[120px] truncate">{book.author}</td>
                    <td className="p-3 w-[100px]">{book.genre}</td>
                    <td className="p-3 w-[160px] truncate">{book.isbn}</td>
                    <td className="p-3 w-[80px] text-center">{book.copies}</td>
                    <td className="p-3 w-[100px] text-center">
                      <span
                        className={`text-xs px-2 py-1 rounded font-medium ${
                          book.available
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}>
                        {book.available ? "Yes" : "No"}
                      </span>
                    </td>
                    <td className="p-3 w-[140px] flex gap-2 justify-center">
                      <Button
                        variant="outline"
                        size="icon"
                        aria-label="Edit Book">
                        <UpdateBookModal book={book} />
                      </Button>

                      <Button
                        variant="outline"
                        size="icon"
                        aria-label="Delete Book"
                        onClick={() => handleDelete(book._id)}>
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </Button>

                      <Button
                        variant="outline"
                        size="icon"
                        disabled={!book.available || book.copies === 0}
                        aria-label="Borrow Book">
                        <CreateBorrow
                          bookId={book._id}
                          availableCopies={book.copies}
                        />
                      </Button>
                      <Link to={`/books/${book._id}`}>
                        <Button
                          variant="outline"
                          size="icon"
                          aria-label="Edit Book">
                          <View className="text-center" />
                        </Button>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </ScrollArea>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4">
            <div className="border rounded-lg p-4 shadow-sm">
              <p>
                <span className="font-semibold">📖 Title:</span> {book.title}
              </p>
              <p>
                <span className="font-semibold">✍️ Author:</span> {book.author}
              </p>
              <p>
                <span className="font-semibold">🏷 Genre:</span> {book.genre}
              </p>
              <p>
                <span className="font-semibold">🔢 ISBN:</span> {book.isbn}
              </p>
              <p>
                <span className="font-semibold">📦 Copies:</span> {book.copies}
              </p>
              <p>
                <span className="font-semibold">✅ Available:</span>{" "}
                <span
                  className={`text-xs px-2 py-1 rounded font-medium ${
                    book.available
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}>
                  {book.available ? "Yes" : "No"}
                </span>
              </p>
              <div className="flex gap-2 mt-3">
                <Button variant="outline" size="icon" aria-label="Edit Book">
                  <UpdateBookModal book={book} />
                </Button>

                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete(book._id)}>
                  <Trash2 className="w-4 h-4 mr-1" /> Delete
                </Button>

                <Button variant="outline" size="sm">
                  <CreateBorrow
                    bookId={book._id}
                    availableCopies={book.copies}
                  />
                </Button>
                <Link to={`/books/${book._id}`}>
                  <Button variant="outline" size="icon" aria-label="Edit Book">
                    <View className="text-center" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};

export default BookTable;
