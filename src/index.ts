import { Redis } from "ioredis";

// tslint:disable-next-line: no-empty-interface
export interface IRedConfig {}

export interface IEnvRedConfig {
    [key: string]: string;
}

export class RedConfig<TConfig extends IRedConfig = IEnvRedConfig> {
    constructor(
        public readonly client: Redis,
        public readonly name: string,
    ) {}

    public async save(config: TConfig): Promise<TConfig> {
        await this.client.set(this.name, JSON.stringify(config));
        return this.load();
    }

    public async load(): Promise<TConfig> {
        return JSON.parse((await this.client.get(this.name)) || "{}");
    }
}