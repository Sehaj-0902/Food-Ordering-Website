import React, { useReducer, useState } from 'react'

const addQuantity = (state, action) => {
    switch (action.type) {
        case '+' :
            return { qty : state.qty + 1 };
        case '-' :
            return { qty : state.qty - 1 };
        default :
            return state;    
    }
};

const AddButton = () => {
    const initialReducer = { qty : 0};
    const [state, dispatch] = useReducer(addQuantity, initialReducer);

    const [s,Sets] = useState({
        name: "",
        quantity: 0,
    });

    const fnc = (q,n) => {
        Sets ((prev) => ({...prev, quantity: q, name: n}));
        console.log(q,n);
       
    }
    
  return (
    <>
        <button className='btn' onClick={() => dispatch({type : '-'})}>-</button>
        <input type='text' value={state.qty} style={{width: '18px', textAlign: 'center'}}/>
        <button className='btn' onClick={() => dispatch({type : '+'})}>+</button>
        <button type='submit' className='btn' onClick={() => {fnc(state.qty,s.name)}}>ADD</button>
        
    </>
  )
}

export default AddButton


