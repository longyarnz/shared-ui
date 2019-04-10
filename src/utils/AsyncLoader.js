import React, { Suspense, useMemo } from 'react';
import Spinner from './Spinner';

export default function AsyncLoader({ path, ...props }) {
    const LoadComponent = () => import(`${path}`);
    const Payload = React.lazy(LoadComponent);

    return useMemo(() => (
        <Suspense fallback={props.fallback ? props.fallback : <Spinner />}>
            <Payload {...props} />
        </Suspense>
    ), [props]);
}