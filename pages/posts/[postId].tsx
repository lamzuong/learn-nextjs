import { useRouter } from 'next/router';
import * as React from 'react';

export interface PostIdPageProps {
}

export default function PostIdPage(props: PostIdPageProps) {
    const router = useRouter()
    return (
        <div>
            <h1>PostIdPage</h1>
            <p>Query: {JSON.stringify(router.query)}</p>
        </div>
    );
}
