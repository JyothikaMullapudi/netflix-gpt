import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../Utils/Firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeuser } from '../Utils/userSlice';
import { HEADER_URL, USER_AVTR } from '../Utils/Constants';

const Header = () => {
  const user = useSelector(store => store.user);
 // console.log(user);
  const dispatch = useDispatch();

  const navigate = useNavigate();
//Jyothika@gmail.com
//Jyothika@530
  useEffect(() => {
   const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user

        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeuser());
        navigate("/");
      }
    });

    //unsubscribe when component unmount
    return ()=> unsubscribe();

  }, []);

  const signOutfn = () => {

    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <div className='absolute z-10 w-12/12 bg-gradient-to-b from-black flex justify-between'  >
      <img className="w-55" src={HEADER_URL} alt="Logo Head" />
      {user &&
        <div className='flex px-2 mx-2'>
          <img className='w-12 h-12 my-7 ' src={USER_AVTR} alt='Logo' />
          {/* <h6>{di}</h6> */}
          <button className='text-white hover:cursor-pointer font-bold' onClick={signOutfn}>SignOut</button>

        </div>}

    </div>
  )
}

export default Header;
