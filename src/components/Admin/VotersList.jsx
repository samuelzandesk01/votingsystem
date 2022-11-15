import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "../Layout/sidebar/Sidebar";
import Topbar from "../Layout/topbar/Topbar";
export default function VotersList({ Button, handleVoteStatus, voteStatus }) {
  const Yes = styled.button`
    padding: 5px 15px 5px 15px;
    border: 0px;
    border-radius: 5px;
    background: #00bb6d;
    margin: 0px 10px 0px 0px;
  `;

  const Edit = styled.div`
    padding: 2px 15px 6px 15px;
    border: 0px;
    border-radius: 5px;
    background: #f0f0f0;
    margin: 0px 10px;
  `;

  const No = styled.button`
    padding: 5px 15px 5px 15px;
    border: 0px;
    border-radius: 5px;
   
    margin: 0px 10px 0px 0px;
  `;

  const [no, setNo] = useState("#f0f0f0");
  const [yes, setYes] = useState("#ffdfda");

  const date = new Date();
  let year = date.getFullYear();
  

  return (
    <div>
    <Topbar />
    <div className="content">
      <div>
        <Sidebar />
      </div>
    <div
      className="container-fluid bg-light"
      style={{ borderBottom: "2px solid lightgray" }}
    >
      <div className="row my-4 mx-4 align-item-center pb-1">
        <div className="col-lg-6 ml-auto">
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
              <h5>Register PVC Holders</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid m-3 px-5 py-4 bg-white rounded shadow ">
        <div className=" ">
          <div className="row">
            <div className="col-lg-6 col-xl-6 col-sm-12 col-xs-12">
              <div className="d-flex mb-3">
                <div className="total counter">
                  <strong>
                    <p className="counter-title">Total</p>
                  </strong>
                  <div className="">
                    <p>190</p>
                  </div>
                </div>
                <div className="voted counter">
                  <strong>
                    <p className="counter-title">Voted</p>
                  </strong>
                  <div className="">
                    <p>1,190</p>
                  </div>
                </div>
              </div>
              
            </div>
            <div className="col-lg-6 mr-auto  " style={{textAlign: "right"}}>
            <Link to="/CreateVoters">
              <Button>Create Voter</Button>
            </Link>
              </div>
          </div>
        </div>
        <div className="tableWrapper">
          <table class="table">
            <thead className="tHead py-5">
              <tr>
                <th scope="col">S/NO</th>
                <th scope="col">Full Name</th>
                <th scope="col">Phone</th>
                <th scope="col">State</th>
                <th scope="col">LGA</th>
                <th scope="col">Ward</th>
                <th scope="col">Polling Unit</th>
                <th scope="col">Registered</th>
                <th scope="col">Voted</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Muhammed Mustpha</td>
                <th scope="col">08084393***</th>
                <td>Eti-Osa</td>
                <td>Ward</td>
                <td>Muhammed Mustpha</td>
                <td>Eti-Osa</td>
                <td>{date.getMonth() + "/" +  date.getDay() + "/" + year }</td>

                <td>
                  <div className="d-flex ">
                    <div>
                      <Yes
                        onClick={() => setNo(!no)}
                        style={{ background: no ? "#e1fff5"  : "#25f5af"   }}
                      >
                        Yes
                      </Yes>
                    </div>
                    <div>
                      <No
                       onClick={() => setYes(!yes)}
                       style={{ background: yes ? "#ffdfda" : "#ff4b2f" }}
                      
                      >No</No>
                    </div>

                    <div>
                    <Link to="/EditVoters">
                     <Edit onClick={handleVoteStatus}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-pencil-square"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path
                            fill-rule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                          />
                        </svg>
                      </Edit>
                     </Link>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Muhammed Mustpha</td>
                <th scope="col">08084393***</th>
                <td>Eti-Osa</td>
                <td>Ward</td>
                <td>Muhammed Mustpha</td>
                <td>Eti-Osa</td>
                <td>{date.getMonth() + "/" +  date.getDay() + "/" + year }</td>

                <td>
                  <div className="d-flex ">
                    <div>
                      <Yes
                        onClick={() => setNo(!no)}
                        style={{ background: no ? "#e1fff5"  : "#25f5af"   }}
                      >
                        Yes
                      </Yes>
                    </div>
                    <div>
                      <No
                       onClick={() => setYes(!yes)}
                       style={{ background: yes ? "#ffdfda" : "#ff4b2f" }}
                      
                      >No</No>
                    </div>

                    <div>
                     <Link to="/EditVoters">
                     <Edit onClick={handleVoteStatus}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-pencil-square"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path
                            fill-rule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                          />
                        </svg>
                      </Edit>
                     </Link>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Muhammed Mustpha</td>
                <th scope="col">08084393***</th>
                <td>Eti-Osa</td>
                <td>Ward</td>
                <td>Muhammed Mustpha</td>
                <td>Eti-Osa</td>
                <td>{date.getMonth() + "/" +  date.getDay() + "/" + year }</td>

                <td>
                  <div className="d-flex ">
                    <div>
                      <Yes
                        onClick={() => setNo(!no)}
                        style={{ background: no ? "#e1fff5"  : "#25f5af"   }}
                      >
                        Yes
                      </Yes>
                    </div>
                    <div>
                      <No
                       onClick={() => setYes(!yes)}
                       style={{ background: yes ? "#ffdfda" : "#ff4b2f" }}
                      
                      >No</No>
                    </div>

                    <div>
                    <Link to="/EditVoters">
                     <Edit onClick={handleVoteStatus}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-pencil-square"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path
                            fill-rule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                          />
                        </svg>
                      </Edit>
                     </Link>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Muhammed Mustpha</td>
                <th scope="col">08084393***</th>
                <td>Eti-Osa</td>
                <td>Ward</td>
                <td>Muhammed Mustpha</td>
                <td>Eti-Osa</td>
                <td>{date.getMonth() + "/" +  date.getDay() + "/" + year }</td>

                <td>
                  <div className="d-flex ">
                    <div>
                      <Yes
                        onClick={() => setNo(!no)}
                        style={{ background: no ? "#e1fff5"  : "#25f5af"   }}
                      >
                        Yes
                      </Yes>
                    </div>
                    <div>
                      <No
                       onClick={() => setYes(!yes)}
                       style={{ background: yes ? "#ffdfda" : "#ff4b2f" }}
                      
                      >No</No>
                    </div>

                    <div>
                    <Link to="/EditVoters">
                     <Edit onClick={handleVoteStatus}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-pencil-square"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path
                            fill-rule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                          />
                        </svg>
                      </Edit>
                     </Link>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Muhammed Mustpha</td>
                <th scope="col">08084393***</th>
                <td>Eti-Osa</td>
                <td>Ward</td>
                <td>Muhammed Mustpha</td>
                <td>Eti-Osa</td>
                <td>{date.getMonth() + "/" +  date.getDay() + "/" + year }</td>

                <td>
                  <div className="d-flex ">
                    <div>
                      <Yes
                        onClick={() => setNo(!no)}
                        style={{ background: no ? "#e1fff5"  : "#25f5af"   }}
                      >
                        Yes
                      </Yes>
                    </div>
                    <div>
                      <No
                       onClick={() => setYes(!yes)}
                       style={{ background: yes ? "#ffdfda" : "#ff4b2f" }}
                      
                      >No</No>
                    </div>

                    <div>
                    <Link to="/EditVoters">
                     <Edit onClick={handleVoteStatus}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-pencil-square"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path
                            fill-rule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                          />
                        </svg>
                      </Edit>
                     </Link>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Muhammed Mustpha</td>
                <th scope="col">08084393***</th>
                <td>Eti-Osa</td>
                <td>Ward</td>
                <td>Muhammed Mustpha</td>
                <td>Eti-Osa</td>
                <td>{date.getMonth() + "/" +  date.getDay() + "/" + year }</td>

                <td>
                  <div className="d-flex ">
                    <div>
                      <Yes
                        onClick={() => setNo(!no)}
                        style={{ background: no ? "#e1fff5"  : "#25f5af"   }}
                      >
                        Yes
                      </Yes>
                    </div>
                    <div>
                      <No
                       onClick={() => setYes(!yes)}
                       style={{ background: yes ? "#ffdfda" : "#ff4b2f" }}
                      
                      >No</No>
                    </div>

                    <div>
                    <Link to="/EditVoters">
                     <Edit onClick={handleVoteStatus}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-pencil-square"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path
                            fill-rule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                          />
                        </svg>
                      </Edit>
                     </Link>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Muhammed Mustpha</td>
                <th scope="col">08084393***</th>
                <td>Eti-Osa</td>
                <td>Ward</td>
                <td>Muhammed Mustpha</td>
                <td>Eti-Osa</td>
                <td>{date.getMonth() + "/" +  date.getDay() + "/" + year }</td>

                <td>
                  <div className="d-flex ">
                    <div>
                      <Yes
                        onClick={() => setNo(!no)}
                        style={{ background: no ? "#e1fff5"  : "#25f5af"   }}
                      >
                        Yes
                      </Yes>
                    </div>
                    <div>
                      <No
                       onClick={() => setYes(!yes)}
                       style={{ background: yes ? "#ffdfda" : "#ff4b2f" }}
                      
                      >No</No>
                    </div>

                    <div>
                    <Link to="/EditVoters">
                     <Edit onClick={handleVoteStatus}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-pencil-square"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path
                            fill-rule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                          />
                        </svg>
                      </Edit>
                     </Link>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Muhammed Mustpha</td>
                <th scope="col">08084393***</th>
                <td>Eti-Osa</td>
                <td>Ward</td>
                <td>Muhammed Mustpha</td>
                <td>Eti-Osa</td>
                <td>{date.getMonth() + "/" +  date.getDay() + "/" + year }</td>

                <td>
                  <div className="d-flex ">
                    <div>
                      <Yes
                        onClick={() => setNo(!no)}
                        style={{ background: no ? "#e1fff5"  : "#25f5af"   }}
                      >
                        Yes
                      </Yes>
                    </div>
                    <div>
                      <No
                       onClick={() => setYes(!yes)}
                       style={{ background: yes ? "#ffdfda" : "#ff4b2f" }}
                      
                      >No</No>
                    </div>

                    <div>
                    <Link to="/EditVoters">
                     <Edit onClick={handleVoteStatus}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-pencil-square"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path
                            fill-rule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                          />
                        </svg>
                      </Edit>
                     </Link>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Muhammed Mustpha</td>
                <th scope="col">08084393***</th>
                <td>Eti-Osa</td>
                <td>Ward</td>
                <td>Muhammed Mustpha</td>
                <td>Eti-Osa</td>
                <td>{date.getMonth() + "/" +  date.getDay() + "/" + year }</td>

                <td>
                  <div className="d-flex ">
                    <div>
                      <Yes
                        onClick={() => setNo(!no)}
                        style={{ background: no ? "#e1fff5"  : "#25f5af"   }}
                      >
                        Yes
                      </Yes>
                    </div>
                    <div>
                      <No
                       onClick={() => setYes(!yes)}
                       style={{ background: yes ? "#ffdfda" : "#ff4b2f" }}
                      
                      >No</No>
                    </div>

                    <div>
                    <Link to="/EditVoters">
                     <Edit onClick={handleVoteStatus}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-pencil-square"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path
                            fill-rule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                          />
                        </svg>
                      </Edit>
                     </Link>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Muhammed Mustpha</td>
                <th scope="col">08084393***</th>
                <td>Eti-Osa</td>
                <td>Ward</td>
                <td>Muhammed Mustpha</td>
                <td>Eti-Osa</td>
                <td>{date.getMonth() + "/" +  date.getDay() + "/" + year }</td>

                <td>
                  <div className="d-flex ">
                    <div>
                      <Yes
                        onClick={() => setNo(!no)}
                        style={{ background: no ? "#e1fff5"  : "#25f5af"   }}
                      >
                        Yes
                      </Yes>
                    </div>
                    <div>
                      <No
                       onClick={() => setYes(!yes)}
                       style={{ background: yes ? "#ffdfda" : "#ff4b2f" }}
                      
                      >No</No>
                    </div>

                    <div>
                    <Link to="/EditVoters">
                     <Edit onClick={handleVoteStatus}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-pencil-square"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path
                            fill-rule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                          />
                        </svg>
                      </Edit>
                     </Link>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Muhammed Mustpha</td>
                <th scope="col">08084393***</th>
                <td>Eti-Osa</td>
                <td>Ward</td>
                <td>Muhammed Mustpha</td>
                <td>Eti-Osa</td>
                <td>{date.getMonth() + "/" +  date.getDay() + "/" + year }</td>

                <td>
                  <div className="d-flex ">
                    <div>
                      <Yes
                        onClick={() => setNo(!no)}
                        style={{ background: no ? "#e1fff5"  : "#25f5af"   }}
                      >
                        Yes
                      </Yes>
                    </div>
                    <div>
                      <No
                       onClick={() => setYes(!yes)}
                       style={{ background: yes ? "#ffdfda" : "#ff4b2f" }}
                      
                      >No</No>
                    </div>

                    <div>
                    <Link to="/EditVoters">
                     <Edit onClick={handleVoteStatus}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-pencil-square"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path
                            fill-rule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                          />
                        </svg>
                      </Edit>
                     </Link>
                    </div>
                  </div>
                </td>
              </tr>     
              <tr>
                <th scope="row">1</th>
                <td>Muhammed Mustpha</td>
                <th scope="col">08084393***</th>
                <td>Eti-Osa</td>
                <td>Ward</td>
                <td>Muhammed Mustpha</td>
                <td>Eti-Osa</td>
                <td>{date.getMonth() + "/" +  date.getDay() + "/" + year }</td>

                <td>
                  <div className="d-flex ">
                    <div>
                      <Yes
                        onClick={() => setNo(!no)}
                        style={{ background: no ? "#e1fff5"  : "#25f5af"   }}
                      >
                        Yes
                      </Yes>
                    </div>
                    <div>
                      <No
                       onClick={() => setYes(!yes)}
                       style={{ background: yes ? "#ffdfda" : "#ff4b2f" }}
                      
                      >No</No>
                    </div>

                    <div>
                      <Edit onClick={handleVoteStatus}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-pencil-square"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path
                            fill-rule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                          />
                        </svg>
                      </Edit>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <nav className="text-center pt-3">
            <ul class="pagination d-flex justify-content-center">
              <li class="page-item disabled">
                <Link class="page-link">Previous</Link>
              </li>
              <li class="page-item active">
                <Link class="page-link" to="#">
                  1
                </Link>
              </li>
              <li class="page-item " aria-current="page">
                <Link class="page-link" to="#">
                  2
                </Link>
              </li>
              <li class="page-item">
                <Link class="page-link" to="#">
                  3
                </Link>
              </li>
              <li class="page-item">
                <Link class="page-link" to="#">
                  Next
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}
