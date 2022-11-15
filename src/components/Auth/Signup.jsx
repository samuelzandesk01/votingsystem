import React from "react";
import { Link } from "react-router-dom";

// import Logo from "../../assets/img/logo.png";

export default function Signup({Button, RegInput}) {
 
  return (
    <div>
      <div className="reg-container">
        <div className="w-100 my-4 mx-5 px-5 ">
          <div>
            <div>{/* <img src={Logo} alt="Logo" width={60} /> */}</div>
            <h3>Create account as an  <span style={{ color: "#e30000" }}>Admin</span></h3>
          </div>
          <form action="" method="post" className="">
            <div className="my-3">
              <label htmlFor="" className="py-2">
                Enter Name
              </label>
              <br />
              <RegInput type="text" id="name" placeholder="Mohammed Adamu" />
            </div>
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
                placeholder="Mohammed Adamu"
              />
            </div>
            <div className="my-3">
              <label htmlFor="" className="py-2">
                Repeat Password
              </label>
              <br />
              <RegInput
                type="password"
                id="passwordRepeat"
                placeholder="Mohammed Adamu"
              />
            </div>
            <div className="mt-4">
              <div
                className="d-flex "
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div className="ml-auto">
                  <Button type="submit" id="signup">
                    {" "}
                    Sign Up
                  </Button>
                </div>
                <div className="mr-auto">
                  <p>
                    Do you've an account?{" "}
                    <Link to="/" style={{ color: "" }}>
                      Sign In
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className=" w-100">
          <div className="">
            <div className="regImg anime"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
