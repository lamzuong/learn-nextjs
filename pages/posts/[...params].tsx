import { useRouter } from 'next/router';
import * as React from 'react';

export interface ParamPageProps {
}

export default function ParamPage(props: ParamPageProps) {
    const router = useRouter()
    return (
        <div>
            <h1>ParamPage</h1>
            <p>Query: {JSON.stringify(router.query)}</p>
        </div>
    );
}
