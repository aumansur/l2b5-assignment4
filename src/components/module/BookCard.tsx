import type { IBook } from "@/types/book";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import type React from "react";

const BookCard: React.FC<{ book: IBook }> = ({ book }) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{book.title}</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Login
        </Button>
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BookCard;
