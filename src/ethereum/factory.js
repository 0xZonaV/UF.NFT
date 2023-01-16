import web3 from './web3';
import SaleFactory from './build/saleFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(SaleFactory.abi),
    '0x49aD606973E91a176106Bd6D4086C4868ab48724'
);

export default instance;
