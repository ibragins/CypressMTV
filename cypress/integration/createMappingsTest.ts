import {MappingNetwork} from "./models/mappingNetwork";
import {testData} from "./config";
import {login} from "../utils/utils";
import {MappingStorage} from "./models/mappingStorage";

describe('Create new Network and Storage mappings', () => {
    const networkMapping = new MappingNetwork(testData.networkMappingData[0])
    const storageMapping = new MappingStorage(testData.storageMappingData[0])
    // it('Create new network mapping', () => {
    //     login(testData.loginData);
    //     networkMapping.create()
    // })

    it('Create new storage mapping', () => {
        login(testData.loginData);
        storageMapping.create();
    })
})