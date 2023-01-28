import {Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {useRouter} from "next/router";
import {FC, useEffect, useState} from "react";
import {getDataFromBaseURIUtils} from "@/utils/getDataFromBaseURI.utils";
import {SaleType} from "@/store/Sales/sales.types";
import {Fetched} from "../../../@types";
import {red, teal} from "@mui/material/colors";



const SaleCardComponent:FC<SaleType> = ({
                                            Name,
                                            MaxSupply,
                                            cAddress,
                                            Price,
                                            totalSupply,
                                            isSaleActive,
                                            baseNFTUri
}) => {

    const router = useRouter();
    const onClickHandler = () => router.push(`/sale/${cAddress}`);

    const [imageUri, setImageUri] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const fetchedImageUri = await getDataFromBaseURIUtils<Fetched>(baseNFTUri, 1);
            setImageUri("https://gateway.ipfs.io/ipfs/" + fetchedImageUri.image.slice(7));
        }
        fetchData();
    }, [baseNFTUri])

    const renderIsSaleStarted =isSaleActive ? (
                <Typography variant="body2" color={teal[500]}>Mint is LIVE!</Typography>
            ) : (
                <Typography variant="body2" color={red[500]}>Mint is not started</Typography>);


    return(
        <Grid item xs={12}>
        <Card sx={{ maxWidth: 500, mt: 5}}>
            <CardActionArea onClick={onClickHandler}>
                <CardMedia
                    sx={{ height: 200 }}
                    component='img'
                    image={imageUri}
                >
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {Name}
                    </Typography>
                    <Typography>
                        Price: {Price} ETH
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Minted: {totalSupply} / {MaxSupply}
                    </Typography>
                    {renderIsSaleStarted}
                </CardContent>
            </CardActionArea>
        </Card>
        </Grid>
    )
}

export default SaleCardComponent;