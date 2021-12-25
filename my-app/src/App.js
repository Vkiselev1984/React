
import { render } from '@testing-library/react';
import './App.css';

function Message(props) {

  return (
    
  <h1 className="Hello">Привет, {props.name}</h1>
  
  
  )
  
}


const element = <Message name="Владимир" />

render (element, document.getElementById('root'))
export default Message;
