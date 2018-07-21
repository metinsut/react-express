import React from "react";
import styled, { keyframes } from "styled-components";
import ReactDOM from "react-dom";

const colorAni = keyframes`
  0 {
    color: white;
  }

  50% {
    color: gray;
  }
  100% {
    color: white;
  }
`;

let Loading = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100vw;
   height: 100vh;
   background-color: rgba(0, 0, 0, 0.5);
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 50px;
   color: white;
   animation: ${colorAni} 4s linear infinite;
`;

const Loader = status => {
   if (status === true) {
      return ReactDOM.render(
         <Loading>Loading</Loading>,
         document.getElementById("loader")
      );
   } else {
      return ReactDOM.render(<div />, document.getElementById("loader"));
   }
};

ReactDOM.render(<Loader />, document.getElementById("loader"));

export default Loader;
