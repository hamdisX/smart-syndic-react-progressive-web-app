
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';
import MenuIcon from 'material-ui-icons/Menu';
import Login from '../components/auth/Login';
import Conat from '../components/contact Syndic/contact'
import Admin from '../components/admin/adminRoute'
import Doc from '../components/tresorie/Doc'

//import { Link, Route } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
  } from 'react-router-dom';

import { mailFolderListItems, otherMailFolderListItems } from './tileData2';

import Test1 from "../components/home";
import SimpleMediaCard from "../components/claim/claim"

import Test2 from "../components/test2";
import Test3 from "../components/test3";
import profil from "../components/profil"
//import Footer from "./BottomNavigation"
import Logout from "../components/auth/logout"
import Claim from "../components/reclamation"
import AddClaim from "../components/claim/addClaim"

import AccountCircle from 'material-ui-icons/AccountCircle';
//import { FormControlLabel, FormGroup } from 'material-ui/Form';
import Menu, { MenuItem } from 'material-ui/Menu';
import '../index.css'
import { browserHistory } from 'react-router'; 

const drawerWidth = 240;

const styles = theme => ({
  
  root: {
  
    flexGrow: 1,
    height: "100%",
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),

  },
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  flex: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 1,
  },
  claim: {
    position: "fixed",
    right: 0,
    bottom: 0,


  }
});

class ResponsiveDrawer extends React.Component {


  state = {
    mobileOpen: false,

    //profil
    auth: true,
    anchorEl: null

  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };



  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };


 
  render() {


    
    const { classes, theme } = this.props;


    //profil
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    const drawer = (
      <div>
        <div className={classes.toolbar}  />
        <Divider />
        <List>{mailFolderListItems}</List>
        <Divider />
        <List>{otherMailFolderListItems}</List>
      </div>
    );

    const isLogin =  localStorage.log
    if(isLogin != "true")
    {
    return <Redirect to="/login"  /> ;}
    else{

    return (
      <div className= "root"   >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap className={classes.flex}>
              Smart Syndic
            </Typography>



            <div>
              <IconButton
                aria-owns={open ? 'menu-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={this.handleClose}
              >
                <Link to="/profil">
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                </Link>
                <Link to="/logout">
                <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                </Link>
              </Menu>
            </div>



          </Toolbar>
        </AppBar>
        
        <Hidden mdUp>
        
          <Drawer
            variant="temporary"
            transitionDuration={0}
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
             open
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <main className={classes.content}>



          <br></br><br></br>
          <Route path="/" exact component={Test1} />
          <Route path="/test1" exact component={Test1} />
          <Route path="/test2" exact component={Test2} />
          <Route path="/test3" exact component={Test3} />
          <Route path="/profil" exact component={profil} />
          <Route path="/login" exact component={Login} />
          <Route path="/contact" exact component={Conat} />
          <Route path="/logout" exact component={Logout} />
          <Route path="/document" exact component={Doc} />






     


          <div className={classes.toolbar} />
         
           <div className={classes.claim}>
            <AddClaim />
          </div>

        </main>
       

      </div>
    );
  }
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
