import React from 'react';
import Icon from 'react-icons-kit';
import {locationArrow} from 'react-icons-kit/fa/locationArrow'
const Contact = () => {
    return (
        <>
           <p className='text-xl border-2 border-yellow-400 border-b-4 border-white ml-8  mb-4 w-28 text-center text-white'>Contact Us</p>
        <div className='w-90 pb-10 ml-4 xl:ml-96'>
            <div className='w-4/6 ml-16 lg:w-3/6'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Your Email</span>
                    </label>
                    <label className="input-group input-group-vertical">
                        <span className='bg-slate-300'>Email</span>
                        <input type="text" placeholder="info@site.com" className="bg-white input input-bordered" />
                    </label>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Full Name</span>
                    </label>
                    <label className="input-group input-group-vertical">
                        <span className='bg-slate-300'>Name</span>
                        <input type="text" placeholder="Full Name" className="input input-bordered bg-white" />
                    </label>
                </div>

                <div className="form-control pb-2">
                    <label className="label">
                        <span className="label-text text-white">Your Messege</span>
                    </label>
                    <label className="input-group input-group-vertical">
                        <span className='bg-slate-300'>Messege</span>
                        <textarea className="bg-white textarea textarea-bordered h-24" placeholder="Type here.."></textarea>
                    </label>
                </div>
                <div className='flex'>
                <button className="w-full btn btn-accent"><Icon icon={locationArrow} size="30" className="text-text-white"></Icon></button>
                </div>

            </div>

        </div>
        </>
    );
};

export default Contact;