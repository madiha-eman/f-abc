import React,{ useState } from "react";
import MaterialTable from "material-table";
import {tableIcons} from './Icons/Icons';
import MyStepper from './Stepper'
export default function Main() {
  const [dialogeBox, setdialogeBox] =useState(false)
    const [columns, setColumns] = useState([
      { title: 'Name', field: 'name' },
      { title: 'Surname', field: 'surname', initialEditValue: 'initial edit value' },
      { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
      {
        title: 'Birth Place',
        field: 'birthCity',
        lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
      },
    ]);
  
    const [data, setData] = useState([
      { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
      { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
    ]);
  const handleDialog = () => {
    setdialogeBox(true)
  }
    return (
        <>
        {dialogeBox ? 
        <MyStepper/> 
        : 
        (<MaterialTable
        title="Editable Preview"
        icons={tableIcons}
        columns={columns}
        data={data}
        actions={[
            {
                icon: tableIcons.Add,
                isFreeAction:true,
                onClick: handleDialog
            }
        ]}
      />)}
      
      </>
    )
  }
//   const [Header, setHeader] = useState({
//     MRNo: "",
//     TokenNo: "",
//     RegistrationDate: new Date(),
//     Name: "",
//     FatherOrHusband: "",
//     DOB: new Date(),
//     Age: "",
//     Gender: "",
//     Religion: "",
//     District: "",
//     City: "",
//     Area: "",
//     HousNo: "",
//     Address: "",
//     CNIC: "",
//     Phone: "",
//     OffPhone: "",
//     Mobile: "",
//     RefBy: "",
//     Remarks: "",
//     IsRejected: false,
//     IsZakat: "",
//     IsPAFEmp: false,
//     MonthlyConsLimit: 0,
//     ThumbImage: "",
//     NOY: "",
//     EmpID: "",
//     IsStaff: false,
//     CreateUser: "",
//     ModifyUser: "",
//     CreateDate: "",
//     ModifyDate: ""
// });