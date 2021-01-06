import {Mapping} from "./mapping";
import {click} from "../../utils/utils";
import {network} from "../types/constants";
import {menuNavLink} from "../views/mapping.view";

export class MappingNetwork extends Mapping{
    create(){
        //Navigating to the sidebar menu
        this.openMenu()

        //Clicking on Network menu item
        click(menuNavLink, network)

        //Creating new mapping instance
        this.createDialog()
    }

}