import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
import { Toolbar, Typography } from "@material-ui/core";
import {useLocation} from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
  toolbarSecondary: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    justifyContent: "center",
    overflowX: "auto",
    textDecoration: "none",
  },
  toolbarLink: {
    padding: theme.spacing(2),
    flexShrink: 0,
  },
}));

export default function Header(props) {
  const location = useLocation()
  const sections = [
    { title: "HOME", url: "/" },
    { title: "PROJECTS", url: "/projects" },
    { title: "CONTACT", url: "/contact" },
  ];
  const classes = useStyles();
  return (
    <React.Fragment>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {sections.map((section) => (
          <Typography
            color={`${location.pathname === section.url ? 'primary' :'textSecondary'}`}
            key={section.title}
            className={classes.toolbarLink}
            variant="body2"
          >
            <RouterLink
              style={{ textDecoration: "none", color: "inherit" }}
              to={section.url}
            >
              {section.title}
            </RouterLink>
          </Typography>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
