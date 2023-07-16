import { api } from "../../api/apiSlice";

const wishListApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getWishList: builder.query({
      query: (email) => `/wishlists/${email}`,
    }),

    createWishList: builder.mutation({
      query: ({ data }) => ({
        url: `/wishLists/create-wishList`,
        method: "POST",
        body: data,
      }),
    }),

   
  }),
});

export const { useCreateWishListMutation,useGetWishListQuery } = wishListApi;
