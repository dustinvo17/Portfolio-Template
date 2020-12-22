import React from 'react'
import {Typography,Box} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({ 
    boxStyle :{
        borderTop:`1px solid ${theme.palette.divider}`,
        padding:'40px 0',
        marginTop:theme.spacing(5)
    }

}))

export default function Footer() {
    const classes = useStyles()
    return (
        <Box  className={classes.boxStyle} textAlign="center" >
                 <Typography variant="body2" color="textSecondary">
           &copy; 2020 Dat Vo
        </Typography>
        </Box>
   
    )
}
