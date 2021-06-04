import React,{useState} from 'react';

import {Field,formValues,reduxForm} from 'redux-form';

import Profile from './Profile';
const App=(props)=>{
  const {handleSubmit}=props;
  const [show,setShow]=useState(false);
   return(
   <>
   <form onSubmit={handleSubmit((formValues)=>{
    setShow(true);
   })}>
   <label>fname</label>
     <Field type="text" name="fname"  component="input"/>
     <label>lname</label>
     <Field type="text" name="lname" component="input"/>
     <button type="submit">submit</button>
     </form>
     {show?<Profile/>:null}
   </>
  ) 
}

export default reduxForm({
  form:"myform",
})(App);

