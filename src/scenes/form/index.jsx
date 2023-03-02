import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const Form = () => {
    const isNonMobile=useMediaQuery("(min-width:600px)");

    const handleSubmit =(values)=>{
        console.log(values)
    }


return (
    <Box m='20px'>
          <Header title="FORM" subtitle="Add new profile" />
          <Formik 
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={validateValues}
          >
 {({
    values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
 }) =>(

    <form onSubmit={handleSubmit}>
        <Box 
        display='grid'
        gap='30px'
        gridTemplateColumns='repeat(4, minmax(0,1fr))'
       >
        <TextField
        fullWidth
        variant='filled'
        type='text'
        label='First Name'
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.firstName}
        name='firstName'
        error={!!touched.firstName && !!errors.firstName}
        helperText={touched.firstName && errors.firstName}
        sx={{gridColumn: 'span 2'}}
        />
        <TextField
        fullWidth
        variant='filled'
        type='text'
        label='Last Name'
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.lastName}
        name='lastName'
        error={!!touched.lastName && !!errors.lastName}
        helperText={touched.lastName && errors.lastName}
        sx={{gridColumn: 'span 2'}}
        />
        <TextField
        fullWidth
        variant='filled'
        type='text'
        label='Email'
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.email}
        name='email'
        error={!!touched.email && !!errors.email}
        helperText={touched.email && errors.email}
        sx={{gridColumn: 'span 4'}}
        />
        <TextField
        fullWidth
        variant='filled'
        type='text'
        label='Number'
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.phone}
        name='phone'
        error={!!touched.phone && !!errors.phone}
        helperText={touched.phone && errors.phone}
        sx={{gridColumn: 'span 4'}}
        />
        <TextField
        fullWidth
        variant='filled'
        type='text'
        label='Address'
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.address}
        name='address'
        error={!!touched.address && !!errors.address}
        helperText={touched.address && errors.address}
        sx={{gridColumn: 'span 4'}}
        />
         <TextField
        fullWidth
        variant='filled'
        type='text'
        label='Job position'
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.position}
        name='position'
        error={!!touched.position&& !!errors.position}
        helperText={touched.position && errors.position}
        sx={{gridColumn: 'span 4'}}
        />
       </Box>
       <Box display='flex' justifyContent='end' mt='20px'>
        <Button type="submit" color='secondary' variant='contained'>
            Create New User
        </Button>
       </Box> 
    </form>
 )}
  </Formik>
    </Box>
)
};

const validateValues = yup.object().shape({
    firstName : yup.string().required('required'),
    lastName : yup.string().required('required'),
    email : yup.string().email('Invalid Email').required('required'),
    phone: yup.string().required('required'),
    address : yup.string().required('required'),
    position : yup.string().required('required'),
})

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address: "",
    position: "",
  };
export default Form;


