import { useEffect, useState } from "react";
import styled from "styled-components";
import "./index.css";

export const Expenses = () => {

const [display, setDisplay] = useState("none")


function handleDisplay(){
  if(display==="none"){
    setDisplay("flex")
   }
 if(display==="flex"){
  setDisplay("none")
 }

}
  const fields = [
    {
      valor: "40px",
      text: "mon",
      color: "hsl(10, 79%, 65%)",
      amount: "$17.45"
    },
    {
      valor: "70px",
      text: "tue",
      color: "hsl(10, 79%, 65%)",
      amount:"$34.91"
    },
    {
      valor: "120px",
      text: "wed",
      color: "hsl(186, 34%, 60%)",
      amount: "$52.36"
    },  
    {
      valor: "65px",
      text: "thu",
      color: "hsl(10, 79%, 65%)",
      amount: "$31.07"
    },
    {
      valor: "50px",
      text: "fri",
      color: "hsl(10, 79%, 65%)",
      amount: "$23.39"
    },
    {
      valor: "90px",
      text: "sat",
      color: "hsl(10, 79%, 65%)",
      amount: "$43.28"
    },
    {
      valor: "60px",
      text: "sun",
      color: "hsl(10, 79%, 65%)",
      amount: "$25.48"
    },
  ];

  return (   <>
 
    <main>      
        <div  className="top">
          <div className="top-left">
            <p>My balance</p>
            <h2>$921.48</h2>
          </div>

          <div className="top-right">
            <div className="circle-black">

            </div>
          </div>
        </div>

        <div className="mid">
          <h2> Spending - Last 7 days</h2>

          <div className="fields">
            
            {fields.map((field,index) => {
            
              return (
                <>                  
                 <div className="boxes" onMouseOver={handleDisplay}  key={index}>
                  <Amount display={display}  >
                 <h5>{field.amount} </h5> 
                  </Amount>
                   <Div key={index} height={field.valor}  color={field.color}> </Div>
                 <p>{field.text}</p>    
                   
                    </div>
                </>
              )              
             
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
}
const Amount = styled("div")`
display:${(props)=>props.display};
justify-content:center;
align-items:center;
color:hsl(33, 100%, 98%);
background-color:hsl(25, 47%, 15%);
height:30px;
width:3rem;  
border-radius:5px;
margin-bottom:5px;
cursor: pointer;
`
const Div = styled("div")` 
  background-color: ${(props)=>props.color};
  height: ${(props)=>props.height};
  width:2.5rem;  
  border-radius:5px;
  cursor: pointer; 
  transition:ease-in-out all 5s;
`
const HR = styled("hr")`
  background-color:hsl(28, 10%, 53%);
  opacity: 0.2;
  margin:20px 0;
`
