import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/",
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    logIn: builder.mutation({
      query: (user) => ({
        url: "users/auth",
        method: "post",
        body: user,
      }),
      invalidatesTags: ["Users"],
    }),
    register: builder.mutation({
      query: (user) => ({
        url: "users/register",
        method: "post",
        body: user,
      }),
      invalidatesTags: ["Users"],
    }),
    logOut: builder.mutation({
      query: () => ({
        url: "users/logout",
        method:"POST"
      })
    })
  }),
});

export const { useLogInMutation, useRegisterMutation, useLogOutMutation } = apiSlice;
