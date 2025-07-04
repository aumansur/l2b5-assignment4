export interface IBorrowItem {
  totalQuantity: number;
  book: {
    title: string;
    isbn: string;
  };
}

export interface IBorrow {
  quantity: number;
  dueDate: Date;
}
export type CreateBorrowProps = {
  bookId: string;
  availableCopies: number;
};
