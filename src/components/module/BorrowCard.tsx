import type { IBorrowItem } from "@/types/borrow";
import { Card, CardContent } from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";

const BorrowCard = ({ borrow }: { borrow: IBorrowItem }) => {
  return (
    <>
      <Card className="mt-6 hidden md:block">
        <CardContent>
          <div className="max-h-[400px] overflow-auto rounded-md border">
            <ScrollArea>
              {/* Add horizontal scroll wrapper */}
              <div className="overflow-x-auto">
                <table className="w-full table-fixed text-sm border-collapse min-w-[600px]">
                  <thead className="sticky top-0 bg-[#1976D2] text-white z-10">
                    <tr>
                      <th className="p-2 sm:p-3 w-[40%] text-left">
                        Book Title
                      </th>
                      {/* Hide ISBN on small screens */}
                      <th className="hidden sm:table-cell p-2 sm:p-3 w-[30%] text-left">
                        ISBN
                      </th>
                      <th className="p-2 sm:p-3 w-[30%] text-center">
                        Total Borrowed
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {borrowList.map((borrow: IBorrowItem) => (
                      <BorrowCard key={borrow.book.isbn} borrow={borrow} />
                    ))} */}
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                      <td className="p-2 sm:p-3">{borrow.book.title}</td>
                      <td className="hidden sm:table-cell p-2 sm:p-3">
                        {borrow.book.isbn}
                      </td>
                      <td className="p-2 sm:p-3 text-center font-medium text-gray-700">
                        {borrow.totalQuantity}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </ScrollArea>
          </div>
        </CardContent>
      </Card>

      {/* Mobile view */}
      <Card className="mb-4 md:hidden">
        <CardContent>
          <h3 className="text-lg font-semibold">Title: {borrow.book.title}</h3>
          <p className="text-sm text-gray-600">ISBN: {borrow.book.isbn}</p>
          <p className="mt-2 font-medium">
            Total Borrowed: {borrow.totalQuantity}
          </p>
        </CardContent>
      </Card>
    </>
  );
};

export default BorrowCard;
