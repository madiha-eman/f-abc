import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Icon } from 'react-icons-kit'
import {ic_arrow_forward} from 'react-icons-kit/md/ic_arrow_forward'
import {ic_arrow_back} from 'react-icons-kit/md/ic_arrow_back'
import './headerstyle.css'



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign:'center',
  },
}));

export default function ButtonAppBar({handleNext , handleBack}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className='appbar'>
        <Toolbar>
        <Button edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <Icon icon={ic_arrow_back} className='icon-back' onClick={handleBack}/>
          </Button>
          <Typography  variant="h4" className={classes.title}>
              
          </Typography>
        <Button color="inherit">
                   <Icon icon={ic_arrow_forward} className='icon-far'  onClick={handleNext} />
              </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
