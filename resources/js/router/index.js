import { createRouter, createWebHistory } from 'vue-router'

const LoginComponent = () => import('../components/users/LoginComponent.vue')
const ForgotPasswordComponent = () => import('../components/users/ForgotPasswordComponent.vue')
const ProfileComponent = () => import('../components/users/ProfileComponent.vue')

const routes = [
    {
        path: '/',
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
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
})