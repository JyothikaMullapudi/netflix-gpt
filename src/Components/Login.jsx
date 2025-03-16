import React, { useRef, useState } from "react";
import Header from "./Header";
import { signinValidation } from "../Utils/Validation";

const Login = () => {
  const [state, setState] = useState(true);
  const changeSignUp = () => {
    setState(!state);
  };
  //error message state variable

  const [errormessage, setErrormessage] = useState();

  //creating ref for input box
  const email = useRef(null);
  const password = useRef(null);

  const handleOnClick = () => {
    const meassage = signinValidation(
      email.current.value,
      password.current.value
    );
    setErrormessage(meassage);
    //console.log(email.current.value,password.current.value)
    //console.log(meassage);
  };
  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          className=" "
          src="https://assets.gqindia.com/photos/5cdc13ab306c1c49136e3c28/16:9/w_2560%2Cc_limit/new-Bollywood-movies-on-Netflix.jpg"
          alt="login bg img"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="p-12 absolute bg-black text-white w-3/12 mx-auto right-0 left-0 my-30 rounded-2xl opacity-90"
      >
        {state === true ? (
          <h1 className="font-bold text-2xl my-4">Sign In</h1>
        ) : (
          <h1 className="font-bold text-2xl my-4">Sign UP</h1>
        )}
        {state === false && (
          <input
            type="text"
            placeholder="UserName"
            className="px-2 my-4 bg-gray-700 tex w-full  text-white"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="px-2 my-4 bg-gray-700 tex w-full  text-white"
        />
        <input
          ref={password}
          type="Password"
          placeholder="Password"
          className="px-2 my-4 w-full  bg-gray-700 text-white"
        />
        <p className="text-red-700"> {errormessage} </p>
        {state === true ? (
          <button
            className="p-1 my-4 border-1 hover:cursor-pointer w-full bg-red-700 rounded-xl "
            onClick={handleOnClick}
          >
            Sign In
          </button>
        ) : (
          <button className="p-1 my-4 border-1 hover:cursor-pointer w-full bg-red-700 rounded-xl " onClick={handleOnClick}>
            Sign Up
          </button>
        )}
        {state === true ? (
          <p
            className="my-3 mx-5 hover: cursor-pointer "
            onClick={changeSignUp}
          >
            New to Netflix ? Sign Up
          </p>
        ) : (
          <p
            className="px-0 mx-1 my-2 hover: cursor-pointer "
            onClick={changeSignUp}
          >
            Already Registered ? Sign In
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
