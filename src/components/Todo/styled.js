import styled from "styled-components";

export const Task = styled.li`
    margin: 0.5rem;
    display: flex;
    padding: 0.8rem;
    width: 60%;
    border-radius: 15px;
    background-color: #041955;
    align-items: center;

input [type=checkbox] {
    margin-right: 0.5rem;
}

input[type=checkbox]:checked ~ label {
    text-decoration: line-through;
    color: gray;
}

label{
    width: 90%;
    color: white;
    padding: 0.5rem;
    font-size: 1.2rem;
    background: none;
    border: none;
    text-align:start;
}

button {
    background: none;
    color: white;
    margin-left: 0.7rem;
}

button:hover{
    opacity: 0.8;
    animation: bounce 1s;
}

img{
    max-width: 1.5rem;
    max-height: 1.5rem;
}

@keyframes bounce{
    0%{
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }

    50%{
        -webkit-transform: translateY(-10px);
        transform: translateY(-10px);
    }
}



`;