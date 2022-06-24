import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {Post} from "../types/posts";


export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
    endpoints: (build) => ({
        fetchAllPosts: build.query<Post[], {limit: number, page: number}>({
            query: ({limit = 5, page = 1}) => ({
                url: "/posts",
                params: {
                    _limit: limit,
                    _page: page
                }
            })
        })
    })
})
