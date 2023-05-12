import { mount } from 'authApp/AuthFile';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default ({clickSignIn}) => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const { onParentnavigate } = mount(ref.current, {
            onNavigate: ({ pathname: nextPathname }) => {
                const { pathname } = history.location;
                if (pathname !== nextPathname) {
                    history.push(nextPathname);
                }
            },
            initialPath: history.location.pathname,
            onSignIn: () => {
                clickSignIn();
            }
        });
        history.listen(onParentnavigate)
    }, []);

    return <div ref={ref} />;
}
