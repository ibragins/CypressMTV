import { Login } from "../integration/types/types";
import * as loginView from "../integration/views/login.view";

export function login(loginData: Login) {
    cy.visit(loginData.url);
    cy.get(loginView.userNameInput).type(loginData.username);
    cy.get(loginView.userPasswordInput).type(loginData.password);
    cy.contains('Log in')
        .get('body > div > div > main > div > form > div.pf-c-form__group.pf-m-action > button')
        .click();

}