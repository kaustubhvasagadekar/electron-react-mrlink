import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '} By Kaustubh.S.V
      
     
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
     marginTop: theme.spacing(8),
    padding: theme.spacing(6, 71),
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const { description, } = props;

  return (
    <footer className={classes.footer} text="blue" >
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
        
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          {description}
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
