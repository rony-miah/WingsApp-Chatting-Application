import React, { useState } from 'react'
import registrationimg from '../../assets/registrationimg.png'
import { BsEyeSlashFill, BsEyeFill } from 'react-icons/bs'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailerror, setEmailerror] = useState('');
    const [passworderror, setPassworderror] = useState('');

    const [passwordShow, setPasswordShow] = useState(false);

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setEmailerror('');
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setPassworderror('');
    }

    const handleSubmit = () => {
        if (!email) {
            setEmailerror('Enter your email address!');
        } else {
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                setEmailerror('Enter your valid email address!');
            }
        }
        if (!password) {
            setPassworderror('Enter your password!');
        } else {
            if (!/^(?=.*[a-z])/.test(password)) {
                setPassworderror('Your password must contain at least one lowercase letter!');
            } else if (!/^(?=.*[A-Z])/.test(password)) {
                setPassworderror('Your password must contain at least one uppercase letter!');
            } else if (!/^(?=.*[0-9])/.test(password)) {
                setPassworderror('Your password must contain at least one digit!');
            } else if (!/^(?=.*[!@#$%^&*])/.test(password)) {
                setPassworderror('Your password must contain at least one symbol!');
            } else if (!/^(?=.{8,})/.test(password)) {
                setPassworderror('Your password must be at least 8 characters!');
            }
        }
    }

    return (
        <>
            <div className='w-full h-screen bg-primary flex'>
                <div className='w-1/2 flex justify-end m-auto pr-[45px]'>
                    <img src={registrationimg} alt="" />
                </div>
                <div className='w-1/2 p-5 ml-[30px]'>
                    <div className='w-[500px] border border-[#120934] rounded-[50px] mt-[60px] bg-primary shadow-boxShadow'>

                        <h1 className='font-heading1 text-[45px] text-secondarycolor font-bold text-center mt-2'>Hi, Welcome Back!</h1>

                        <div className='relative mt-5 ml-5'>
                            <input onChange={handleEmail} className='w-[460px] py-4 bg-primary border-b border-secondarycolor focus:outline-none text-base' type="email" placeholder='Enter your email' />
                            <p className='absolute top-[-9px] left-0 bg-primary font-paragraph text-[13px] text-secondarycolor tracking-widest font-semibold'>Email Address</p>
                            <p className='font-paragraph text-[13px] text-red-500 font-semibold p-1 mt-1'>{emailerror}</p>
                        </div>

                        <div className='relative mt-5 ml-5'>
                            <input onChange={handlePassword} className='w-[460px] py-4 bg-primary border-b border-secondarycolor focus:outline-none text-base' type={passwordShow ? 'text' : 'password'} placeholder='Enter password' />
                            <p className='absolute top-[-9px] left-0 bg-primary font-paragraph text-[13px] text-secondarycolor tracking-widest font-semibold'>Password</p>
                            {
                                passwordShow ?
                                    <BsEyeFill onClick={() => setPasswordShow(!passwordShow)} className='absolute top-5 left-[425px] text-xl cursor-pointer' />
                                    :
                                    <BsEyeSlashFill onClick={() => setPasswordShow(!passwordShow)} className='absolute top-5 left-[425px] text-xl cursor-pointer' />
                            }
                            <p className='font-paragraph text-[13px] text-red-500 font-semibold p-1 mt-1'>{passworderror}</p>
                        </div>
                        <div className='px-5 flex justify-between'>
                            <div>
                                <input type="checkbox"/>
                                <label className='font-paragraph text-base text-secondarycolor font-medium ml-1'>Remember me</label>
                            </div>
                            <p className='font-paragraph text-base text-red-500 font-medium cursor-pointer'>Forgot Password?</p>
                        </div>

                        <div className='flex justify-center my-5'>
                            <button onClick={handleSubmit} className='w-[350px] py-[10px] font-paragraph text-2xl text-secondarycolor font-semibold text-center border border-secondarycolor rounded-[86px] hover:bg-secondarycolor hover:text-primary cursor-pointer'>Sign In</button>
                        </div>
                        <div className='relative mx-5 border border-grey-400'>
                            <p className='absolute top-[-14px] left-[194px] bg-primary font-paragraph text-base text-secondarycolor font-medium'>or Sign In With</p>
                        </div>
                        <div className='mb-5'>
                            <p className='font-paragraph text-xl text-secondarycolor font-medium text-center'>Don't have an account ?<span className='font-paragraph text-2xl text-[#EA6C00] font-semibold text-center cursor-pointer'> Sign Up</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login