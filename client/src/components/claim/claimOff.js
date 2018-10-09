 

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import moment from 'moment'
import Poll from '../poll/PollOff';
//import Im from '../../assets/img/faces'

import { gql, graphql } from 'react-apollo';
import ResponsiveDrawer from '../../containers/ResponsiveDrawer';
import Loading from '../loading'

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  
});


class ClaimOff extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false ,
      imageURL: '',
    };

  }



  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };





  
  render() {

    const { classes } = this.props;

    return (

      <div>
              {JSON.parse(localStorage.getItem("claim") || "[]").map(item => 

          (      <div key={item.id}>
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar aria-label="Recipe" className={classes.avatar}>
                  {item.postedBy!=null ? item.postedBy.firstName.slice(0,1).toUpperCase()   : undefined}            
                      </Avatar>
                }
                action={
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                }
                title={item.postedBy!=null ? item.postedBy.firstName+" " + item.postedBy.lastName : undefined }
                subheader={moment(item.date).format('MMMM Do , h:mm a')}
              />
              
              <CardContent>
                <Typography component="p">
                <h5><b> {item.object} </b> </h5>
                  {item.content}
           <img src={`http://localhost:5000/public/${item.img}`}  width="315" height="236"/>
                </Typography>
              </CardContent>
              <CardActions className={classes.actions} disableActionSpacing>
                <IconButton aria-label="Add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="Share">
                  <ShareIcon />
                </IconButton>
                <IconButton
                  className={classnames(classes.expand, {
                    [classes.expandOpen]: this.state.expanded,
                  })}
                  onClick={this.handleExpandClick}
                  aria-expanded={this.state.expanded}
                  aria-label="Show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph variant="body2">
                    Method:
                  </Typography>
                  <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                    minutes.
                  </Typography>
                  <Typography paragraph>
                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                    heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                    browned, 6 to 8 minutes.
                  </Typography>


                </CardContent>
              </Collapse>
            </Card>
          </div> )
          )}
          </div>
    );  
  }
}

ClaimOff.propTypes = {
  classes: PropTypes.object.isRequired,
};


 




export default (withStyles(styles)(ClaimOff));
