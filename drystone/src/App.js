import { 
  Outlet,
  useNavigate
 } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';

export const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/input');
  }, []);

    return(
        <>
         <div className='main'>
            <div className='banner'>
              <h1 className="title">Dry Stone Wall Pricing Calculator</h1>
            </div>
            <Outlet/>
          </div>
        </>
    )
};
