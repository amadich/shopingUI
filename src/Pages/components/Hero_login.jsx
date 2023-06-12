import Axios from "axios";
import { useState } from "react";

function Hero_login() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const SERVERURL = import.meta.env.VITE_URLSERVER;
  
  const handsubmit = (e) => {
   e.preventDefault();
  }
    

    const signup = (e) => {
      e.preventDefault();
      Axios.post(`${SERVERURL}/rej`, { email: email, pwd : pwd })
        .then((response) => {
          // Handle successful signup
          console.log(response.data);
        })
        .catch((error) => {
          // Handle error during signup
          console.error(error);
        });
    };

   

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Start now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
              a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm  shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handsubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    onChange={(e) => {
                      setPwd(e.target.value);
                    }}
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary" name="signin">
                    Login
                  </button>{" "}
                  <br />
                  <button className="btn btn-primary" name="signup" onClick={signup}>
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero_login;
