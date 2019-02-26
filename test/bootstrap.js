const path = require("path");

require("ts-node").register({
    project: path.resolve("./tsconfig.json"),
    typeCheck: true,
    cache: false,
    files: true
});
