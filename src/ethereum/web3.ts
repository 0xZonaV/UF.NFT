import Web3 from "web3";
import {HttpProvider} from "web3-core";


let web3: any;

declare global {
    interface Window {
        ethereum?: any;
    }
}

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
    window.ethereum.request({ method: "eth_requestAccounts" });
    web3 = new Web3(window.ethereum);
} else {
    let provider: HttpProvider;
    if (process.env.REACT_APP_INFURA_API) {
        provider = new Web3.providers.HttpProvider(process.env.REACT_APP_INFURA_API)
    } else throw new Error("INFURA_API DO NOT EXISTS");
    web3 = new Web3(provider);
}

export default web3;
