import { GetStaticPathsContext, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface PostListPageProps {
    posts: any[]
}

export default function PostListPage({ posts }: PostListPageProps) {
    const router = useRouter()
    return (
        <div>
            <h1>PostListPage</h1>
            <p>Query: {JSON.stringify(router.query)}</p>

            <ul>
                {posts.map((post) =>
                    <li key={post.id}>{post.title}</li>
                )}
            </ul>
        </div>
    );
}

export const getStaticProps: GetStaticProps<PostListPageProps> = async (
    context: GetStaticPathsContext
) => {
    // server-side
    // build-time

    // this query data and pass into NEXT_DATA, so client side can get data
    console.log('static props');
    const response = await fetch("https://js-post-api.herokuapp.com/api/posts?_page=1")
    const data = await response.json()
    console.log(data);

    return {
        props: {
            posts: data.data.map((x: any) => ({ id: x.id, title: x.title }))
        }
    }
}

