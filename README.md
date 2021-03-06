# RedConfig
Implementation of a distributed configuration using Redis, as described [here](https://redislabs.com/ebook/part-2-core-concepts/chapter-5-using-redis-for-application-support/5-4-service-discovery-and-configuration/5-4-1-using-redis-to-store-configuration-information/).

## Available Scripts

In the project directory, you can run:

### `npm test`

Runs the library test suite, and reports the results of each test.

### `npm build`

Builds the library for production to the `lib` folder.<br />
It correctly bundles the library in production mode and optimizes the build for the best performance.

### `npm lint`

Lints the project files.

## Usage

### JavaScript

```javascript
const Redis = require('ioredis');
const { RedConfig } = require('redconfig');

const client = new Redis();
const rconf = new RedConfig(client, 'config::global');

async function main() {
    let config = await rconf.load();
    // { ... }
    config.level = 'info';
    config = await rconf.save(config);
    console.log(config);
    // { level: 'info', ... }
}
```

### TypeScript

```typescript
import Redis = require("redis");
import { RedConfig, IRedConfig } from "redconfig";

const client = new Redis();
const rconf = new RedConfig(client, "config::global");

async function main() {
    let config = await rconf.load();
    // { ... }
    config.level = "info";
    config = await rconf.save(config);
    console.log(config);
    // { level: 'info', ... }
}
```

## License
MIT