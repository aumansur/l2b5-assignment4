import { genres } from "@/components/module/genres";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useCreateMutation } from "@/redux/features/book/bookApi";

import type { IBook } from "@/types/book";
import Container from "@/utils/Container";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

// import genres from a separate file

const CreateBook = () => {
  const from = useForm<IBook>();
  const navigate = useNavigate();
  const [bookCreate, { data }] = useCreateMutation();
  console.log(data);
  const onSubmit = async (data: IBook) => {
    const bookData = {
      // if copies <= 0, set available to false
      ...data,
      available: data.copies > 0,
    };
    try {
      const res = await bookCreate(bookData).unwrap();

      toast.success("Book created successfully");
      // redirect to all books page
      // you can use react-router's useNavigate hook to redirect
      navigate("/books");

      from.reset(); //

      console.log("Book created:", res);
    } catch (err) {
      console.error("Failed to create book:", err);
    }

    // Here you can handle the form submission, e.g., send data to an API
  };

  return (
    <Container className="md:max-w-4xl max-w-md  mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-[#1976D2]">
        📚 Create New Book
      </h2>
      <Form {...from}>
        <form onSubmit={from.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={from.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Book Title" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={from.control}
            name="author"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Author</FormLabel>
                <FormControl>
                  <Input placeholder="Book Author" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={from.control}
            name="copies"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Copies</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Number of Copies"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={from.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="Book Description" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={from.control}
            name="isbn"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ISBN</FormLabel>
                <FormControl>
                  <Input placeholder="Book ISBN" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={from.control}
            name="genre"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Genre</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a genre" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {genres.map((genre) => (
                      <SelectItem key={genre} value={genre}>
                        {genre}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          <Button
            variant="default"
            className="w-full cursor-pointer"
            type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </Container>
  );
};

export default CreateBook;
