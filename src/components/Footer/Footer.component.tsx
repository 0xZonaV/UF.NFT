import {Container, Grid, Link, Typography} from "@mui/material";

const FooterComponent = () => {
    const Copyright = (props: any) => {
        return (
            <Typography variant="body2" color="text.secondary" align="center" {...props}>
                {'Copyright © '}
                <Link color="inherit" href="https://mui.com/">
                    Your Website
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }

    const footers = [
        {
            title: 'UrFirst.NFT',
            description: ['Developer', 'GitHub Source', 'Contact me'],
        },
        {
            title: 'Features',
            description: [
                'Create NFT Collection',
                'Random Mint Site',
                'Another Feature',
            ],
        },
        {
            title: 'Legal',
            description: ['Privacy policy', 'Terms of use'],
        },
    ];

    return(
        <div>
            <Container
                maxWidth="md"
                component="footer"
                sx={{
                    borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                    mt: 8,
                    py: [3, 6],
                }}
            >
                <Grid container spacing={4} justifyContent="space-evenly">
                    {footers.map((footer) => (
                        <Grid item xs={6} sm={3} key={footer.title}>
                            <Typography variant="h6" color="text.primary" gutterBottom>
                                {footer.title}
                            </Typography>
                            <ul>
                                {footer.description.map((item) => (
                                    <li key={item}>
                                        <Link href="#" variant="subtitle1" color="text.secondary">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Grid>
                    ))}
                </Grid>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </div>
    )
}

export default FooterComponent;