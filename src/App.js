import "./App.css";

import List from "./components/Admin/CoordList";
import CRCoord from "./components/Admin/CreateCoord";
import Signin from "./components/Auth/Signin";
import Signup from "./components/Auth/Signup";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// import useState from "react";
import naijaStateLocalGovernment from "naija-state-local-government";

import "../src/main.scss";
import styled from "styled-components";
import { useState } from "react";
import CreateVoters from "./components/Admin/CreateVoters";
import EditVoters from "./components/Admin/EditVoters";
import VotersList from "./components/Admin/VotersList";
import Admin from "./components/Auth/Admin";

function App() {
  // const [state, setSate] = useState("");
  const [voteStatus, setVoteStatus] = useState("no");
  const [voters, setVoters] = useState();
  const [frontPvc, setFrontPvc] = useState();
  const [backPvc, setBackPvc] = useState();
  const [profPic, setProfpic] = useState();
  const [coordinator, setCordinators] = useState([]);

  const state = naijaStateLocalGovernment.states();
  const [lgas, setLgas] = useState(state);
  const handleStateChange = (e) => {
    setLgas(naijaStateLocalGovernment.lgas(e.target.value).lgas);

    console.log(lgas);
  };

  const handleVoteStatus = () => {
    setVoteStatus(!voteStatus);
  };

  // console.log(lgas);

  const handleFrontPvcChange = (e) => {
    setFrontPvc(e.target.files);
    setFrontPvc(URL.createObjectURL(e.target.files[0]));
  };
  const handleBackPvcChange = (e) => {
    setBackPvc(e.target.files);
    setBackPvc(URL.createObjectURL(e.target.files[0]));
  };
  const handleProfileChange = (e) => {
    setProfpic(e.target.files);
    setProfpic(URL.createObjectURL(e.target.files[0]));
  };

  const handleVotersChange = (e) => {
    setVoters(e.target.files);
    setVoters(URL.createObjectURL(e.target.files[0]));
  };

  const RegInput = styled.input`
    padding: 8px 10px 8px 15px;
    border: 1.4px solid lightgray;
    border-radius: 5px;
    width: 100%;
  `;
  const Select = styled.select`
    padding: 8px 15px 8px 15px;
    border: 1.4px solid lightgray;
    border-radius: 5px;
    width: 100%;
  `;

  const Button = styled.button`
    padding: 7px 35px;
    background: #006e3d;
    border: 2px solid #006e3d;
    border-radius: 5px;
    color: white;
  `;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Admin  Button={Button} RegInput={RegInput} />} />
        <Route path="/Admin" element={<Admin  Button={Button} RegInput={RegInput} />} />

        <Route path="/Signin" element={<Signin Button={Button} RegInput={RegInput}/>} />
        <Route path="/Signup" element={<Signup  Button={Button} RegInput={RegInput}/>} />
        <Route
          path="/Dashboard"
          element={
            <List
              Button={Button}
              Select={Select}
              state={state}
              lgas={lgas}
              handleStateChange={handleStateChange}
              RegInput={RegInput}
            />
          }
        />

        <Route
          path="/CreateCoord"
          element={
            <CRCoord
              coordinator={coordinator}
              setCordinators={setCordinators}
              state={state}
              lgas={lgas}
              handleStateChange={handleStateChange}
              frontPvc={frontPvc}
              handleFrontPvcChange={handleFrontPvcChange}
              backPvc={backPvc}
              handleBackPvcChange={handleBackPvcChange}
              Select={Select}
              handleProfileChange={handleProfileChange}
              profPic={profPic}
              Button={Button}
              RegInput={RegInput}
            />
          }
        />

        <Route
          path="/CreateVoters"
          element={
            <CreateVoters
              state={state}
              lgas={lgas}
              handleStateChange={handleStateChange}
              frontPvc={frontPvc}
              handleFrontPvcChange={handleFrontPvcChange}
              backPvc={backPvc}
              handleBackPvcChange={handleBackPvcChange}
              Select={Select}
              handleProfileChange={handleProfileChange}
              profPic={profPic}
              Button={Button}
              RegInput={RegInput}
            />
          }
        />
        <Route
          path="/VotersList"
          element={
            <VotersList
              handleVoteStatus={handleVoteStatus}
              Button={Button}
              voteStatus={voteStatus}
            />
          }
        />

<Route
            path="/EditVoters"
            element={
              <EditVoters
                state={state}
                lgas={lgas}
                handleVotersChange={handleVotersChange}
                Select={Select}
                voters={voters}
                Button={Button}
                RegInput={RegInput}
              />
            }
          />
      </Routes>
    </BrowserRouter>
    // <BrowserRouter>
    //
    //     </div>
    //     <Routes>
    //       <Route
    //         exact
    //         path="/"
    //         element={
    //

    //           />
    //         }
    //       />
    //       <Route
    //         path="createcoord"
    //         element={
    //           <CRCoord
    //           coordinator={coordinator}
    //           setCordinators={setCordinators}
    //             state={state}
    //             lgas={lgas}
    //             handleStateChange={handleStateChange}
    //             frontPvc={frontPvc}
    //             handleFrontPvcChange={handleFrontPvcChange}
    //             backPvc={backPvc}
    //             handleBackPvcChange={handleBackPvcChange}
    //             Select={Select}
    //             handleProfileChange={handleProfileChange}
    //             profPic={profPic}
    //             Button={Button}
    //             RegInput={RegInput}
    //           />
    //         }
    //       />
    //       <Route
    //         path="/CreateVoters"
    //         element={
    //           <CreateVoters
    //             state={state}
    //             lgas={lgas}
    //             handleStateChange={handleStateChange}
    //             frontPvc={frontPvc}
    //             handleFrontPvcChange={handleFrontPvcChange}
    //             backPvc={backPvc}
    //             handleBackPvcChange={handleBackPvcChange}
    //             Select={Select}
    //             handleProfileChange={handleProfileChange}
    //             profPic={profPic}
    //             Button={Button}
    //             RegInput={RegInput}
    //           />
    //         }
    //       />

    //

    //       <Route
    //         path="/VotersList"
    //         element={
    //           <VotersList
    //             handleVoteStatus={handleVoteStatus}
    //             Button={Button}
    //             voteStatus={voteStatus}
    //           />
    //         }
    //       />
    //     </Routes>
    //   </div>
    // </BrowserRouter>
  );
}

export default App;
