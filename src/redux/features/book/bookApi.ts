import { api } from "../../api/apiSlice";


const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
    }),
    singleBook: builder.query({
      query: (id) => `/books/${id}`,
    }),


    postBook: builder.mutation({
      query: ({ data }) => ({
        url: `/books/create-book`,
        method: "POST",
        body: data,
      }),
    }),

    postReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/review/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["review"],

    }),

    getReview: builder.query({
      query: (id) => `/review/${id}`,
      providesTags: ["review"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  usePostReviewMutation,
  useGetReviewQuery,
  usePostBookMutation,
  useSingleBookQuery,
} = productApi;
