import web3 from "./web3";
import Collection from "./build/NFT.json";

const campaign = (address) => {
    return new web3.eth.Contract(
        JSON.parse(Collection.interface),
        address
    );
};

export default campaign;