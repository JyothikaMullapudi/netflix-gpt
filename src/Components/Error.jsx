import React from 'react'
import { useRouteError } from 'react-router-dom';

const Error = () => {

    const error = useRouteError();
   // console.log(error);
  return (
    <div>
     status : {error.status}<br/>
     Message : {error.error.message}<br/>
     Status Text : {error.statusText}<br/>
    </div>
  )
}

export default Error;
