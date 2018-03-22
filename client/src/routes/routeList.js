import Index from  'pages/Index';
import BookDetail from  'pages/BookDetail';

const routes = [
    {
        path: '/',
        component: Index,
        exact:true,
    },
    {
        path: '/book/:_id',
        component: BookDetail,
    }

];


export default routes;