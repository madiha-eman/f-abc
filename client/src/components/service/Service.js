import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ButtonAppBar from '../RegisHeader/Header'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ServiceTable from './ServiceTable';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        marginLeft:40,
        width: 280,
      },
    },
    txtf:{
      marginLeft:'16px',
        width:'174px',
        margin: theme.spacing(1),


    },
    txtfBig:{
      marginLeft:'30px',
        width:'404px',
        margin: theme.spacing(1),

    },
    cntr:{
        textAlign:'center'
    },
    div:{
      marginBottom:'10px',
      marginLeft:5,
        // border: '2px solid red',
        boxShadow:'3px 3px 5px 6px rgba(0, 0, 0, 0.3)',
    },
    tkn:{
      textAlign:'center!important',
    },
    tkn1:{
      width:'370px',
      marginLeft:'20px',
      height:'80px',
    }
 
  }));
const Service = ({handleNext, handleBack}) => {
    const classes = useStyles();
    const form = 'Service'

    const [Header, setHeader] = useState({
          MRNo:"MR-0000000015",
          TokenNo:"14",
          Gender:'',
          ServiceDate:"2021-02-28T14:19:32.164Z",
          Ward:"Ward# 2",
          Amount:1222,
          TotalAmount:1222,
          PatientContribution:"dd",
          Remarks:"dsad",
          CreatedUser:"Admin",
          ModifyUser:"Admin",
          
          FormName:"Service",
          Detail:[{"TestDesc":"thyroid",
          TestCode:"001",
          TestRate:"1",
          tableData:{"id":0}}]
     } )

     const handleSave = () =>{
        
            
    }
    return (
        <div>
          {/* <Button> */}

            <ButtonAppBar handleNext={handleNext} handleBack={handleBack}
             form={form}
             />                               
            {/* </Button> */}
           <div>
           <Grid component="section" container>
           <Grid item lg={8} md={6} sm={12} xs={12} className={classes.div}>
           <form noValidate autoComplete="on" onSubmit={handleSave}>


                <Grid container direction='row'>
                   <Grid item lg={3} md={4} sm={12} xs={12}>
                   <div>
                      <TextField
                      className={classes.txtf}
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
                      className={classes.txtf}
                      //   label="Size"
                      value={Header.TokenNo}
                      id="outlined-basic"
                      label="Token #" 
                        variant="outlined"
                        size="small"
                      />
                      </div>
                   </Grid>
                   <Grid item lg={3} md={4} sm={12} xs={12}>
                   <div>
                      <TextField
                       className={classes.txtf}
                      //   label="Size"
                      value={Header.Gender}
                      id="outlined-basic"
                      label="Gender" 
                        variant="outlined"
                        size="small"
                      />
                      </div>
                   </Grid>
                   <Grid item lg={3} md={4} sm={12} xs={12}>
                   <div>
                      <TextField
                      className={classes.txtf}
                      //   label="Size"
                      value={Header.Date}
                      id="outlined-basic"
                      label="Date" 
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
                      className={classes.txtf}
                      //   label="Size"
                      value={Header.Ward}
                      id="outlined-basic"
                      label="Ward" 
                        variant="outlined"
                        size="small"
                      />
                      </div>
                   </Grid>
                   <Grid item lg={3} md={4} sm={12} xs={12}>
                   <div>
                      <TextField
                      className={classes.txtf}
                      //   label="Size"
                      value={Header.Amount}
                      id="outlined-basic"
                      label="Amount*" 
                        variant="outlined"
                        size="small"
                      />
                      </div>
                   </Grid>
                   <Grid item lg={3} md={4} sm={12} xs={12}>
                   <div>
                      <TextField
                       className={classes.txtf}
                      //   label="Size"
                      value={Header.TotalAmount}
                      id="outlined-basic"
                      label="TotalAmount" 
                        variant="outlined"
                        size="small"
                      />
                      </div>
                   </Grid>
                   <Grid item lg={3} md={4} sm={12} xs={12}>
                   <div>
                      <TextField
                      className={classes.txtf}
                      //   label="Size"
                      value={Header.PatientContribution}
                      id="outlined-basic"
                      label="PatientContribution" 
                        variant="outlined"
                        size="small"
                      />
                      </div>
                   </Grid>
               </Grid>
               <Grid>
               <Grid item lg={5} md={4} sm={12} xs={12}>
                   <div>
                      <TextField
                      className={classes.txtfBig}
                      //   label="Size"
                      value={Header.Remarks}
                      id="outlined-basic"
                      label="Remarks" 
                        variant="outlined"
                        size="small"
                      />
                      </div>
                   </Grid>
               </Grid> 
               </form>
               </Grid>
              
               <Grid lg={3} md={6} sm={12} xs={12} className={classes.tkn}>
               <fieldset className={classes.tkn1}>
                   <legend>
                     <button>Token No</button></legend>
                   <div>
                       <h3 className={classes.cntr}>25</h3>
                   </div>
                   </fieldset>

               </Grid>
               </Grid>
               <Grid container >
                 <Grid item lg={6}>
                 <ServiceTable/>
                 </Grid>
                 <Grid item lg={6}>

                  </Grid>
               </Grid>

           </div>
        </div>
    
    )
}

export default Service
