import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

const subscribers = [
    {
        "name": "John",
        "age": 29,
        "description": "bla bla bla"
    },
    {
        "name": "Subscriber 2",
        "age": 20,
        "description": "bla bla bla 2"
    },
    {
        "name": "Subscriber 3",
        "age": 25,
        "description": "bla bla bla bla 3"
    },
    {
        "name": "Subscriber 4",
        "age": 34,
        "description": "tralala 4"
    },
]

const Subscribers = () => {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            {subscribers.map((row) => (
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary={row.name}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                >
                                    Age: {row.age}
                                </Typography>
                                Description: {row.description}
                            </React.Fragment>
                        }
                    />
                </ListItem>
            ))}
        </List>
    );
}

export default Subscribers