import { Redis } from "ioredis";
export interface IRedConfig {
}
export interface IEnvRedConfig {
    [key: string]: string;
}
export declare class RedConfig<TConfig extends IRedConfig = IEnvRedConfig> {
    readonly client: Redis;
    readonly name: string;
    constructor(client: Redis, name: string);
    save(config: TConfig): Promise<TConfig>;
    load(): Promise<TConfig>;
}
