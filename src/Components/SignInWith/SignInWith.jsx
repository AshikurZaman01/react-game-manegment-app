import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2'


const SignInWith = () => {

   const {googleLogin} = useContext(AuthContext)


    const handleGoogleLogin = ()=>
    {
        googleLogin()
        .then( res => {
            console.log(res);
            window.location.href = '/';
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Login With Google Successful',
                showConfirmButton: false,
                timer: 1500
              })
        }) 
        .catch( err => console.log(err))  
    }

    return (
        <div>
            <div>
                <h6 className='text-[15px] text-center text-golden font-bold '>Login In With </h6>
            </div>
            <div className='flex justify-center my-2 '>
                <div>
                 <button onClick={handleGoogleLogin} className='rounded-full text-2xl mx-2'><FcGoogle></FcGoogle></button>
                 <button className='rounded-full text-2xl'><AiFillGithub></AiFillGithub></button>
                </div>
            </div>
        </div>
    );
};

export default SignInWith;