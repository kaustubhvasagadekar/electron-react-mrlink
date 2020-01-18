import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link,  } from "react-router-dom";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";



const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    color: "blue"
  },
  toolbarTitle: {
    flex: 1,
    color: "blue"
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
    color: "blue"
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    color: "blue"
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar
        className={classes.toolbar}
        style={{
          color: "blue"
        }}
      >
        <Button
          size="small"
          style={{
            color: "blue"
          }}
        >
          Subscribe
        </Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        <IconButton>
          <SearchIcon
            style={{
              color: "blue"
            }}
          />
        </IconButton>
        
        <Button 
        
          variant="outlined"
          size="small"
         
          style={{
            color: "blue"
          }}
        >
          Sign up
        </Button>
      
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {sections.map(section => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string
};
