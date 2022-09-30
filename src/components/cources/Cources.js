import React from 'react';

const Cources = () => {
    return (
        <>
            <p className='text-xl border-2 border-yellow-400 border-b-4 border-white ml-8  mb-4 w-24 text-center text-white'>Cources</p>
            <div className='grid lg:grid-cols-4 gap-4 align-items-center'>
                <div className="w-5/6 card card-side bg-base-100 shadow-xl">
                    <figure><img className='w-full h-full' src="https://placeimg.com/200/280/arch" alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">New movie is released!</h2>
                        <p>Click the button to watch on Jetflix app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary normal-case">Enroll</button>
                        </div>
                    </div>
                </div>

                <div className="w-5/6 card card-side bg-base-100 shadow-xl">
                    <figure><img className='w-full h-full' src="https://placeimg.com/200/280/arch" alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">New movie is released!</h2>
                        <p>Click the button to watch on Jetflix app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary normal-case">Enroll</button>
                        </div>
                    </div>
                </div>

                <div className="w-5/6 card card-side bg-base-100 shadow-xl">
                    <figure><img className='w-full h-full' src="https://placeimg.com/200/280/arch" alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">New movie is released!</h2>
                        <p>Click the button to watch on Jetflix app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary normal-case">Enroll</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Cources;