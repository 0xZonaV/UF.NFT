import web3 from "@/ethereum/web3";
import factory from "@/ethereum/factory";
// @ts-ignore
import {configureStore, store, wrapper} from "@/store/store";

export const createNewCollectionUtils = async () => {
    const inputFields = store.getState().newCollection.formInputs;
    const {Name, MaxPerWallet, MaxPerTx, MaxSupply, TokensReserved, Symbol, Price, baseNFTUri} = inputFields;

    const accounts = await web3.eth.getAccounts();
    await factory.methods
        .createNFTsale( Name, Symbol, web3.utils.toWei(Price), MaxSupply, TokensReserved, baseNFTUri, MaxPerWallet, MaxPerTx)
        .send({
            from: accounts[0],
        });
}