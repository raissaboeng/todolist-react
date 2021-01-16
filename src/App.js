import React from 'react';
import Container from './components/Container/index';
import Global from "./styles/global";

export default function App(){

  const DATA = [
  ];

  return (
    <>
    <Global/>
    <Container tasks={DATA}/>
    </>
  )

}


