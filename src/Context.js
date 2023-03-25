import React,{createContext,useReducer} from 'react'
export const themeContext=createContext();
const initialState={
    darkMode:false
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'toggle':
            return {darkMode: !state.darkMode};
            default:
                return state;
    }
}

const Context = (props) => {
    const[state,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
    <themeContext.Provider value={{state,dispatch}}>
        {props.children}
    </themeContext.Provider>
    </div>
  )
}

export default Context