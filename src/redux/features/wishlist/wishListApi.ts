/* eslint-disable @typescript-eslint/no-unused-vars */
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

    deleteWish: builder.mutation({
      query: ({ email, wishlistItemId }) => ({
        url: "/wishlists",
        method: "DELETE",
        body: { email: email, wishlistItemId: wishlistItemId },
      }),
    }),
  }),
});

export const {
  useCreateWishListMutation,
  useDeleteWishMutation,
  useGetWishListQuery,
} = wishListApi;
