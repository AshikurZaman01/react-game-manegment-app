import React from 'react';

const ErrorPage = () => {
    return (
        <div className='text-center flex items-center h-screen justify-center '>
            <div>
                <div><h1 className='text-5xl font-bold text-orange-400 mb-4'>404</h1></div>
                <div><h2 className='text-3xl font-bold text-orange-700 mb-2'>This Page Not Working</h2></div>
                <div className='text-2xl font-bold text-orange-800'><h3>Please Check Your URL</h3>  
                    <h4>If You Are Sure About The URL, Please Contact To Admin</h4>
                </div>
                
            </div>
            
        </div>
    );
};

export default ErrorPage;