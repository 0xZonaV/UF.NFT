import web3 from "./web3";
import Collection from "./build/NFT.json";
import {Contract} from "web3-eth-contract";
import {AbiItem} from "web3-utils";

const collection = (address: string): Contract => {
    return new web3.eth.Contract(
        Collection.abi as AbiItem[],
        address
    );
};

export default collection;