import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme) => ({
    cardTitle: {
      
    },
    cardBody: {
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(2),
      lineHeight: 2,
    },
  }));
export default function ContentHeader({title,description}) {
    const classes = useStyles()
    return (
        <React.Fragment>
               <Typography
                    className={classes.cardTitle}
                    variant="h5"
                    color="primary"
                  >
                    {title}
                  </Typography>

                  <Typography
                    className={classes.cardBody}
                    variant="body2"
                    color="textSecondary"
                  >
                    {description}
                  </Typography>
        </React.Fragment>
         
        
    )
}
