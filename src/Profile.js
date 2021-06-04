import React from 'react';
import { useSelector } from 'react-redux';

const Profile=()=>{
    const value=useSelector(state=>state.form.myform.values)
    return(
        <>
       <h1>{value.fname}</h1>
        </>
    )
}

export default Profile;