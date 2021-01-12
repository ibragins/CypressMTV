import {PlanData} from "../types/types";
import {openSidebarMenu} from "../../utils/utils";

export class Plan {
    planData: PlanData;
    constructor(planData: PlanData) {
        this.planData = planData;
    }
    create(){
        openSidebarMenu()
    }
}