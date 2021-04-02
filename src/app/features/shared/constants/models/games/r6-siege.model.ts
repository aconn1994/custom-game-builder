
export interface R6SiegeMap {
    name: string;
    newcomer: boolean;
    casual: boolean;
    ranked: boolean;
    customOnly: boolean;
}

export interface R6SiegeFilter {
    map: Array<string>;
}

export interface R6SiegeInfo {
    title: string;
}