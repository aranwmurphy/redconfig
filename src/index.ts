import { Redis } from "ioredis";

export interface IRedConfig {
    [key: string]: string;
}

export class RedConfig {
    constructor(
        public readonly client: Redis,
        public readonly name: string,
    ) {}

    async save(config: IRedConfig): Promise<IRedConfig> {
        await this.client.set(this.name, JSON.stringify(config));
        return this.load();
    }

    async load(): Promise<IRedConfig> {
        const json = await this.client.get(this.name);
        return JSON.parse(json || "{}");
    }
}