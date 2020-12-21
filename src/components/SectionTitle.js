import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme) => ({
    title: {
        marginTop:theme.spacing(6),
        marginBottom:theme.spacing(5),
        textAlign:'center'
    }
}))
export default function SectionTitle({title}) {
    const classes = useStyles()
    return (
        <Typography className={classes.title} variant="h4" color="primary">
        {title}
      </Typography>
    )
}
