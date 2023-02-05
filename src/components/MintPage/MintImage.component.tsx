import {SaleType} from "@/store/Sales/sales.types";
import {FC, useEffect, useState} from "react";
import {Grid} from "@mui/material";
import {getDataFromBaseURIUtils} from "@/utils/getDataFromBaseURI.utils";
import {Fetched} from "../../../@types";

type MintImageProps = {
    saleInfo: SaleType;
}

const MintImage: FC<MintImageProps> = ({saleInfo}) => {

    const [image, setImage] = useState('');

    useEffect(
        () => {
            const fetchImage = async () => {
                if (saleInfo.baseNFTUri.slice(0,4) === "ipfs") {
                    const fetchedImageUri = await getDataFromBaseURIUtils<Fetched>(saleInfo.baseNFTUri, 1);
                    setImage( "https://gateway.ipfs.io/ipfs/" + fetchedImageUri.image.slice(7));
                } else {
                    const fetchedImageUri = await getDataFromBaseURIUtils<Fetched>(saleInfo.baseNFTUri, 1);
                    // @ts-ignore
                    setImage(fetchedImageUri.image_url);
                }

            }
            fetchImage();
        },
        [])

    return(
        <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
                backgroundImage: `url(${image})`,
                backgroundRepeat: 'no-repeat',
                backgroundColor: (t) =>
                    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        />
    )
}

export default MintImage;