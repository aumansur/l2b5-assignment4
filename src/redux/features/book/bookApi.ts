// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://l2b5-assignment3.vercel.app/api",
  }),
  tagTypes: ["Book"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => `/books`,
      providesTags: ["Book"],
    }),
    getSingleBook: builder.query({
      query: (id) => `/books/${id}`,
    }),
    //create book endpoint
    create: builder.mutation({
      query: (data) => ({
        url: `/books`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Book"],
    }),
    //delete book endpoint
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Book"],
    }),
    //update book endpoint with put method
    updateBook: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/books/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Book"], // ✅ Correct match
    }),
  }),
});

// Export hooks for usage in functional components, which are
export const {
  useGetBooksQuery,
  useCreateMutation,
  useDeleteBookMutation,
  useUpdateBookMutation,
  useGetSingleBookQuery,
} = baseApi;
