import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

const mount = (el, {onNavigate, defaultHistory, initialPath}) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    });

    if (onNavigate) {
        history.listen(onNavigate);
    }
    
    ReactDOM.render(
        <App history={history}/>,
        el
    )

    return {
        onParentnavigate: ({pathname: nextPathname}) => {
            const {pathname} = history.location;
            if (pathname !== nextPathname) {
                history.push(nextPathname);
            }
        }
    }
}

// Running insolation
if (process.env.NODE_ENV === 'development') {
    const ele = document.querySelector('#marketing-isloation');

    if (ele) {
        mount(ele, {defaultHistory: createBrowserHistory()});
    }
}

// Running from container
export { mount };