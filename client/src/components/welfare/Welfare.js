import React, {useState} from 'react'
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers'
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ButtonAppBar from '../RegisHeader/Header'
import WelTable from './WelTable';

function StyledCheckbox(props) {
    const classes = useStyles();
    const form = 'Welfare'

  
    return (
      <Checkbox
        className={classes.root}
        disableRipple
        color="default"
        checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
        icon={<span className={classes.icon} />}
        inputProps={{ 'aria-label': 'decorative checkbox' }}
        {...props}
      />
    );
  }


const currencies = [
    {
      value: 'vlue1',
      label: 'islam',
    },
    {
      value: 'vlue2',
      label: 'hindu',
    },
    {
      value: 'vlue3',
      label: 'Christian',
    },
    {
      value: 'vlue4',
      label: 'budhist',
    },
  ];


const GreenCheckbox = withStyles({
 
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        marginLeft:40,
        width: 280,
      },
    },
 
  }));

const Welfare = ({handleNext, handleBack}) => {

    const classes = useStyles();
    const form = 'Welfare';
    const [currency, setCurrency] = React.useState('vlue1');

    const handleChange = (event) => {
      setCurrency(event.target.value);
    };
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
        checkedG: true,
      });
    
      const handleChangecheck = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      }
  
        // The first commit of Material-UI
        const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
      
        const handleDateChange = (date) => {
          setSelectedDate(date);
        };
        const [Header, setHeader] = useState({
          
          MRNo:"MR-0000000014",
          TokenNo:"14",
          WelfareDate:"2021-02-28T13:32:08.986Z",
          Profession:"leader",
          Fiqa:"sunni",
          Education:"bachelors",
          Cast:"sidd",
          MonthlyIncome:122222,
          Guardian:"guradia",
          OtherInfo:"other",
          MaleKids:0,
          FemaleKids:1,
          OtherKids:0,
          Brothers:0,
          Sisters:0,
          NoOFFamilyMembers:2,
          IsMarried:true,
          IsAbleToPay:false,
          IsEarning:false,
          HaveGold:false,
          ReqName:"req",
          ReqPhone:"1213 1231231",
          ReqRelationWithPatient:"self",
          CreateUser:"Admin",
          ModifyUser:"Admin",
        
          FormName:"Welfare",
          Detail:[{"MRNo":"MR-0000000014",
          MemberName:"noshan",
          RelationWithPatient:"self",
          MonthlyIncome:12222,
          tableData:{"id":0}},
          {
          MRNo:"MR-0000000014",
          MemberName:"wi",
          RelationWithPatient:"wife",
          MonthlyIncome:122,
          tableData:{"id":1}}]
          
        });
    return (
        <div>
            <ButtonAppBar handleNext={handleNext} handleBack={handleBack}
           form={form}                        
           />
            
            <Grid container>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    {/* <ButtonAppBar handleNext={handleNext} handleBack={handleBack}/> */}
           

                </Grid>
                <form className={classes.root} noValidate autoComplete="on">
                <Grid container direction='row'>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                    <TextField
                      //   label="Size"
                      value={Header.MRNo}
                      id="outlined-basic"
                      label="M.R.#" 
                        variant="outlined"
                        size="small"
                      />
                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div> 
                    <TextField
                      //   label="Size"
                      value={Header.Token}
                      id="outlined-basic"
                      label="Token #" 
                        variant="outlined"
                        size="small"
                      />
                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                   
                         <KeyboardDatePicker
                           value={Header.WelfareDate}
                            margin="normal"
                            id="date-picker-dialog"
                            label="WelfareDate"
                            format="MM/dd/yyyy"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                              'aria-label': 'change date',
                            }}
                          />
                          </MuiPickersUtilsProvider>
                      </div>
                    </Grid>
                    
                    <Grid item lg={1} md={4} sm={12} xs={12}>
                    <input type='checkbox' id='checkbox' value='Married'/>
                    <lable>Zakat</lable>
                       
                    </Grid>
                    <Grid item lg={1} md={4} sm={12} xs={12}>
                    <input type='checkbox' id='checkbox' value='Married'/>
                    <lable>Donation</lable>
                    </Grid>
                    </Grid>
                    <fieldset>
                   <legend>Contact</legend>
                   <Grid container direction='row'>
                         
                     <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                    <TextField
                      //   label="Size"
                      value={Header.Profession}
                        id="outlined-basic"
                        label="Fiqa" 
                        variant="outlined"
                        size="small"
                      />
                    
                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                    <TextField
                      //   label="Size"
                      value={Header.Education}
                        id="outlined-basic"
                        label="Fiqa" 
                        variant="outlined"
                        size="small"
                      />
                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                      <TextField
                      //   label="Size"
                        value={Header.Fiqa}
                        id="outlined-basic"
                        label="Fiqa" 
                        variant="outlined"
                        size="small"
                      />
                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                      <TextField
                      //   label="Size"
                      value={Header.Cast}
                      id="outlined-basic"
                      label="Cast" 
                      variant="outlined"
                      size="small"
                      />
                      </div>
                    </Grid>
                   </Grid>
                   </fieldset>

                   <fieldset>
                   <legend>Request Info</legend>
                   <Grid container direction='row'>
                       
                           
                           <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                    <TextField
                      //   label="Size"
                      value={Header.ReqName}
                      id="outlined-basic"
                      label="Requestor Name" 
                      variant="outlined"
                      size="small"
                      />
                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                    <TextField
                      //   label="Size"
                      value={Header.ReqRelationWithPatient}
                      id="outlined-basic"
                      label="Relation With Patient" 
                      variant="outlined"
                      size="small"
                      />
                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                    <TextField
                      //   label="Size"
                      value={Header.MaleKids}
                      id="outlined-basic"
                      label="No. of Kids(Male)" 
                      variant="outlined"
                      size="small"
                      />
                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                    <TextField
                      //   label="Size"
                      value={Header.FemaleKids}
                      id="outlined-basic"
                      label="No. of Kids(Female)" 
                      variant="outlined"
                      size="small"
                      />
                      </div>
                    </Grid>
                   </Grid>

                   {/* 5th grid */}

                   <Grid container direction='row'>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                    <TextField
                      //   label="Size"
                      value={Header.ReqPhone}
                      id="outlined-basic"
                      label="Request Ph #" 
                      variant="outlined"
                      size="small"
                      />
                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                    <TextField
                      //   label="Size"
                      value={Header.Guardian}
                      id="outlined-basic"
                      label="Guardian" 
                      variant="outlined"
                      size="small"
                      />
                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                    <TextField
                      //   label="Size"
                      value={Header.OtherKids}
                      id="outlined-basic"
                      label="Other Kids" 
                      variant="outlined"
                      size="small"
                      />
                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                    <TextField
                      //   label="Size"
                      value={Header.Brothers}
                      id="outlined-basic"
                      label="No. of Brothers" 
                      variant="outlined"
                      size="small"
                      />
                      </div>
                    </Grid>
                   </Grid>
                   <Grid container direction='row'>
                   <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                    <TextField
                      //   label="Size"
                      value={Header.MonthlyIncome}
                      id="outlined-basic"
                      label="Monthly Income" 
                      variant="outlined"
                      size="small"
                      />
                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                    <TextField
                      //   label="Size"
                      value={Header.OtherInfo}
                      id="outlined-basic"
                      label="Other Info" 
                      variant="outlined"
                      size="small"
                      />
                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                    <TextField
                      //   label="Size"
                      value={Header.Sisters}
                      id="outlined-basic"
                      label="No. of Sister" 
                      variant="outlined"
                      size="small"
                      />
                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                    <TextField
                      //   label="Size"
                      value={Header.NoOFFamilyMembers}
                      id="outlined-basic"
                      label="Family Members" 
                      variant="outlined"
                      size="small"
                      />
                      </div>
                    </Grid>
                       </Grid>
                       <Grid container direction='row'>
                    <Grid item lg={2} md={4} sm={12} xs={12}>
                    <input type='checkbox' id='checkbox' value='Married'/>
                    <lable>Married</lable>
                    </Grid>
                    <Grid item lg={2} md={4} sm={12} xs={12}>
                    <input type='checkbox' id='checkbox' value='Have Gold'/>
                    <lable>Have Gold</lable>
                  </Grid>
                  <Grid item lg={2} md={4} sm={12} xs={12}>
                  <input type='checkbox' id='checkbox' value='Is Earning'/>
                  <lable>Is Earning</lable>

                    </Grid>
                    <Grid item lg={2} md={4} sm={12} xs={12}>
                <input type='checkbox' id='checkbox' lable='Is Able to Pay'/>
                <lable>Is Able to Pay</lable>

                    </Grid>
                   </Grid>
                   </fieldset>
                    </form>

                </Grid>
                <WelTable/>
        </div>
    )
}

export default Welfare
