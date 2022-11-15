import React from "react";
import styled from "styled-components";
import Logo from "../../../assets/img/logo.png";
import ProfilePhoto from "../../../assets/img/3.jpg";

export default function topbar() {
  let AdminName = "John Doe";

  const Topbar = styled.div`
    width: 100%;
    padding: 10px 15px;
    background: #006e3d;
    // box-shadow: 0px 7px 20px 2px #e7e7e7;
    
    `;

  const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

  const SearchBtn = styled.button`
    background: transparent;
    outliine: none;
    border: 0px;
    margin-right: 10px;
  `;

  const SearchBar = styled.input`
    padding: 10px 35px 5px 6px;
    background: transparent;
    border: 0px;
    color: white;
    border-bottom: 1.3px solid white;
  `;
  const SearchForm = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;
  return (
    <div>
      <div>
        <Topbar>
          <div className="container-fluid">
            <Wrapper>
              <div className="mr-auto">
                <img
                  src={Logo}
                  alt="People Democratic Party Logo"
                  className="my-2"
                  width={40}
                />
              </div>
              <div>
                <div className="d-flex align-items-center spaceBtw ml-auto">
                  <SearchForm action="" className="mx-2">
                    <div>
                      <SearchBtn className="mx-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="white"
                          class="bi bi-search"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                      </SearchBtn>
                    </div>
                    <div className="pb-3">
                      <SearchBar
                        type="search"
                        class="form-control "
                        id="inputEmail3"
                      />
                    </div>
                  </SearchForm>
                  <div className="mx-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="white"
                      class="bi bi-bell"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                    </svg>
                  </div>
                  <div className="mx-3">
                    <div className="d-flex " style={{alignItems: "center"}}>
                      <div>
                        <p className="text-white my-3">{AdminName}</p>
                      </div>
                      <div>
                        <div className="mx-3">
                          <img src={ProfilePhoto} alt="Adminphoto" className="rounded" width={50}/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Wrapper>
          </div>
        </Topbar>
      </div>
    </div>
  );
}
