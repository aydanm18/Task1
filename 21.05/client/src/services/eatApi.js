// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const eatApi = createApi({
    reducerPath: 'eatApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
    endpoints: (builder) => ({
        getAll: builder.query({
            query: () => `/eats`,
        }),
        getOne: builder.query({
            query: (id) => `/eats/${id}`,
        }),
        deleteEat: builder.mutation({
            query: (id) => (
                {
                    url:`/eats/${id}`,
                    method:'Delete'
                }
            )
          
        }),
        postEat: builder.mutation({
            query: (payload) => (
                {
                    url:`/eats`,
                    method:'Post',
                    body:payload,
                    headers:{
                        'Content-Type':'application/json'
                    }
                }
            )
          
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllQuery,useGetOneQuery,useDeleteEatMutation,usePostEatMutation } = eatApi