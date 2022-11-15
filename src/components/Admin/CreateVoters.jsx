import React from "react";
import { Link } from "react-router-dom";

import Sidebar from "../Layout/sidebar/Sidebar";
import Topbar from "../Layout/topbar/Topbar";

export default function CreateVoters({
  handleBackPvcChange,
  handleFrontPvcChange,
  profPic,
  handleStateChange,
  handleProfileChange,
  frontPvc,
  backPvc,
  RegInput,
  Button,
  lga,
  state,
  Select,
}) {
  return (
    <div>
    <Topbar />
    <div className="content">
      <div>
        <Sidebar />
      </div>
    <div className="container-fluid bg-light">
      <div className="row my-4 mx-4 align-item-center pb-1">
        <div className="col-lg-6 ml-auto ">
         
         <div className="d-flex">
            <div style={{ marginRight: "20px" }}>
            <Link to="/VotersList">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-chevron-left"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                />
              </svg>
              </Link>
            </div>
            <div>
              {" "}
              <h5>Create Voters</h5>
            </div>
          </div>
        
        </div>
      </div>
      <form className="row m-3 px-5 py-4 bg-white rounded shadow">
        <div className="col-lg-5 " style={{ marginRight: "60px" }}>
          <div>
            <label className="py-2">Full Name</label>
            <RegInput type="text" id="name" />
          </div>
          <div>
            <label className="py-2">Phone Number</label>
            <RegInput type="number" id="name" />
          </div>

          <div>
            <label className="py-2">LGA</label>
            {/* <select>{lga.map((LGAS) => <option>{LGAS}</option>)}</select> */}
            <Select>
              {/* {lga.map((LGAS) => <option>{LGAS}</option>)} */}
            </Select>
          </div>
          <div>
            <label className="py-2">Ward</label>
            <RegInput type="text" id="ward" />
          </div>
          <div>
            <label className="py-2">Polling Unit</label>
            <RegInput type="text" id="polling" />
          </div>
        </div>
        <div className="col-lg-6">
          <div>
            <strong>
              {" "}
              <p className="text-secondary ">Voters image</p>
              <div className="fileBorder">
                <input
                  type="file"
                  name=""
                  onChange={handleBackPvcChange}
                  id=""
                  className="votersCard"
                />
                <img src={backPvc} alt="" className="pcv" />
                
              </div>
            </strong>
          </div>
        </div>
        <div className="col-lg-12 my-4  ">
              <div>
                <Button type="submit">Create</Button>
              </div>
            </div>
      </form>
    </div>
    </div>
    </div>
  );
}
