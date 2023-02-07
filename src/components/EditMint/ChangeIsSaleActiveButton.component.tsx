import {FC} from "react";
import {Button, Grid} from "@mui/material";
import collection from "@/ethereum/collection";
import web3 from "@/ethereum/web3";

type ChangeStateProps = {
    isSaleActive: boolean;
    saleAddress: string;
}
const ChangeIsSaleActiveButton: FC<ChangeStateProps> = ({isSaleActive, saleAddress}) => {

  const flipState = async () => {
      const userAccounts = await web3.eth.getAccounts();

      await collection(saleAddress).methods.flipSaleState().send({
          from: userAccounts[0],
      })
  }


  if (isSaleActive) {
      return(
        <Grid item xs={4}>
            <Button style={{ width: "100%", height: "100%" }} variant="contained" color="error" onClick={flipState}>End Mint</Button>
        </Grid>
      )
  } else {
      return (
          <Grid item xs={4}>
          <Button style={{ width: "100%", height: "100%" }} variant="contained" color="success" onClick={flipState}>Start Mint</Button>
          </Grid>
      )
  }
}

export default ChangeIsSaleActiveButton;