import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface User {
    id: number;
    name: string;
    username: string;
}

export const usersApi = createApi({
    reducerPath: "usersApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
    endpoints: (builder) => ({
        getAllUsers: builder.query<User[], void>({
            query: () => "users",
        })
    })
})

export const { useGetAllUsersQuery } = usersApi