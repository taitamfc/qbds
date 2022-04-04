import { createRouter, createWebHistory } from 'vue-router'

//{ path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
const LoginComponent = () => import('../components/users/LoginComponent.vue')
const ForgotPasswordComponent = () => import('../components/users/ForgotPasswordComponent.vue')
const ProfileComponent = () => import('../components/users/ProfileComponent.vue')
const HomeComponent = () => import('../components/HomeComponent.vue')
const ProductsComponent = () => import('../components/products/ProductsComponent.vue')
const ProductDetailComponent = () => import('../components/products/ProductDetailComponent.vue')

const routes = [
    {
        path: '/',
        name: 'home',
        component: ProfileComponent
    },
    {
        path: '/login',
        name: 'users.login',
        component: LoginComponent
    },
    {
        path: '/forgot-password',
        name: 'users.forgot-password',
        component: ForgotPasswordComponent
    },
    {
        path: '/profile',
        name: 'users.profile',
        component: ProfileComponent
    },
    {
        path: '/products',
        name: 'products.index',
        component: ProductsComponent
    },
    {
        path: '/products/:id',
        name: 'products.show',
        component: ProductDetailComponent
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
})