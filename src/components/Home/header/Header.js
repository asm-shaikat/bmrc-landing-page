import React from 'react';
const Header = () => {
    return (
        // Option 1
        // <div className='w-full flex items-center h-72 align-middle bg-gradient-to-r from-blue-500 to-black   dark:bg-slate-800'>
        //     <div className='text-white ml-10 lg:ml-40 xl:h-max xl:ml-32 xl:mr-48'>
        //         <p className='p-2'>Welcome to</p>
        //         <p className='p-2'>BAUST Mechatronics & Robotocs Club</p>
        //         <button className="btn btn-warning btn-xs">Apply for membership</button>
        //     </div>
        //     <div className="header-img sm:ml-20 md:ml-40 lg:ml-56 xl:ml-80">
        //         <img src={bot} alt="" className='w-60' />
        //     </div>
        // </div>

        // Option 2
        // <>
        //     <div className="hero min-h-screen dark:bg-gradient-to-r dark:from-blue-500 dark:to-black">
        //         <div className="hero-content flex-col lg:flex-row-reverse">
        //             <img src={bot} className='max-w-sm rounded-lg shadow-2xl' alt="" />
        //             <div>
        //                 <h1 className="mb-5 text-2xl font-bold">BAUST Mechatronics & Robotocs Club</h1>
        //                 <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        //                 <button className="btn btn-primary">Want Membership ?</button>
        //             </div>
        //         </div>
        //     </div>
        // </>
        // Option 3
        <>
            <div className="hero min-h-screen mb-5" style={{ backgroundImage: `url("https://www.plm.automation.siemens.com/media/global/ko/Artificial-Intelligence-AI-Automotive-AT_tcm72-91268.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-2xl font-bold">BAUST Mechatronics & Robotocs Club </h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Want membership?</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;