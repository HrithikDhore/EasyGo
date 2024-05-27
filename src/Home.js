import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import fluegas from '../src/images/fluegas.png';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleRefresh = (event) => {
      event.preventDefault(); // Prevents the default refresh behavior
      navigate('/'); // Navigate to the login page
    };

    window.addEventListener('beforeunload', handleRefresh);

    return () => {
      window.removeEventListener('beforeunload', handleRefresh);
    };
  }, [navigate]);
  return (
    <div style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${fluegas})`, backgroundSize: '1518px 720px', backgroundPosition: 'center', height: '95vh' }}>
      <div className='bg-white p-3 rounded w-75 bg-opacity-50 '>
        <h1>EasyGo Technologies</h1>
        <h4>Hinjewadi, Pune, Maharashtra</h4>
        <p></p>
        <p></p>
        
        <p className="fs-6" style={{ color: 'blue' }}>
          We take immense pleasure in introducing to you EasyGo Technologies, an organization which is Futuristic & Unique by way of its operations. EasyGo Technologies is one of the pioneers in electronic product design, manufacturing, and software solution provider company, which focuses on Power electronics solutions covering and carrying Research, Design & Development in VLSI, Embedded Systems. We are a trustworthy entity, engaged in designing, manufacturing, and supplying advanced electronics products for Home Automation and Home Security products viz (a) Motion Sensor, (b) Hazardous Gas Monitoring Systems, (c) Auto Power Switch in lighting control, (d) Water Level Controller, and (e) Wireless Traffic Light Controller etc.
        </p>
        <p className="fs-6" style={{ color: 'red' }}>
          In a short span of time, we gained recognition in the minds of our esteemed customers in the Indian market. We offer specialized microcontroller-based ESP controller i.e. EasyCon for Electrostatic Precipitator System. We at EasyGo Technologies believe in offering world-class and high-quality products covered under warranty.
        </p>
        <p className="fs-6" >
          You can find more details at <a href="http://www.easygo.co.in">www.easygo.co.in</a>. We would be highly delighted if you could give us an opportunity to build long-lasting relations with you.
        </p>
        <strong>PRODUCTS</strong>
        <p className="fs-6" >
          ➢ <strong>EASYCON</strong> : Power controller for high voltage transformer in ESP applications 1PH AC control using Thyristor for Electrostatic Precipitator (ESP) which will be used in Boiler system for pollution control.
        </p>
        <p className="fs-6">
          ➢ <strong>Auto Power Switch</strong>: Daylight sensor to switch off the light of stair case or parking, Street lights etc.
        </p>
        <p className="fs-6">
          ➢ <strong>Water level controller</strong>
        </p>
        <p className="fs-6">
          ➢ <strong>Motion Sensor</strong>: Home light control from remote using IOT
          ➢ Automation of mechanical machines based on microcontroller systems.
          ➢ Traffic Light control system and Down Counter Controllers
          ➢ Hazardous oil and gas monitoring system
        </p>
      </div>
    </div>
  );
}

export default Home;
