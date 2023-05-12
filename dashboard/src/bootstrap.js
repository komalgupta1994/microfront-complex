import {createApp} from 'vue';
import Dashboard from './components/Dashboard.vue';

const mount = (el) => {
    const app = createApp(Dashboard);
    app.mount(el);
}

// Running insolation
if (process.env.NODE_ENV === 'development') {
    const ele = document.querySelector('#dashboard-isloation');

    if (ele) {
        mount(ele);
    }
}

// Running from container
export { mount };