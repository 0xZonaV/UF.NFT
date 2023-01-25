// @ts-ignore
import web3 from './web3';
// @ts-ignore
import SaleFactory from './build/saleFactory.json';
import type {Contract} from "web3-eth-contract";
import type {AbiItem} from "web3-utils";

const instance: Contract = new web3.eth.Contract(
    SaleFactory.abi as AbiItem[],
    "0x264dE5181823706906Df97cAde88332174aa48B1"
);

export default instance;
