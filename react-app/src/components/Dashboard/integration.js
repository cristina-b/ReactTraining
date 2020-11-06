import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },

}));

const Integration = () => {
    const classes = useStyles();
    return (
        <CardMedia
            className={classes.media}
            image="https://www.intrasoft-intl.com/sites/default/files/styles/large/public/inline-images/applicationandsystem_all.png?itok=uSgDP7xu"
            title="Settings"
        />
    )
}

export default Integration