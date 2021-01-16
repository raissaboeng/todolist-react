import styled from "styled-components";

export const FormNewTask = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;


 input{
    padding: 1.15rem;
    height: 30px;
    width: 50%;
    min-width: 40%;
    max-width: 60%;
    font-size: 1rem;
    border-radius: 25px;
    border:none;
    outline:none;
}
    
   .addTask{
       display: flex;
        align-items: center;
        justify-content: center;
        height: 65px;
        width: 70px;
        overflow: hidden;
   }
  
  button{
    margin: 10px;
    width: 80%;
    height: 80%;
    color: white;
    background-color: #f151ff;
    border-radius: 50%;
    font-size: 2.5rem;
    -webkit-transition: -webkit-transform .5s ease;
    transition: transform .5s ease;

    &:hover{        
        opacity: 0.9;
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
  }
`;
  
