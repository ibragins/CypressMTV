import {Provider} from "./provider";
import {click, inputText} from "../../utils/utils";
import {selectProvider} from "../views/provider.view";
import {vmware} from "../types/constants";
import {
    add, addButton,
    instanceFingerprint,
    instanceHostname,
    instanceName,
    instancePassword,
    instanceUsername, vmwareMenu
} from "../views/providerVmware.view";

export class ProviderVmware extends Provider {

    create_stage2(){
        click(selectProvider, vmware)
        inputText(instanceName, this.providerData.name);
        inputText(instanceHostname, this.providerData.hostname)
        inputText(instanceUsername, this.providerData.username)
        inputText(instancePassword, this.providerData.password)
        inputText(instanceFingerprint, this.providerData.cert)
        click(addButton, add)
        click(vmwareMenu, vmware)
    }

    create(){
        this.create_stage1()
        this.create_stage2()
    }



}