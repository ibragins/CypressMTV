import {Mapping} from "./mapping";
import {click} from "../../utils/utils";
import {storage} from "../types/constants";
import {menuNavLink} from "../views/mapping.view";

export class MappingStorage extends Mapping{
    create() {
        //Navigating to the sidebar menu
        this.openMenu()

        //Clicking on Network menu item
        click(menuNavLink, storage)

        //Creating new mapping instance
        this.createDialog()
    }
}