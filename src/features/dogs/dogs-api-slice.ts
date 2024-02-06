import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const DOG_API_KEY = 'cbfb51a2-84bb-4025-a3e2-ed8616edf311';

interface Bread {
    id: string;
    name: string;
    temperament: string;
    breed_group: string;
    height: { imperial: string, metric: string }
}

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.thedogapi.com/v1",
        prepareHeaders(headers) {
            headers.set('x-api-key', DOG_API_KEY)

            return headers
        }
    }),
    endpoints(builder) {
        return {
            fetchBreeds:builder.query<Bread[], number | void>({
                query(limit = 10) {
                    return `/breeds?limit=${limit}`
                }
            })
        }
    }
})

export const { useFetchBreedsQuery } = apiSlice;