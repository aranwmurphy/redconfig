"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedConfig = void 0;
class RedConfig {
    constructor(client, name) {
        this.client = client;
        this.name = name;
    }
    async save(config) {
        await this.client.set(this.name, JSON.stringify(config));
        return this.load();
    }
    async load() {
        const json = await this.client.get(this.name);
        return JSON.parse(json || "{}");
    }
}
exports.RedConfig = RedConfig;
//# sourceMappingURL=index.js.map