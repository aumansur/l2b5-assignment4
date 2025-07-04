import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const borrowApi = createApi({
  reducerPath: "borrowApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
  }),
  tagTypes: ["Borrow"],
  endpoints: (builder) => ({
    getBorrow: builder.query({
      query: () => "/borrow",
      providesTags: ["Borrow"],
    }),
    createBorrow: builder.mutation({
      query: (borrowData) => ({
        url: "/borrow",
        method: "POST",
        body: borrowData,
      }),
      invalidatesTags: ["Borrow"],
    }),
  }),
});
export const { useGetBorrowQuery, useCreateBorrowMutation } = borrowApi;
