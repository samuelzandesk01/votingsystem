import React from "react";
import { Link } from "react-router-dom";

// import Logo from "../../assets/img/logo.png";

export default function Signup({Button, RegInput}) {
 
  return (
    <div>
      <div className="reg-container">
        <div className=" w-100">
          <div className="">
            <div className="SignImg anime"></div>
          </div>
        </div>
        <div className="w-100 my-4 mx-5 px-5 ">
          <div>
            <div>{/* <img src={Logo} alt="Logo" width={60} /> */}</div>
            <h3>
              Login account as an{" "}
              <span style={{ color: "#e30000" }}>Coordinator</span>{" "}
            </h3>
          </div>
          <form action="" method="post" className="">
            <div className="my-3">
              <label htmlFor="" className="py-2">
                Email Address
              </label>
              <br />
              <RegInput
                type="email"
                id="email"
                placeholder="mohammedadamu@naijavote.org"
              />
            </div>
            <div className="my-3">
              <label htmlFor="" className="py-2">
                Password
              </label>
              <br />
              <RegInput
                type="password"
                id="password"
                placeholder="*********"
              />
            </div>

            <div className="d-flex " style={{justifyContent:"space-between", alignItems: "center"}}>
              <div className="ml-auto">
                <Link to="/Dashboard">
                <Button type="submit" id="signup">
                  {" "}
                  Sign In
                </Button>
                </Link>
              </div>
              <div className="mr-auto">
                <p>i don't have an account? <Link to="/Signup" style={{color: ""}}>Sign Up</Link></p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
