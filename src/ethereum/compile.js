const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");

const buildPath = path.resolve(__dirname, "build");
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, "contracts", "contract.sol");
const source = fs.readFileSync(campaignPath, 'utf-8');

const input = {
    language: 'Solidity',
    sources: {
        'contract.sol' : {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': [ '*' ]
            }
        }
    }
}

function findImports(relativePath) {
    const absolutePath = path.resolve(__dirname, 'contracts', relativePath);
    const source = fs.readFileSync(absolutePath, 'utf8');
    return { contents: source };
}

const output = JSON.parse(solc.compile(JSON.stringify(input), {import: findImports}));

fs.ensureDirSync(buildPath);

for (let contract in output.contracts['contract.sol']) {

    fs.outputJSONSync(
        path.resolve(buildPath, contract.replace(":", "") + ".json"),
        output.contracts['contract.sol'][contract]
    );
}

