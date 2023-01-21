import { Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {useRouter} from "next/router";
import {FC, useEffect, useState} from "react";
import {getDataUtils} from "@/utils/getData.utils";
import {SaleType} from "@/store/Sales/sales.types";
import {Fetched} from "../../../@types";
import {red, teal} from "@mui/material/colors";



const SaleCardComponent:FC<SaleType> = ({
                                            Name,
                                            MaxSupply,
                                            cAddress,
                                            Price,
                                            totalSuply,
                                            isSaleActive,
                                            baseNFTUri
}) => {

    const router = useRouter();
    const onClickHandler = () => router.push(`/sale/${cAddress}`);

    const [imageUri, setImageUri] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const fetchedImageUri = await getDataUtils<Fetched>(baseNFTUri);
            setImageUri(fetchedImageUri.image);
        }
        fetchData();
    }, [baseNFTUri])

    const renderIsSaleStarted =isSaleActive ? (
                <Typography variant="body2" color={teal[500]}>Mint is LIVE!</Typography>
            ) : (
                <Typography variant="body2" color={red[500]}>Mint is not started</Typography>);


    return(
        <Card sx={{ maxWidth: 500, mt: 5 }}>
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
                        Minted: {totalSuply} / {MaxSupply}
                    </Typography>
                    {renderIsSaleStarted}
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default SaleCardComponent;