import React from 'react'
import registrationimg from '../../assets/registrationimg.png'

const Started = () => {
    return (
        <>
            <div className='w-full h-screen bg-primary flex'>
                <div className='w-1/2 flex justify-end m-auto pr-[45px]'>
                    <img src={registrationimg} alt="" />
                </div>
                <div className='w-1/2 p-5'>
                    <div className='w-[500px] border border-[#120934] rounded-[50px] mt-[100px] bg-primary shadow-boxShadow'>
                        <h1 className='font-heading1 text-[50px] text-secondarycolor font-bold text-center my-[30px]'>Let's Get Started...</h1>
                        <div className='w-[300px] m-auto'>
                            <p className='font-paragraph text-xl text-secondarycolor font-medium text-center'>Connect with each other with chatting or calling. Enjoy safe and private texting...</p>
                        </div>
                        <div className='flex justify-center my-[50px]'>
                            <button className='w-[350px] py-3 font-paragraph text-2xl text-secondarycolor font-semibold text-center border border-secondarycolor rounded-[86px] hover:bg-secondarycolor hover:text-primary cursor-pointer'>Join Now</button>
                        </div>
                        {/* <div className='mb-[30px]'>
                            <p className='font-paragraph text-xl text-secondarycolor font-medium text-center'>Already  have an account ?<span className='font-paragraph text-2xl text-secondarycolor font-semibold text-center cursor-pointer'> Sign In</span></p>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Started