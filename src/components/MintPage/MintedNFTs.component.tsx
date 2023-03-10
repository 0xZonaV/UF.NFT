import {Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {FC, useEffect, useState} from "react";
import {getDataFromBaseURIUtils} from "@/utils/getDataFromBaseURI.utils";

type NFTInfoType = {
    name: string;
    image: string;
}

type MintedNFTsType = {
    num: number;
    baseUri: string;
}
const MintedNFTs: FC<MintedNFTsType> = ({num, baseUri}) => {

    const InitialState: NFTInfoType = {
        name: '',
        image: ''
    };

    const [nftInfo, setNFTInfo] = useState(InitialState);

    useEffect(
        () => {
            const fetchInfo = async () => {
                const fetchedInfo: NFTInfoType = await getDataFromBaseURIUtils(baseUri, num);
                setNFTInfo({
                    name: fetchedInfo.name,
                    image: "https://gateway.ipfs.io/ipfs/" + fetchedInfo.image.slice(7)
                })
            }
            fetchInfo()
        },
        []
    );

    return(
        <Grid item xs={4} style={{marginTop: "20px"}}>
            <Card sx={{maxWidth: "150px"}}>
                <CardMedia
                    component="img"
                    alt={nftInfo.name}
                    src={nftInfo.image}
                    title={nftInfo.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="body2" component="div">
                        {nftInfo.name}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default MintedNFTs;