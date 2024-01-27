
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../Component/Firebase/Context';

const Register = () => {

    const { createuser } =useContext(Authcontext)

    const handlebtn = e => {
        e.preventDefault()
        const name =e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        createuser(email,password)
        .then(res => {
            console.log(res.user)
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
                <div className="card flex-shrink-0 w-[600px] p-10 shadow-2xl bg-black">
                    <form onSubmit={handlebtn}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered"  />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered"  />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-secondary">Login</button>
                        </div>
                    </form>
                    <p className='text-center text-white'>Already have an account  <Link className='text-green-700 font-bold' to='/login'>Login</Link></p>
              
                </div>
            </div>
        </div>
    );
};

export default Register;