  
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Registration from './RegisHeader/Registration';
import Welfare from './welfare/Welfare';
import Service from './service/Service';
import { Link } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Registration', 'Welfare', 'Service'];
}


export default function MyStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();
  const [Header, setHeader] = useState({
    MRNo: "",
    TokenNo: "",
    RegistrationDate: new Date(),
    Name: "",
    Father: "",
    DOB: new Date(),
    Age: "",
    Gender: "",
    Religion: "",
    District: "",
    City: "",
    Area: "",
    HousNo: "",
    Address: "",
    CNIC: "",
    Phone: "",
    OffPhone: "",
    Mobile: "",
    RefBy: "",
    Remarks: "",
    IsRejected: false,
    IsZakat: "",
    IsPAFEmp: false,
    MonthlyConsLimit: 0,
    // ThumbImage: "",
    NOY: "",
    EmpID: "",
    IsStaff: false,
    CreateUser: "",
    ModifyUser: "",
    CreateDate: "",
    ModifyDate: ""
});
// const [Welfare, setWelfare] = useState({
          
//   MRNo:"MR-0000000014",
//   TokenNo:"14",
//   WelfareDate:"2021-02-28T13:32:08.986Z",
//   Profession:"leader",
//   Fiqa:"sunni",
//   Education:"bachelors",
//   Cast:"sidd",
//   MonthlyIncome:122222,
//   Guardian:"guradia",
//   OtherInfo:"other",
//   MaleKids:0,
//   FemaleKids:1,
//   OtherKids:0,
//   Brothers:0,
//   Sisters:0,
//   NoOFFamilyMembers:2,
//   IsMarried:true,
//   IsAbleToPay:false,
//   IsEarning:false,
//   HaveGold:false,
//   ReqName:"req",
//   ReqPhone:"1213 1231231",
//   ReqRelationWithPatient:"self",
//   CreateUser:"Admin",
//   ModifyUser:"Admin",

//   FormName:"Welfare",
//   Detail:[{"MRNo":"MR-0000000014",
//   MemberName:"noshan",
//   RelationWithPatient:"self",
//   MonthlyIncome:12222,
//   tableData:{"id":0}},
//   {
//   MRNo:"MR-0000000014",
//   MemberName:"wi",
//   RelationWithPatient:"wife",
//   MonthlyIncome:122,
//   tableData:{"id":1}}]
  
// });
// const [Service, setService] = useState({
//   MRNo:"MR-0000000015",
//   TokenNo:"14",
//   Gender:'',
//   ServiceDate:"2021-02-28T14:19:32.164Z",
//   Ward:"Ward# 2",
//   Amount:1222,
//   TotalAmount:1222,
//   PatientContribution:"dd",
//   Remarks:"dsad",
//   CreatedUser:"Admin",
//   ModifyUser:"Admin",
  
//   FormName:"Service",
//   Detail:[{"TestDesc":"thyroid",
//   TestCode:"001",
//   TestRate:"1",
//   tableData:{"id":0}}]
// } )

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };
  const getStepContent=(step) =>{
    switch (step) {
      case 0:
        return <Registration handleNext={handleNext}
         handleBack={handleBack}
         Header={Header}
         setHeader={setHeader}
          />
      case 1:
        return <Welfare handleNext={handleNext} handleBack={handleBack} 
        // Welfare={Welfare}
        // setWelfare={setWelfare}
        />;
      case 2:
        return <Service handleNext={handleNext} handleBack={handleBack}
        // Service={Service}
        // setService={setService}
        />;
      default:
        return 'Unknown step';
    }
  }
  
  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    window.location='/'
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = <Typography variant="caption"></Typography>;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button  onClick={handleReset} className={classes.button}>
              <Link to='/'>
                click
              </Link>
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            {/* <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              {isStepOptional(activeStep) && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                  className={classes.button}
                >
                  Skip
                </Button>
              )}

            
            </div> */}
              {/* <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button> */}
          </div>
        )}
      </div>
    </div>
  );
}