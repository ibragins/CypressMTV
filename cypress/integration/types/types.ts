export type LoginData = {
    username: string;
    password: string;
    url: string;
}

export type MappingData = {
    name: string;
    sProviderName: string;
    tProviderName: string;
    sProvider: string;
    dProvider: string;
}

export type ProviderData = {
    type: string;
    name: string;
    hostname: string;
    username: string;
    password: string;
    cert: string;
}

export type PlanData = {
    providerData: ProviderData;
    networkMappingData: MappingData[];
    storageMappingData: MappingData[];
}
export type TestData = {
    loginData: LoginData;
    planData: PlanData;
}