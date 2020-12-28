export type LoginData = {
    username: string;
    password: string;
    url: string;
}

export type MappingData = {
    name: string;
    sProviderName: string;
    tProviderName: string;
}

export type ProviderData = {
    type: string;
    name: string;
    hostname: string;
    username: string;
    password: string;
    cert: string;
}

export type TestData = {
    loginData: LoginData;
    providerData: ProviderData;
    networkMappingData: MappingData;
    storageMappingData: MappingData;
}