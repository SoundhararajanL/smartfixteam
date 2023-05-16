import machine from './New_green.553674ca.gif'
import noimg from './noimage.jpg'
import { FaPencilAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import React from 'react';



function Machine(props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/historical", { state: props.name })
  }
  return (
    <div className='abc'>
      <div className="card-container">
        <div className="image-container">
          <img src={noimg} alt={noimg} className="image" />
          <img src={machine} alt={machine} className="image2" />

        </div>
        <button onClick={(e) => handleClick()} className="title">{props.name}</button>
        <button className="edit-button"><FaPencilAlt /> &nbsp; Edit</button>
      </div>


    </div>


  );
}

export default Machine;
