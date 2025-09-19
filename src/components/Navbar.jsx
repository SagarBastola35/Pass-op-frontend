import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-slate-800 text-white'>
            <div className="myContainer flex justify-between items-center px-4 py-5 h-14">
                <div className="logo font-bold text-white text-2xl">
                    <span className='text-green-500'> &lt;</span>
                    <span>Password</span><span className='text-green-500'>Manager/&gt;</span>
                </div>
                
                <button className='bg-green-700 text-white my-5 rounded-full flex justify-between items-center ring-white ring-1'>
                    <img className='invert w-10 p-1' src="/icons/github (2).svg" alt="github logo" />
                    <span className='font-bold px-2'>GitHub</span>
                </button>

            </div>

        </nav>
    )
}

export default Navbar