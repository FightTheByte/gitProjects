import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './input.css';

export const Input = () => {
  const [wallLength, setWallLength] = useState(); 
  const [height, setHeight] = useState();
  const navigate = useNavigate();

  function handleSubmit(e){
    e.preventDefault();
    navigate('/pricing',{
        state:{
          wallLength,
          height
        }
    })
  }

  return(
    <>
      <div>
        <form 
          className='form'
          onSubmit={(e) => handleSubmit(e)}
        >
          <input 
            type='number' 
            step={1} 
            min={1}
            max={500}
            required={true}
            placeholder='Length in meters'
            onChange={(e) => {setWallLength(e.target.value)}} 
          />
          <input 
            type='number' 
            step={0.1} 
            min={0.5}
            max={1.65}
            required={true}
            placeholder='Height in meters'
            onChange={(e) => {setHeight(e.target.value)}}
          />
          <input type='submit' value='calculate cost'/>
        </form>
        <p 
          className='info'
        >
          All pricing are estimated, based on industry information and may not reflect the exact cost of your quote or unique circumstances.
        </p>
      </div>
    </>
  );
};