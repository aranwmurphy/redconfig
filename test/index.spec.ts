import Redis = require("ioredis");
import { expect } from "chai";
import { RedConfig } from "../src";

const KEY_NAME = "global::test::config";
const client = new Redis();

describe("RedConfig", () => {
    const rconfig = new RedConfig(client, KEY_NAME);
    describe("#save()", () => {
        it("should save the specified config", async () => {
            const config = await rconfig.save({ test: "save" });
            expect(config).to.deep.equal({ test: "save" });
        });

        it("should return the saved config", async () => {
            const config = await rconfig.save({ test: "save" });
            expect(config).to.deep.equal({ test: "save" });
        });
    });

    describe("#load()", () => {
        it("should return the saved config", async () => {
            await rconfig.save({ test: "load" });
            const config = await rconfig.load();
            expect(config).to.deep.equal({ test: "load" });
        });
    });
});