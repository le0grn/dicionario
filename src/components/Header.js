import { AppBar, Typography, makeStyles, Toolbar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}))

const Header = (props) => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h2" className={classes.title}>
                    {props.text}
                </Typography>
                <Typography variant="overline">
                    Feito com a Free Dictionary API
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;