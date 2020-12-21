import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { PROJECT_TYPE } from "../data/data";
import SectionTitle from "./SectionTitle";
import { PROJECTS_DATA } from "../data/data";
import ContentHeader from "./ContentHeader"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Papper from "@material-ui/core/Paper"
import Button from "@material-ui/core/Button"
import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
    
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
    projectBox: {
        paddingTop:theme.spacing(5),
        paddingBottom:theme.spacing(5),
        [theme.breakpoints.between(0,900)]: {
            textAlign: "center",
          
        },
    },
    projectGridContainer :{
       justifyContent:'center'
    },
    paperGridItem: {
        padding:'20px  15px 20px 15px',
        
    },
    projectButton: {
        margin:'10px',
        display:'flex',
        alignItems:'center',
      
    },
    buttonsContainer: {
       
        display:'flex',
        marginTop:'20px',
        flexWrap:'wrap',
        [theme.breakpoints.between(0,900)]: {
            justifyContent:'center'
        }
    },
    icon: {
        marginLeft:'5px'
    },
    gridOrder: {
        [theme.breakpoints.between(0,900)]: {
            order:'0!important'
          },
    },
    textListAlign:{
        [theme.breakpoints.between(0,900)]: {
            textAlign:'center!important'
          },
    }
  }));
  
function TabPanel(props) {
  const { value } = props;
  const classes = useStyles()

  const matches = useMediaQuery('(max-width:900px)');
  console.log(matches)
  let projects;
  switch (value) {
    case 1:
      projects = PROJECTS_DATA.filter(
        (project) => project.type === PROJECT_TYPE.FRONT_END
      );
      break;
    case 2:
      projects = PROJECTS_DATA.filter(
        (project) => project.type === PROJECT_TYPE.FULL_STACK
      );
      break;
    case 3:
      projects = PROJECTS_DATA.filter(
        (project) => project.type === PROJECT_TYPE.DESKTOP
      );
      break;
    default:
      projects = [...PROJECTS_DATA];
  }

  return (
    <div
      role="tabpanel"
      id={`full-width-tabpanel-${value}`}
      aria-labelledby={`full-width-tab-${value}`}
    >
       
        {projects.map((p,index) => {
           return  <Box   key={index} className={classes.projectBox}>
         <Grid container alignItems="center"  spacing={3} className={classes.projectGridContainer} >
         <Grid  item sm={12} md={7} lg={7} style={{order: index % 2 === 0 ? 0 : 2 }}  className={classes.gridOrder}>
              <img alt={p.image} src={p.image} style={{width:'100%'}}/>
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5} style={{order:1}} className={classes.gridOrder}>
            <Box className={classes.paperGridItem} boxShadow={3}>
            <ContentHeader title={p.name}  description={p.description} />
          
          <Typography variant="body2"
                    color="textSecondary"  >Key Features: </Typography>
          <List dense={false} >     
               {p.tech.map(point => {
                   return <ListItem key={point} alignItems="center" className={classes.textListAlign}   >
                       <Typography variant="body2"
                    color="textSecondary" style={{display:"block",lineHeight:2,wordWrap:'break-word',width:'100%'}}>
                        {matches ? '' :'-'} {point}
                       </Typography>
                 </ListItem>
                }
               )  } 
            </List>
            <div className={classes.buttonsContainer} >
                {p.site ?   <Button size="small" className={classes.projectButton} variant="contained" color="primary" onClick={() =>window.open(p.site)}>
                Visit Site </Button> : ''}
                {p.video ?   <Button size="small" className={classes.projectButton} variant="contained" color="secondary"  onClick={() =>window.open(p.video)} >
                 Demo <YouTubeIcon className={classes.icon} />
            </Button> :'' }
         
            <Button size="small" className={classes.projectButton} variant="contained"  onClick={() =>window.open(p.source)}> 
                Code <GitHubIcon className={classes.icon}/>
            </Button>
            </div>
         
            </Box>
        
          </Grid>
         
        </Grid>;
        </Box>
      })}
     
    
    </div>
  );
}


export default function ProjectList() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  return (
    <div>
      <SectionTitle title="My Latest Work" />
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          orientation={matches ? "vertical" : "horizontal"}
          variant="fullWidth"
          centered
        >
          <Tab label="All" />
          <Tab label={PROJECT_TYPE.FRONT_END} />
          <Tab label={PROJECT_TYPE.FULL_STACK} />
          <Tab label={PROJECT_TYPE.DESKTOP} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} />
    </div>
  );
}
