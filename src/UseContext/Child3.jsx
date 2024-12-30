import React from 'react'
import { data1,data2 } from '../App';
import { useContext } from 'react';

const Child3 = () => {
  const name = useContext(data1);
  const place = useContext(data2);
  return (
    <div>
      <h1>
        My name is {name} and I'm from {place}
      </h1>
    </div>
  )
}

export default Child3
