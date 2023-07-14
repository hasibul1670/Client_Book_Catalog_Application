import { api } from "../../api/apiSlice";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    logInuser: builder.query({
      query: () => "/auth/login",
    }),
  }),
});

export const { useLogInuserQuery } = userApi;
