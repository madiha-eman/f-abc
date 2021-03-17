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

const Welfare = ({handleNext, handleBack, 
  // Welfare, setWelfare 
}) => {

    const classes = useStyles();
    const form = 'Welfare';
    const [currency, setCurrency] = React.useState('vlue1');
    const [Welfare, setWelfare] = useState({
          
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

    // const handleChange = (event) => {
    //   setCurrency(event.target.value);
    // };
    const [state, setState] = React.useState({});
    
      // const handleChangecheck = (event) => {
      //   setState({ ...state, [event.target.name]: event.target.checked });
      // }
  
        // The first commit of Material-UI
        const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
      
        const handleDateChange = (date) => {
          setSelectedDate(date);
        };
        const handleChange = (event) => { 
          const name = event.target.name; 
          setWelfare({
            ...Welfare,                  
            [name]: event.target.value 
           
        })   
        }
        console.log(Welfare)
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
                      value={Welfare.MRNo}
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
                      value={Welfare.Token}
                      id="outlined-basic"
                      label="Token #" 
                      onChange={(e)=>setWelfare({...Welfare,TokenNo:e.target.value})}
                        variant="outlined"
                        size="small"
                      />
                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                   
                         <KeyboardDatePicker
                           value={Welfare.WelfareDate}
                            margin="normal"
                            id="date-picker-dialog"
                            label="WelfareDate"
                            format="MM/dd/yyyy"
                            value={selectedDate}
                            onChange={handleDateChange}
                            onChange={(e)=>setWelfare({...Welfare,WelfareDate:e.target.value})}
                            KeyboardButtonProps={{
                              'aria-label': 'change date',
                            }}
                          />
                          </MuiPickersUtilsProvider>
                      </div>
                    </Grid>
                    
                    <Grid item lg={1} md={4} sm={12} xs={12}>
                    <input type='checkbox' id='checkbox' value='Married'
                    onChange={(e)=>setWelfare({...Welfare,IsMarried:e.target.value})}
                    />
                    <lable>Zakat</lable>
                       
                    </Grid>
                    <Grid item lg={1} md={4} sm={12} xs={12}>
                    <input type='checkbox' id='checkbox' value='Married'
                     onChange={(e)=>setWelfare({...Welfare,TokenNo:e.target.value})}
                    />
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
                      value={Welfare.Profession}
                        id="outlined-basic"
                        label="Fiqa" 
                        onChange={(e)=>setWelfare({...Welfare,Profession:e.target.value})}
                        variant="outlined"
                        size="small"
                      />
                    
                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                    <TextField
                      //   label="Size"
                      value={Welfare.Education}
                        id="outlined-basic"
                        label="Fiqa" 
                        onChange={(e)=>setWelfare({...Welfare,Education:e.target.value})}
                        variant="outlined"
                        size="small"
                      />
                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                      <TextField
                      //   label="Size"
                        value={Welfare.Fiqa}
                        id="outlined-basic"
                        label="Fiqa" 
                        onChange={(e)=>setWelfare({...Welfare,Fiqa:e.target.value})}
                        variant="outlined"
                        size="small"
                      />
                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                      <TextField
                      //   label="Size"
                      value={Welfare.Cast}
                      id="outlined-basic"
                      label="Cast" 
                      onChange={(e)=>setWelfare({...Welfare,Cast:e.target.value})}
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
                      value={Welfare.ReqName}
                      id="outlined-basic"
                      label="Requestor Name" 
                      onChange={(e)=>setWelfare({...Welfare,ReqName:e.target.value})}
                      variant="outlined"
                      size="small"
                      />
                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                    <TextField
                      //   label="Size"
                      value={Welfare.ReqRelationWithPatient}
                      id="outlined-basic"
                      label="Relation With Patient" 
                      onChange={(e)=>setWelfare({...Welfare,ReqRelationWithPatient:e.target.value})}
                      variant="outlined"
                      size="small"
                      />
                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                    <TextField
                      //   label="Size"
                      value={Welfare.MaleKids}
                      id="outlined-basic"
                      onChange={(e)=>setWelfare({...Welfare,MaleKids:e.target.value})}
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
                      value={Welfare.FemaleKids}
                      id="outlined-basic"
                      label="No. of Kids(Female)" 
                      variant="outlined"
                      onChange={(e)=>setWelfare({...Welfare,FemaleKids:e.target.value})}
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
                      value={Welfare.ReqPhone}
                      id="outlined-basic"
                      label="Request Ph #" 
                      variant="outlined"
                      onChange={(e)=>setWelfare({...Welfare,ReqPhone:e.target.value})}
                      size="small"
                      />
                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                    <TextField
                      //   label="Size"
                      value={Welfare.Guardian}
                      id="outlined-basic"
                      label="Guardian" 
                      onChange={(e)=>setWelfare({...Welfare,Guardian:e.target.value})}
                      variant="outlined"
                      size="small"
                      />
                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                    <TextField
                      //   label="Size"
                      value={Welfare.OtherKids}
                      id="outlined-basic"
                      label="Other Kids" 
                      onChange={(e)=>setWelfare({...Welfare,OtherKids:e.target.value})}
                      variant="outlined"
                      size="small"
                      />
                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                    <TextField
                      //   label="Size"
                      value={Welfare.Brothers}
                      id="outlined-basic"
                      label="No. of Brothers" 
                      variant="outlined"
                      onChange={(e)=>setWelfare({...Welfare,Brothers:e.target.value})}
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
                      value={Welfare.MonthlyIncome}
                      id="outlined-basic"
                      label="Monthly Income" 
                      onChange={(e)=>setWelfare({...Welfare,MonthlyIncome:e.target.value})}
                      variant="outlined"
                      size="small"
                      />
                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                    <TextField
                      //   label="Size"
                      value={Welfare.OtherInfo}
                      id="outlined-basic"
                      label="Other Info" 
                      onChange={(e)=>setWelfare({...Welfare,OtherInfo:e.target.value})}
                      variant="outlined"
                      size="small"
                      />
                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                    <TextField
                      //   label="Size"
                      value={Welfare.Sisters}
                      id="outlined-basic"
                      label="No. of Sister" 
                      onChange={(e)=>setWelfare({...Welfare,Sisters:e.target.value})}
                      variant="outlined"
                      size="small"
                      />
                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                    <TextField
                      //   label="Size"
                      value={Welfare.NoOFFamilyMembers}
                      id="outlined-basic"
                      label="Family Members" 
                      onChange={(e)=>setWelfare({...Welfare,NoOFFamilyMembers:e.target.value})}
                      variant="outlined"
                      size="small"
                      />
                      </div>
                    </Grid>
                       </Grid>
                       <Grid container direction='row'>
                    <Grid item lg={2} md={4} sm={12} xs={12}>
                    <input type='checkbox' id='checkbox' value='Married'
                    onChange={(e)=>setWelfare({...Welfare,IsMarried:e.target.value})}
                    />
                    <lable>Married</lable>
                    </Grid>
                    <Grid item lg={2} md={4} sm={12} xs={12}>
                    <input type='checkbox' id='checkbox' value='Have Gold'
                    onChange={(e)=>setWelfare({...Welfare,HaveGold:e.target.value})}
                    />
                    <lable>Have Gold</lable>
                  </Grid>
                  <Grid item lg={2} md={4} sm={12} xs={12}>
                  <input type='checkbox' id='checkbox' value='Is Earning'
                  onChange={(e)=>setWelfare({...Welfare,IsEarning:e.target.value})}
                  />
                  <lable>Is Earning</lable>

                    </Grid>
                    <Grid item lg={2} md={4} sm={12} xs={12}>
                <input type='checkbox' id='checkbox' lable='Is Able to Pay'
                onChange={(e)=>setWelfare({...Welfare,IsAbleToPay:e.target.value})}
                />
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
