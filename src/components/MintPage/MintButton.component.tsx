import {Button} from "@mui/material";
import {FC} from "react";

type MintButtonProps = {
    isSaleActive: boolean;
}

const MintButton: FC<MintButtonProps> = ({isSaleActive}) => {
    return(
        <Button
            variant="contained"
            type="submit"
            size="large"
            sx={{
                height: "100",
                width: "50%",
                marginLeft: "20px"
            }}
            disabled={!isSaleActive}
        >
            Mint
        </Button>
    )
}

export default MintButton;