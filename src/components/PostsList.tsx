import React, {FC, useState} from 'react';
import {postApi} from "../services/PostServices";
import PostsItem from "./PostsItem";


const PostsList: FC = () => {
    const [limit, setLimit] = useState(5)
    const [page, setPage] = useState(1)
    const {data: posts, isLoading, error} = postApi.useFetchAllPostsQuery({limit, page})
    const pages = [1, 2, 3, 4, 5]

    return (
        <div>
            <select onChange={(e) => setLimit(Number(e.target.value))}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
            </select>
            <div style={{marginTop: "10px"}}>
                {isLoading && <h1>Загрузка....</h1>}
                {error && <h1>Произошла ошибка при загрузку</h1>}
                {posts && posts.map(post => <PostsItem key={post.id} post={post}/>)}
            </div>
            <div style={{marginTop: "20px", textAlign: 'center'}}>
                {pages.map((p, i) =>
                    <span
                        onClick={() => setPage(p)}
                        style={{border: p === page ? '1px solid red' : '1px solid black', padding: '10px'}}
                        key={i}>
                        {p}
                    </span>)}
            </div>
        </div>
    );
}

export default PostsList;
