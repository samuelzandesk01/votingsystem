import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Layout/sidebar/Sidebar";
import Topbar from "../Layout/topbar/Topbar";


// import styled from "styled-components";

export default function CreateCoord({
  handleBackPvcChange,
  handleFrontPvcChange,
  profPic,
  handleStateChange,
  handleProfileChange,
  frontPvc,
  backPvc,
  RegInput,
  Button,
  lgas,
  state,
  Select,
  coordinator, 
  setCordinators
}) {
  return (
    <div>
    <Topbar />
    <div className="content">
      <div>
        <Sidebar />
      </div>
   
    <div className="container-fluid  bg-light">
      <div className="row my-4  mx-4 align-item-center pb-1">
        <div className="col-lg-6 ml-auto ">
        <Link to="/">
          <div className="d-flex">
          
          <div style={{ marginRight: "20px" }}>
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
            </div>
            
            <div>
              
              {" "}
              <h5>Create Coordinate</h5>
            </div>
          </div>
          </Link>
        </div>
      </div>
      <form className="row m-3 px-5 py-5 bg-white rounded shadow">
        <div className="col-lg-5 " style={{ marginRight: "60px" }}>
          <div>
            <label className="py-2">Full Name</label>
            <RegInput type="text" id="name" placeholder="Thomas John" />
          </div>
          <div>
            <label className="py-2">Phone Number</label>
            <RegInput type="number" id="name" placeholder="090-4894-8394" />
          </div>

          <div>
            <label className="py-2">State</label>
            <Select onChange={handleStateChange}>
              {state.map((states) => (
                <option>{states}</option>
              ))}
            </Select>
          </div>
          <div>
            <label className="py-2">LGA</label>
            <Select>
              {lgas.map(lga => <option>{lga}</option>)}

              </Select>
          </div>
          <div>
            <label className="py-2">Ward</label>
            <RegInput type="text" id="ward" placeholder="Kebbi" />
          </div>
          <div>
            <label className="py-2">Polling Unit</label>
            <RegInput type="text" id="polling" placeholder="Kebbi Market" />
          </div>
        </div>
        <div className="col-lg-6">
          <div>
            <label className="py-2">Bank</label>
            <RegInput type="text" id="bank" placeholder="Kuda Microfinance Bank" />
          </div>
          <div>
            <label className="py-2">Bank Number</label>
            <RegInput type="number" id="bankNumber" placeholder="2700475784" />
          </div>
          <div className="row py-4">
            <div className="col-lg-4 col-xl-4 col-sm-4">
              <div>
                <strong>
                  {" "}
                  <p className="text-secondary ">Coordinator image</p>
                </strong>
                <div className="my-2">Profile Picture</div>
              </div>
              <div className="fileBorder">
                <input
                  type="file"
                  name=""
                  onChange={handleProfileChange}
                  id=""
                />
                <img src={profPic} alt="" className="pcv" />
              </div>
            </div>
            <div className="col-lg-4 col-xl-4 col-sm-4">
              <div>
                <strong>
                  {" "}
                  <p className="text-secondary ">Coordinator image</p>
                </strong>
                <div className="my-2">Voter Card (Front)</div>
              </div>
              <div className="fileBorder">
                <input
                  type="file"
                  name=""
                  onChange={handleFrontPvcChange}
                  id=""
                />
                <img src={frontPvc} alt="" className="pcv" />
              </div>
            </div>
            <div className="col-lg-4 col-xl-4 col-sm-4">
              <div>
                <strong>
                  {" "}
                  <p className="text-secondary ">Coordinator image</p>
                </strong>
                <div className="my-2">Voter Card (Back)</div>

                <div className="fileBorder">
                  <input
                    type="file"
                    name=""
                    onChange={handleBackPvcChange}
                    id=""
                  />
                  <img src={backPvc} alt="" className="pcv" />
                </div>
              </div>
            </div>
            <div className="col-lg-12 mt-4  ">
              <div>
                <Button type="submit">Create</Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    </div>
    </div>
  );
}
