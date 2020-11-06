import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import DashboardIcon from '@material-ui/icons/Dashboard'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import PeopleIcon from '@material-ui/icons/People'
import BarChartIcon from '@material-ui/icons/BarChart'
import LayersIcon from '@material-ui/icons/Layers'

const UseStyles = makeStyles({
    link: {
        textDecoration: 'none',
        color: "#FFFFFF"
    },
    menuItems: {
        backgroundColor: "#09a9de"
    },
    icons: {
        color: "#FFFFFF"
    }
})

const MenuItems = () => {
    const classes = UseStyles()

    return (
        <div className={classes.menuItems}>
            <Link to="/" className={classes.link}>
                <ListItem button>
                    <ListItemIcon>
                        <DashboardIcon className={classes.icons} />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>
            </Link>
            <Link to="add-campaign" className={classes.link}>
                <ListItem button>
                    <ListItemIcon>
                        <ShoppingCartIcon className={classes.icons} />
                    </ListItemIcon>
                    <ListItemText primary="New Campaign" />
                </ListItem>
            </Link>
            <Link to="integration" className={classes.link}>
                <ListItem button>
                    <ListItemIcon>
                        <PeopleIcon className={classes.icons} />
                    </ListItemIcon>
                    <ListItemText primary="Integration" />
                </ListItem>
            </Link>
            <Link to="subscribers" className={classes.link}>
                <ListItem button>
                    <ListItemIcon>
                        <BarChartIcon className={classes.icons} />
                    </ListItemIcon>
                    <ListItemText primary="Subscribers" />
                </ListItem>
            </Link>
            <Link to="settings" className={classes.link}>
                <ListItem button>
                    <ListItemIcon>
                        <LayersIcon className={classes.icons} />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                </ListItem>
            </Link>
        </div>                    
    )
}

export default MenuItems