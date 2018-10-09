import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import CloseIcon from 'material-ui-icons/Close';
import Slide from 'material-ui/transitions/Slide';
import TextField from 'material-ui/TextField';
import { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Input from 'material-ui/Input';



import Paper from 'material-ui/Paper';
//import './feed.css'
import './feed';
import ReactDOM from 'react-dom';



import ActionButton from '../FloatingActionButton'

import { gql, graphql, compose } from 'react-apollo';




const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
  buttons: {
    bottom: 0,
    position: 'fixed',
    padding: 0,
    left: 0,
    color: "red",
  }
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}





class FullScreenDialog extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      imageURL: '',
      object: '',
      content: '',
      img: '',
      open: false,
      selectedFile: null,
      postedBy: localStorage.id

    };
    this.handleUploadImage = this.handleUploadImage.bind(this);

  }

  handleSave = ({ mutate }) => {
    const { object, content, img, postedBy } = this.state;
    this.props.mutate({
      variables: { object, content, img, postedBy }
    })
      .then(res => {
        this.setState({
          object: '',
          content: '',
          img: ''
        });
      });
    this.handleUploadImage();
  }


  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };


  handleUploadImage() {

    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    data.append('filename', this.fileName.value);
    fetch('http://localhost:5000/upload', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        this.setState({ imageURL: `http://localhost:5000/${body.file}` });
        consome.log(this.fileName.value)
      });
    });

  }


  render() {
   
    if (this.props.data.loading) {
      return ("..Loading")
    }
    if (window.navigator.onLine == true){
      localStorage.setItem('id', this.props.data.SingleUser._id)
      localStorage.setItem('firstName', this.props.data.SingleUser.firstName)
      localStorage.setItem('lastName', this.props.data.SingleUser.lastName)
      localStorage.setItem('mail', this.props.data.SingleUser.email)
      localStorage.setItem('ps', this.props.data.SingleUser.password)
    }
 



    const { classes } = this.props;
    return (
      <div>
        <ActionButton greet={this.handleClickOpen} className={classes.buttons} />


        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          transition={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.flex}>
                Close
              </Typography>
              <Button color="inherit" onClick={this.handleSave}>
                save
              </Button>
            </Toolbar>
          </AppBar>
          <br />
          <br />




          <div>
            <input ref={(ref) => { this.uploadInput = ref; }} type="file" />
          </div>
          <br />


          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="name-simple">Object</InputLabel>
            <Input
              label="Object"
              value={this.state.object}
              placeholder='Object'
              inputRef={(ref) => { this.fileName = ref; }}
              onChange={(e) => this.setState({ object: e.target.value, img: e.target.value + '.jpg' })}
              className={classes.input}
              inputProps={{
                'aria-label': 'Description',
              }}
            />
          </FormControl>



          <TextField
            id="textarea"
            label="content"
            value={this.state.content}
            placeholder='content'
            onChange={(e) => this.setState({ content: e.target.value })}
            multiline
            className={classes.textField}
            margin="normal"
          />


        </Dialog>


              {console.clear()}



      </div>
    ); 
  }
}

FullScreenDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};


export const Claimutation = gql`
mutation Claimutation ($object: String!, $content: String!,$img:String,$postedBy:ObjectId!){
          claimadd(object: $object,content: $content,img:$img,postedBy:$postedBy) {
          _id
       object
        content
        img
        postedBy{
          telephone
        }
        
       
     }
   }
   `;


export const CurentUserQuery = gql`
query CurentUserQuery($telephone: Int!) {
  SingleUser(telephone:$telephone) {
      _id
      telephone
      firstName
      lastName
      email
      password
      
      
    }
  }
`;



export default compose(
  graphql(CurentUserQuery, {
    options: { variables: { telephone: localStorage.telephone } },
  }),
  graphql(Claimutation),
)(withStyles(styles)(FullScreenDialog));

