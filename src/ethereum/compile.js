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

const output = JSON.parse(solc.compile(JSON.stringify(input)));

fs.ensureDirSync(buildPath);

for (let contract in output.contracts['contract.sol']) {

    fs.outputJSONSync(
        path.resolve(buildPath, contract.replace(":", "") + ".json"),
        output.contracts['contract.sol'][contract]
    );
}

