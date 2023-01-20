import { Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {useRouter} from "next/router";
import {FC, useEffect, useState} from "react";
import {getDataUtils} from "@/utils/getData.utils";
import {SaleType} from "@/store/Sales/sales.types";
import {Fetched} from "@/ts.types/types";



const SaleCardComponent:FC<SaleType> = ({Name, MaxSupply, cAddress, Price, baseNFTUri}) => {

    const router = useRouter();
    const onClickHandler = () => router.push(`/${cAddress}`);

    const [imageUri, setImageUri] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const fetchedImageUri = await getDataUtils<Fetched>(baseNFTUri);
            setImageUri(fetchedImageUri.image);
        }
        fetchData();
    }, [])

    return(
        <Card sx={{ maxWidth: 345, mt: 5 }}>
            <CardActionArea onClick={onClickHandler}>
                <CardMedia
                    sx={{ height: 140 }}
                    component='img'
                    image={imageUri}
                >
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {Name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {MaxSupply}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default SaleCardComponent;