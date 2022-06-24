import { FC } from 'react';
import { Post } from '../types/posts';

type PostItemProps = {
    post: Post;
}

const PostsItem: FC<PostItemProps> = ({post}) => {
    return (
        <div >
            {post.id}. {post.title}
        </div>
    );
}

export default PostsItem;
