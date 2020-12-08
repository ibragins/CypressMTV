import { Login } from '../integration/types/types'
const url = Cypress.env('url');
const user_login = 'kubeadmin'
const user_password = Cypress.env('pass');

export const loginData: Login = {
    username: user_login,
    password: user_password,
    url: url
}