import {Card, CardActionArea, CardContent, Typography} from "@mui/material";
import {SaleType} from "@/pages";


const SaleCardComponent = ({Name, MaxSupply}: SaleType) => {
    return(
        <Card sx={{mt: 2}}>
            <CardActionArea>
                <CardContent>
                    <Typography variant='h5'>
                        {Name}
                    </Typography>
                    <Typography variant='body2'>
                        {MaxSupply}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default SaleCardComponent;