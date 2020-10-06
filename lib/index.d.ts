import { Redis } from "ioredis";
export interface IRedConfig {
    [key: string]: string;
}
export declare class RedConfig {
    readonly client: Redis;
    readonly name: string;
    constructor(client: Redis, name: string);
    save(config: IRedConfig): Promise<IRedConfig>;
    load(): Promise<IRedConfig>;
}
