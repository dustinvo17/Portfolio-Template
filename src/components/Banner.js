import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import {
  Box,
  Button,
  Divider,
  Avatar,
  Card,
  CardActions,
  CardContent,
  Typography,
  Grid,

} from "@material-ui/core"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { LINKS } from "../data/data";

const useStyles = makeStyles((theme) => ({
  boxBanner: {
    [theme.breakpoints.between(0,900)]: {
      textAlign: "center",
      padding: "30px 5px",
    },
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    padding: theme.spacing(3),
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(5),
    minHeight:'300px',
  },
  large: {
    width: "240px",
    height: "240px",
  },
  cardIntroduction: {},
  textContent: {
    lineHeight: 2.5,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  divider: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  icon: {
    cursor: "pointer",
    fontSize: 45,
  },
  cardContent: {
    marginBottom: theme.spacing(3),
  },
  gridItemBreak: {
    
    [theme.breakpoints.between(0,900)]: {
      order: 1,
      marginTop: "20px",
    },
  },
  iconContainers: {
    [theme.breakpoints.between(0,900)]: {
      justifyContent: "center",
    },
  },
  buttonContainer: {
    [theme.breakpoints.between(0,900)]: {
      justifyContent: "center",
    }
    
  },
  avatarGrid :{
    display: "flex",
    justifyContent: "center",
    width:'100%',
    alignItems: "flex-start",
  }
}));

export default function Banner() {
  const [title, setTitle] = useState("");
  const [description, setDescripton] = useState("");
  const location = useLocation();
  useEffect(() => {
    const {pathname} = location
    if (pathname.includes("contact")) {
      setTitle("Contact Me");
      setDescripton("Wanna hire or collaborate with me? Let's talk!");
    }
    if (pathname.includes("projects")) {
      setTitle("Projects");
      setDescripton("What kind of cool stuffs have I built? Check out below!");
    } else {
    }
  }, [location]);
  const classes = useStyles();
  const theme = useTheme();
  const renderSubPage = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" color="primary">
          {title}
        </Typography>
        <Divider className={classes.divider} variant="middle" />
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </div>
    );
  };

  return (
    <Box boxShadow={4} color="text.primary"  className={classes.boxBanner}>
      {location.pathname.includes("contact") ||
      location.pathname.includes("projects") ? (
        renderSubPage()
      ) : (
        <React.Fragment>
          <Grid
        
            container
           
          >
            <Grid sm={12} md={8} lg={8} item className={classes.gridItemBreak}>
              <Card className={classes.cardIntroduction} elevation={0}>
                <CardContent className={classes.cardContent}>
                  <Typography variant="h5" color="primary">
                    Hello There! I'm
                    <b style={{ marginLeft: "10px" }}>Dat Vo</b>
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    color="textSecondary"
                    className={classes.textContent}
                  >
                    Result-driven Software Engineer with strong knowledge of
                    Computer Science, and 3 years of experience in Programming /
                    Full Stack Development. I strongly believe that utilizing
                    tech is the best way to deliver great social impact.
                  </Typography>
                  <div
                    className={classes.iconContainers}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <GitHubIcon
                      onClick={() => window.open(LINKS.GITHUB)}
                      style={{ marginRight: "30px" }}
                      className={classes.icon}
                    />
                    <LinkedInIcon
                      onClick={() => window.open(LINKS.LINKEDIN)}
                      className={classes.icon}
                    />
                  </div>
                </CardContent>
                <CardActions
                  className={classes.buttonContainer}
                  style={{ marginLeft: "8px" }}
                >
                  <Button
                    onClick={() => window.open(LINKS.RESUME)}
                    variant="contained"
                    color="primary"
                    size="medium"
                  >
                    Resume
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid 
              sm={12}
              md={4}
              lg={4}
              item
              className={classes.avatarGrid}

            >
              <Box boxShadow={12} clone>
                <Avatar
                  elevation={5}
                  alt="Dat Vo Tech Avatar"
                  src="/images/avatar.png"
                  className={classes.large}
                />
              </Box>
            </Grid>
          </Grid>
        </React.Fragment>
      )}
    </Box>
  );
}
