import {LoginData, MappingData, ProviderData, TestData} from './types/types'
import {vmware} from "./types/constants";
const url = Cypress.env('url');
const user_login = 'kubeadmin'
const user_password = Cypress.env('pass');

export const loginData: LoginData = {
    username: user_login,
    password: user_password,
    url: url
}

export const providerData: ProviderData = {
    type: vmware,
    name: 'qe-vmware',
    hostname: '10.8.58.136',
    username: 'administrator@vsphere.local',
    password: 'Tux4Linux!',
    cert: '7E:E7:4C:5C:3C:0E:51:D2:D7:8B:89:F1:DF:0A:9E:A5:D6:13:98:F6',
}

export const networkMappingData: MappingData = {
    name: 'string',
    sProviderName: 'string',
    tProviderName: 'string',
}

export const storageMappingData: MappingData = {
    name: 'string',
    sProviderName: 'string',
    tProviderName: 'string',
}

export const testData: TestData = {
    loginData: loginData,
    providerData: providerData,
    networkMappingData: networkMappingData,
    storageMappingData: storageMappingData
}