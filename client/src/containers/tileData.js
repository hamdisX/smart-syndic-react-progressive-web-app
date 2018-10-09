
// This file is shared across the demos.

import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import DraftsIcon from 'material-ui-icons/PersonPin';
import StarIcon from 'material-ui-icons/Cloud';
import SendIcon from 'material-ui-icons/PersonPin';
import MailIcon from 'material-ui-icons/PersonPin';
import DeleteIcon from 'material-ui-icons/Tab';
import ReportIcon from 'material-ui-icons/PersonPin';
import Archive from 'material-ui-icons/Archive';
import Tresorie from 'material-ui-icons/AccountBalance';
import Description  from 'material-ui-icons/Description';
import Person  from 'material-ui-icons/Person';
import Call from 'material-ui-icons/Phone'



import {  Link } from 'react-router-dom';

import ActionHome from 'material-ui-icons/Home';



export const mailFolderListItems = (
  <div>
      <Link to="/test1">   
    <ListItem button>
      <ListItemIcon>
        <ActionHome />
      </ListItemIcon>
      <ListItemText  primary="Home" /> 
    </ListItem>
    </Link>

    <Link to="/test2">   
    <ListItem button>
      <ListItemIcon>
        <Description />
      </ListItemIcon>
      <ListItemText primary="Reclamations" />
    </ListItem>
    </Link>

    <Link to="/test3">   
    <ListItem button>
      <ListItemIcon>
        <Tresorie />
      </ListItemIcon>
      <ListItemText primary="Tresorue" />
    </ListItem>
    </Link>

    <Link to="/profil">
    <ListItem button>
      <ListItemIcon>
        <Person />
      </ListItemIcon>
      <ListItemText primary="Profil" />
    </ListItem>
    </Link>
    

  </div>
);

export const otherMailFolderListItems = (
  <div>
    <Link to="/admin">
    <ListItem button>
      <ListItemIcon>
        <MailIcon />
      </ListItemIcon>
      <ListItemText primary="Admin Dashbord" />
    </ListItem>
    </Link>
    <Link to="/document">
    <ListItem button>
      <ListItemIcon>
        <Archive />
      </ListItemIcon>
      <ListItemText primary="Document " />
    </ListItem>
    </Link>



  </div>
);
