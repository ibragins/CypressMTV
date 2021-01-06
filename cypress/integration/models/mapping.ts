import { MappingData } from "../types/types";
import * as view from "../views/mapping.view";
import {click, clickWithNoText, inputText, openSidebarMenu} from "../../utils/utils";
import {
    button,
    source,
    destination,
    sProvider,
    tProvider,
    create,
    mappings, createMapping
} from "../types/constants";
// import {nav_toggle, page_sidebar, sidebar_collapsed} from "../views/menu.view";
import {buttonNavLink, buttonPrimary, inputAttr} from "../views/mapping.view";
// import { mappingName } from "../views/mapping.view";

export class Mapping {
    mappingData: MappingData;

    constructor(mappingData: MappingData) {
        this.mappingData = mappingData;
    }

    selectProvider(provider: string, providerName: string) {
        click(button, provider)
        click(button, providerName)
    }

    selectInputByAttr(inputAttrName: string, inputAttrValue: string, inputStr: string){
        const selector = '[' + inputAttrName + '="' + inputAttrValue + '"]'
        inputText(selector, inputStr)
        click(button, inputStr)
    }

    openMenu(){
        // Checking if sidebar is collapsed and opening it if required
        openSidebarMenu()

        // Expanding sidebar mapping menu
        cy.get(buttonNavLink).then(($mappings) => {
            if ($mappings.attr('aria-expanded') == 'false') {
                click(buttonNavLink, mappings)
            }
        })
    }

    createDialog(){
        click(button, createMapping)
        inputText(view.mappingName, this.mappingData.name);
        this.selectProvider(sProvider, this.mappingData.sProviderName)
        this.selectProvider(tProvider, this.mappingData.tProviderName)
        this.selectInputByAttr(inputAttr, source, this.mappingData.sProvider);
        this.selectInputByAttr(inputAttr, destination, this.mappingData.dProvider);
        cy.wait(2000)
        click(buttonPrimary, create)
    }

}
