import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Grid,
}from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";
import { INTROS } from "../data/data";
import SectionTitle from './SectionTitle'
import ContentHeader from './ContentHeader'
const useStyles = makeStyles((theme) => ({
  introductionContainer: {
    textAlign: "center",
  },
  gridContainer: {
    
  },
  gridItem: {
    minHeight: "450px",
    marginBottom: theme.spacing(5),
  },
  cardRoot: {
    width: "100%",
    height: "100%",
    paddingTop: theme.spacing(4),
  },
  media: {
    height: 0,
    paddingTop: "30%", // 16:9
    backgroundSize: "contain",
    marginBottom:theme.spacing(2)
  }
  
}));

export default function Introduction() {
  const classes = useStyles();
  return (
    <div className={classes.introductionContainer}>
     <SectionTitle title="What I'll Bring To The Table"/>

      <Grid container spacing={5} className={classes.gridContainer}>
        {INTROS.map((data) => {
          return (
            <Grid
              className={classes.gridItem}
              key={data.title}
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
            >
              <Card className={classes.cardRoot} elevation={3}>
                <CardMedia
                  className={classes.media}
                  image={data.img}
                  title="Paella dish"
                />
                <CardContent>
                  <ContentHeader title={data.title} description={data.description}/>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
