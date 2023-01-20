// @ts-ignore
import web3 from './web3';
// @ts-ignore
import SaleFactory from './build/saleFactory.json';
import type {Contract} from "web3-eth-contract";
import type {AbiItem} from "web3-utils";

const instance: Contract = new web3.eth.Contract(
    SaleFactory.abi as AbiItem[],
    "0x6721b54Fb7AD19a2fcf307D731b9ba1F0c5Bf0Ee"
);

export default instance;
