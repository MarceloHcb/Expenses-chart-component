import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import "./index.css";

export const Expenses = () => {
  const [display, setDisplay] = useState("none");  
  function handleDisplay(){
    if(display === "flex"){
      setDisplay("none")
    }
    if(display === "none"){
      setDisplay("flex")
    }
  }

  const fields = [
    {
      value: "40px",
      text: "mon",
      amount: "$17.45",
      display:` ${display}`
    },
    {
      value: "70px",
      text: "tue",
      amount: "$34.91",
      display:` ${display}`
    },
    {
      value: "120px",
      text: "wed",
      amount: "$52.36",
      display:` ${display}`
    },
    {
      value: "65px",
      text: "thu",
      amount: "$31.07",
      display:` ${display}`
    },
    {
      value: "50px",
      text: "fri",
      amount: "$23.39",
      display:` ${display}`
    },
    {
      value: "90px",
      text: "sat",
      amount: "$43.28",
      display:` ${display}`
    },
    {
      value: "60px",
      text: "sun",
      amount: "$25.48",
      display:` ${display}`
    },
  ];

  return (
    <>
      <main>
        <div className="top">
          <div className="top-left">
            <p>My balance</p>
            <h2>$921.48</h2>
          </div>

          <div className="top-right">
            <div className="circle-black"></div>
          </div>
        </div>

        <div className="mid">
          <h2> Spending - Last 7 days</h2>

          <div className="fields">
            {fields.map((field, index) => {
              return (
                <>
                  <div className="boxes" key={index}>
                    <Amount display={field.display}  key={index}>
                      <h5>{field.amount} </h5>
                    </Amount>
                    <Div key={index} height={field.value} color={field.color}  onClick={handleDisplay}>
                    <P >{field.text}</P>
                    </Div>
                   
                  </div>
                </>
              );
            })}
          </div>
          <HR />
          <div className="bottom">
            <div>
              <p>Total this month</p>
              <h1>$478.33</h1>
            </div>

            <div>
              <span className="porcent">+2.4%</span>
              <p>from last month</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
const Amount = styled("div")`
  display: ${(props)=> props.display};
  justify-content: center;
  align-items: center;
  color: hsl(33, 100%, 98%);
  background-color: hsl(25, 47%, 15%);
  height: 30px;
  width: 3rem;
  border-radius: 5px;
  margin: 40px 0;
  position:absolute;  
  cursor: pointer;
`;
const fill = keyframes`
0% {
height:0px;

}
100%{
 height: ${(props) => props.height}; 
}
`
const Div = styled("div")`
  display:flex;
  bottom:28%;
  position:absolute;
  margin:50px;
  background-color: hsl(10, 79%, 65%);
  width: 2.5rem;
  border-radius: 5px;
  cursor: pointer;
  height: ${(props) => props.height};
  text-decoration: line-through;
  transition: 0.7s;
  transform: scale(1.05);
  animation: ${fill} 1s 0.1s forwards ease-in-out;  

  &:hover {
    background-color: hsl(186, 34%, 60%);
  }
`;
const P = styled("p")`
position: absolute;
bottom: -30px;
`
const HR = styled("hr")`
  background-color: hsl(28, 10%, 53%);
  opacity: 0.2;
  margin-top: 110px;
  margin-bottom:20px;

`;
