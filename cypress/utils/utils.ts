import { LoginData } from "../integration/types/types";
import * as loginView from "../integration/views/login.view";
import { button, loginButton } from "../integration/types/constants"

export function inputText(fieldId: string, text: string){
    cy.get(fieldId).type(text);
}

export function click(fieldId: string, buttonText: string){
    cy.contains(fieldId, buttonText)
        .click();
}

export function clickKebab(fieldId: string) {
    cy.get(fieldId)
        .click()
}

export function login(loginData: LoginData) {
    cy.visit(loginData.url);
    inputText(loginView.userNameInput, loginData.username);
    inputText(loginView.userPasswordInput, loginData.password);
    click(button, loginButton);
    click(button, 'Get started')
}
