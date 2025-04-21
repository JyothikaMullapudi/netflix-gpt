import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../Utils/Firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeuser } from '../Utils/userSlice';
import { HEADER_URL, langcons, USER_AVTR } from '../Utils/Constants';
import { addGPTSearch } from '../Utils/GptSearchSlice';
import { changeLang } from '../Utils/configSlice';
//import { langcons } from '../Utils/Constants';

const Header = () => {
  const user = useSelector(store => store.user);
  // console.log(user);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  //Jyothika@gmail.com
  //Jyothika@530
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user

        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
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
    return () => unsubscribe();

  }, []);

  const handleGptSearchClick = () => {
    dispatch(addGPTSearch());
  }

  const signOutfn = () => {

    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
    });
  }

  const handlelangchange = (e) => {
    //console.log(e.target.value)
    dispatch(changeLang(e.target.value));
  }

  const configlan = useSelector(store => store.GPT.showGPTSearch);
  console.log(configlan,'configlan');

  return (
    <div className='absolute z-10 w-12/12 bg-gradient-to-b from-green sm:bg-blue-900 md:bg-black flex justify-between flex-col md:flex-row mx-auto'  >
      <img className=" w-40 md:w-55 mx-auto md:mx-0" src={HEADER_URL} alt="Logo Head" />
      {user &&
        <div className='flex px-2 md:mx-2 mx-auto'>
          {
            configlan && (
            <select className='bg-gray-900 text-white p-2 my-9 h-10 ' onChange={handlelangchange}>
              {langcons.map(lang => <option className='' key={lang.identifier} value={lang.identifier}>{lang.value}</option>)}

            </select>
          )}
          <button className='text-white px- mx-4  cursor-pointer ' onClick={handleGptSearchClick}>
            {configlan ? "Home": "🔎 GPT Search"}</button>
          <img className='w-12 h-12 my-7 mx-2 ' src={USER_AVTR} alt='Logo' />
          {/* <h6>{di}</h6> */}
          <button className='text-white hover:cursor-pointer font-bold' onClick={signOutfn}>SignOut</button>

        </div>}

    </div>
  )
}

export default Header;
