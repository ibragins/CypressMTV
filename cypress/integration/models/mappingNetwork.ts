import {Mapping} from "./mapping";
import {nav_toggle} from "../views/menu.view";
import {click, clickKebab, inputText} from "../../utils/utils";
import * as view from "../views/mapping.view";

export class MappingNetwork extends Mapping{
    create(){
        cy.get(nav_toggle)
            .should('have.attr', 'aria-expanded')
            .and('have.value', 'false')
            .then(() => {
                clickKebab(nav_toggle);
            })
        click('.pf-c-nav', 'Mappings')
        click('pf-c-nav__link', 'Network')
        inputText(view.mappingName, this.mappingData.name);
        this.selectSourceProvider();
        this.selectTargetProvider();
    }

}