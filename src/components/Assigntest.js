import React, { useState } from 'react';
import NavBar from './NavBar';
import Gatemock from '../components1/Gatemock';
import Aptitudemock from '../components1/Aptitudemock';
import Coremock from '../components1/Coremock';

const Assigntest = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const handleStartDateChange = (date) => {
    setStartDate(date);
  };
  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <NavBar/>
      <h1 style={{ marginTop: '50px', fontWeight: '500', textAlign: 'left', marginLeft: '80px' }}>Fill up to Schedule a test</h1>
      <div style={{ marginLeft: '80px', marginTop: '30px' }}  >
        <label className="label" htmlFor="type">
          Exam type
        </label>
        <select className="select-field" name="type" onChange={handleChange} value={selectedOption}>
          <option value="">--Exam type--</option>
          <option value="gate">Gatemock (Aptitude,Core,Math mock)</option>
          <option value="aptitude">Aptitude Mock</option>
          <option value="core">Core Mock </option>
        </select>
        {selectedOption === 'gate' && <Gatemock />}
        {selectedOption === 'aptitude' && <Aptitudemock />}
        {selectedOption === 'core' && <Coremock />}
      </div>
    </div>
  );
};

export default Assigntest;
