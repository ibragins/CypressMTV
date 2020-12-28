import { MappingData } from "../types/types";
import * as view from "../views/mapping.view";
import {click, clickKebab, inputText} from "../../utils/utils";
import {button} from "../types/constants";
import {sProvider, tProvider} from "../views/mapping.view";
import {nav_toggle} from "../views/menu.view";
// import { mappingName } from "../views/mapping.view";

export class Mapping {
    mappingData: MappingData;
    constructor(mappingData: MappingData) {
        this.mappingData = mappingData;
        // this.create();
    }

    selectSourceProvider(){
        click(button, sProvider)
        click(button, 'qe-vmware')
    }

    selectTargetProvider(){
        click(button, tProvider)
        click(button, 'host')
    }

    create(){
        cy.get(nav_toggle)
            .should('have.attr', 'aria-expanded')
            .and('have.value', 'false')
            .then(() => {
                clickKebab(nav_toggle);
            })
        inputText(view.mappingName, this.mappingData.name);
        this.selectSourceProvider();
        this.selectTargetProvider();
    }
}
