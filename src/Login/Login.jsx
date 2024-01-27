import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Authcontext } from '../Component/Firebase/Context';

const Login = () => {
   
    const { signemaill, googleprob } =useContext(Authcontext);
    const location =useLocation()
    const navigation =useNavigate();
    console.log('location in login account',location)
    const handleclick = e =>{
        e.preventDefault()
        const email =e.target.email.value;
        const password =e.target.password.value;
        signemaill(email,password)
        .then(res => {
            console.log(res.user)
            navigation(location.state ? location.state : '/donation-details')
        })
        .catch(error =>{
            console.log(error)
        })
    }

    const handleclicks=() =>{

googleprob()
.then(result =>{
    console.log(result)
})
.catch(error =>{
    console.log(error)
})


    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-[600px] p-10 shadow-2xl bg-blue-100">
                    <form onSubmit={handleclick}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-blue-400">Login</button>
                        </div>
                    </form>
                    <p className='text-center'>Please You are new usesr <Link className='text-green-700 font-bold' to='/register'>Register</Link></p>
                <button onClick={handleclicks} className='btn btn-error mt-5'>Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;