import {ProviderData} from "../types/types";
import {
    addProvider,
    button,
    remove,
    selectProviderType,
    tr,
    vmware
} from "../types/constants";
import {click, clickWithNoText} from "../../utils/utils";
import {kebab, kebabDropDownItem} from "../views/provider.view";
import {providerData} from "../config";
import {vmwareMenu} from "../views/providerVmware.view";

export class Provider {
    providerData: ProviderData;
    constructor(providerData: ProviderData) {
        this.providerData = providerData;
    }

    create_stage1(){
        //TODO: replace hardcoded timeout by expecting button to become clickable
        cy.wait(3000)
        click(button, addProvider)
        click(button, selectProviderType)
    }

    delete(){
        click(vmwareMenu, vmware)
        cy.contains(providerData.name)
            .parent(tr)
            .within(() => {
                clickWithNoText(kebab)
            })
        click(kebabDropDownItem, remove)
        click(button, remove)
    }
}