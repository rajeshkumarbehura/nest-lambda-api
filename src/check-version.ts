const VERSION = 'v21';

if (process.version.indexOf(VERSION) != 0) {
    console.error(`Required node version ${VERSION} is not satisfied with current version ${process.version}.`);
    process.exit(1);
} else {
    console.log(`Required node version ${VERSION} matched with current version ${process.version}.`);
}