export interface CsgoMap {
    name: string;
    activeDuty: boolean;
    reserve: boolean;
    hostage: boolean
}

export interface CsgoFilter {
    map: Array<string>;
}

export interface CsgoInfo {
    title: string;
}