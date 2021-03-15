import React, {useState} from 'react'
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import ButtonAppBar from './Header'
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers'
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


function StyledCheckbox(props) {
    const classes = useStyles();
  
    return (
      <Checkbox
        className={classes.root}
        disableRipple
        
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
  
const genders = [
    {
      value: 'gnd1',
      label: 'male',
    },
    {
      value: 'gnd2',
      label: 'female',
    },
  
  ];




const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        marginLeft:40,
        width: 280,
      },
    },
 
  }));


function Registration({handleNext,handleBack}) {
    const classes = useStyles();
    const [currency, setCurrency] = React.useState();
    const [gender, setGender] = React.useState();
    const form = 'Registration'
    

    const handleCurrencyChange = (event) => {
      setCurrency(event.target.value);
    //   setGender(event.traget.value)
    };
    const handleGenderChange = (event) => {
        setGender(event.traget.value);
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
        const [selectedDate, setSelectedDate] = React.useState(new Date('2021-08-4'));
      
        const handleDateChange = (date) => {
          setSelectedDate(date);
        };
       
       
        const handleSave = (e) =>{
          e.preventDefualt(e);
       
        }
            
        
        const handleChange = (e) => { 
          e.preventDefualt();
          const name = e.target.name; 
        
        setHeader({ 
              ...Header,                  
              [name]: e.target.value 
             
          }) 
        }
        console.log(Header)
    return (
        <div>
    
            <Grid container>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <ButtonAppBar handleNext={handleNext} handleBack={handleBack}
                    form={form}
                    />
                </Grid>
                <form className={classes.root} noValidate autoComplete="on" onSubmit={handleSave}>

                <Grid container direction='row'>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                      <TextField
                      value={Header.MRNo}
                      //   label="Size"
                      id="outlined-basic"
                      label="M.R #" 
                        variant="outlined"
                        size="small"
                        // onChange={(e)=>setHeader({...Header,MRNo:e.target.value})}
                      />
                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                      <TextField
                      //   label="Size"
                      id="outlined-basic"
                      label="Token #" 
                        variant="outlined"
                        size="small"
                        value={Header.TokenNo}
                        onChange={(e)=>setHeader({...Header,TokenNo:e.target.value})}

                      />
                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      {/* <TextField
                      //   label="Size"
                        id="outlined-size-small"
                        defaultValue="Small"
                        variant="outlined"
                        size="small"
                      /> */}
                         <KeyboardDatePicker
                         value={Header.RegistrationDate}
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={(e)=>setHeader({...Header,RegistrationDate:e.target.value})}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </MuiPickersUtilsProvider>
                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                      <TextField
                      value={Header.Name}
                      onChange={(e)=>setHeader({...Header,Name:e.target.value})}
                      //   label="Size"
                      id="outlined-basic"
                      label="Name" 
                        variant="outlined"
                        size="small"
                      />
                      </div>
                    </Grid>
                    {/* 2nd grid */}
                    

                <Grid container direction='row'>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                      <TextField
                      value={Header.Father}
                      onChange={(e)=>setHeader({...Header,Father:e.target.value})}

                      //   label="Size"
                      id="outlined-basic"
                      label="Father Name" 
                        variant="outlined"
                        size="small"
                      />
                      </div>
                    </Grid>
                   
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                      <TextField
                      //   label="Size"
                      id="outlined-basic"
                      label="Date of Birth" 
                        variant="outlined"
                        size="small"
                      >
                           <MuiPickersUtilsProvider utils={DateFnsUtils}>
                       <KeyboardDatePicker
                        value={Header.DOB}
                       margin="normal"
                       id="date-picker-dialog"
                       label="Date picker dialog"
                       format="MM/dd/yyyy"
                       value={selectedDate}
                       onChange={handleDateChange}
                       KeyboardButtonProps={{
                         'aria-label': 'change date',
                       }}
                     />
                     </MuiPickersUtilsProvider>
                          </TextField>
                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                      <TextField
                      value={Header.Age}
                      //   label="Size"
                      id="outlined-basic"
                      label="Age" 
                        variant="outlined"
                        size="small"
                      />
                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                      <TextField
                     value={Header.Gender}
                      //   label="Size"
                      id="outlined-basic"
                      label="Gender" 
                        variant="outlined"
                        size="small"
                        select
                        value={gender}
                        onChange={handleGenderChange}
                      >
                      {genders.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                         ))}
                          </TextField>
                      </div>
                    </Grid>
                   </Grid>
                   {/* 3rd grid */}
                   <Grid container direction='row'>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                      <TextField
                      //   label="Size"
                      value={Header.Religion}
                      id="outlined-basic"
                      label="Religion" 
                        size="small"
                        id="outlined-select-currency"
                        select
                        value={currency}
                        onChange={handleCurrencyChange}
                        variant="outlined"
                      >
                      {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                         ))}
                         </TextField>
                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                      <TextField
                      //   label="Size"
                      id="outlined-basic"
                      label="Help Type" 
                        variant="outlined"
                        size="small"
                      />
                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                      <TextField
                      //   label="Size"
                      id="outlined-basic"
                      label="CNIC" 
                        variant="outlined"
                        size="small"
                      />
                      </div>
                    </Grid>
                   
                   </Grid>
                   {/* 4th contact */}
                   <fieldset>
                   <legend>Contact</legend>
                   <Grid container direction='row'>
                       
                           
                           <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                      <TextField
                      //   label="Size"
                      id="outlined-basic"
                      label="House #" 
                        id="outlined-select-currency"
                        select
                        value={currency}
                        // onChange={handleChange}
                        variant="outlined"
                      >
                      {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                         ))}
                         </TextField>
                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                      <TextField
                      //   label="Size"
                      id="outlined-basic"
                      label="Address" 
                        variant="outlined"
                        size="small"
                      />
                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                      <TextField
                      //   label="Size"
                      id="outlined-basic"
                      label="Area" 
                        variant="outlined"
                        size="small"
                      />
                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                      <TextField
                      //   label="Size"
                      id="outlined-basic"
                      label="District" 
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
                      id="outlined-basic"
                      label="City" 
                        id="outlined-select-currency"
                        select
                        value={currency}
                        // onChange={handleChange}
                        variant="outlined"
                      >
                      {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                         ))}
                         </TextField>
                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                      <TextField
                      //   label="Size"
                      id="outlined-basic"
                      label="Phone(Res)" 
                        variant="outlined"
                        size="small"
                      />
                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                      <TextField
                      //   label="Size"
                      id="outlined-basic"
                      label="Phone(off)" 
                        variant="outlined"
                        size="small"
                      />
                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                      <TextField
                      //   label="Size"
                      id="outlined-basic"
                      label="Mobile" 
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
                      id="outlined-basic"
                      label="Monthly Consumtion Limit" 
                        variant="outlined"
                        size="small"
                      />
                      </div>
                    </Grid>
                       </Grid>
                   </fieldset>

                   {/* 6th reffer info */}

                   <fieldset>
                   <legend>Reffer Info</legend>
                   <Grid container direction='row'>
                       
                           
                           <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                      <TextField
                      //   label="Size"
                      id="outlined-basic"
                      label="Refered By" 
                        id="outlined-select-currency"
                        select
                        value={currency}
                        // onChange={handleChange}
                        variant="outlined"
                      >
                      {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                         ))}
                         </TextField>
                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                      <TextField
                      //   label="Size"
                      id="outlined-basic"
                      label="Employee ID" 
                        variant="outlined"
                        size="small"
                      />
                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                      <TextField
                      //   label="Size"
                      id="outlined-basic"
                      label="NOY" 
                        variant="outlined"
                        size="small"
                      />
                      </div>
                    </Grid>
                    <Grid item lg={6} md={4} sm={12} xs={12}>
                    <div>
                      <TextField
                      //   label="Size"
                      id="outlined-basic"
                      label="Remarks" 
                        variant="outlined"
                        size="small"
                      />
                      </div>
                    </Grid>
                   </Grid>

                   {/* 5th grid */}

                  
                  
                   </fieldset>

                {/* 7th box staff */}

                <fieldset>
                   <legend>Staff</legend>
                   <Grid container direction='row'>
                   <FormGroup row>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                    
                    <FormControlLabel
                        control={
                          <Checkbox
                            checked={state.checkedB}
                            onChange={handleChangecheck}
                            name="checkedB"
                            color="primary"
                          />
                        }
                        label="is PAF Employee"
                      />
                       
                    </Grid>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                    <FormControlLabel
                        control={
                          <Checkbox
                            checked={state.checkedB}
                            onChange={handleChangecheck}
                            name="checkedB"
                            color="primary"
                          />
                        }
                        label="Is Staff"
                      />
                  </Grid>
                  <Grid item lg={4} md={4} sm={12} xs={12}>
                  <FormControlLabel
                        control={
                          <Checkbox
                            checked={state.checkedB}
                            onChange={handleChangecheck}
                            name="checkedB"
                            color="primary"
                          />
                        }
                        label="Is Rejected"
                      />
                    </Grid>
                    </FormGroup>
                   </Grid>
                 
                   </fieldset>

                </Grid>
                </form>
               
            </Grid>
        </div>
    )
}

export default Registration
