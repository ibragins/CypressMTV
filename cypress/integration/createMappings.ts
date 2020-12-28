import {MappingNetwork} from "./models/mappingNetwork";
import {testData} from "./config";
import {login} from "../utils/utils";

describe('Create new Network mapping', () => {
    const networkMapping = new MappingNetwork(testData.networkMappingData)
    it('Create new network mapping', () => {
        login(testData.loginData);
        networkMapping.create()
    })
})