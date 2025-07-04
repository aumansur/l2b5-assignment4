import { Dialog } from "@radix-ui/react-dialog";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { useState } from "react";
import type { CreateBorrowProps, IBorrow } from "@/types/borrow";
import { BookOpen, CalendarIcon } from "lucide-react";

import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useCreateBorrowMutation } from "@/redux/features/borrow/borrowApi";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const CreateBorrow: React.FC<CreateBorrowProps> = ({
  bookId,
  availableCopies,
}) => {
  const navigate = useNavigate();
  const [borrowBook] = useCreateBorrowMutation();

  const form = useForm();
  const [open, setOpen] = useState(false);
  const onSubmit = async (data: IBorrow) => {
    console.log(data);

    if (data.quantity <= 0 || data.quantity > availableCopies) {
      toast.error("book is marked unavailable Invalid quantity");
      return;
    }

    const borrowData = {
      book: bookId,
      ...data,
    };

    try {
      await borrowBook(borrowData).unwrap();
      toast.success("Book borrowed successfully");

      // ✅ Update book list cache

      navigate("/books");
      setOpen(false);
    } catch (err: any) {
      toast.error(err?.data?.message || "Borrow failed");
    }
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="link" className="w-full" type="button">
            <BookOpen className="w-4 h-4 text-emerald-600" />
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Borrow Book</DialogTitle>
            <DialogDescription className="sr-only">
              Edit your book and click submit.
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quantity</FormLabel>
                    <FormControl>
                      <Input placeholder="Book Quantity" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dueDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Due Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}>
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a Due Date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          captionLayout="dropdown"
                        />
                      </PopoverContent>
                    </Popover>
                  </FormItem>
                )}
              />
              <DialogFooter className="mt-5">
                <Button type="submit" className="w-full">
                  Borrow Book
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateBorrow;
