import { apiSlice } from "./base-query";

export const listingApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllListing: builder.query({
      query: () => ({
        url: "/beuty-service",
        method: "GET",
      }),
    }),
    getDetailListing: builder.query({
      query: (slug: string) => ({
        url: `/beuty-service/:${slug}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllListingQuery, useGetDetailListingQuery } = listingApi;
