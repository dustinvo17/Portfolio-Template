import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  toolbarSecondary: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    justifyContent: "center",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(2),
    flexShrink: 0,
  },
}));

export default function Header(props) {
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
          <Link
            color="textSecondary"
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
  title: PropTypes.string,
};
