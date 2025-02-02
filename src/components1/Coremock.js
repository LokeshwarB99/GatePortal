import React, { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom';
import Checkoutques from '../components/Checkoutques';

const Coremock = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');
  const [showCheckout, setShowCheckout] = useState(false);
  const checkoutRef = useRef(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleCheckoutClick = () => {
    setShowCheckout(true);
    const checkoutquesSection = document.getElementById('checkoutques');
    if (checkoutquesSection) {
      checkoutquesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div style={{ float: 'left', width: '45%', marginRight: '5%', marginTop: '60px' }}>
        <div style={{ marginTop: '10px' }}>
          <label className="label" htmlFor="startDatetime">
            Start Date and Time
          </label>
          <DatePicker
            className="form-datepicker"
            selected={startDate}
            onChange={handleStartDateChange}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={30}
            timeCaption="Time"
            dateFormat="MMMM d, yyyy h:mm aa"
          />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label className="label" htmlFor="endDatetime">
            End Date and Time
          </label>
          <DatePicker
            className="form-datepicker"
            selected={endDate}
            onChange={handleEndDateChange}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={30}
            timeCaption="Time"
            dateFormat="MMMM d, yyyy h:mm aa"
          />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label className="label" htmlFor="type">
            Select department
          </label>
          <select className="select-field" name="type" onChange={handleChange}>
            <option value="">--Select department--</option>
            <option value="CSE,IT">CSE,IT</option>
            <option value="ECE">ECE</option>
            <option value="EEE">EEE</option>
            <option value="AIDS">AIDS</option>
          </select>
        </div>
      </div>

      <div style={{ float: 'left', width: '45%', marginTop: '60px' }}>
        <div style={{ marginTop: '10px' }}>
          <label className='label'>Easy count</label>
          <input className='input-field' type='number' />
        </div>

        <div style={{ marginTop: '10px' }}>
          <label className='label'>Medium count</label>
          <input className='input-field' type='number' />
        </div>

        <div style={{ marginTop: '10px' }}>
          <label className='label'>Hard count</label>
          <input className='input-field' type='number' />
        </div>
      </div>

      <div style={{ clear: 'both' }}>
        <button className='button' onClick={handleCheckoutClick}>
          <Link style={{ color: 'white', textDecoration: 'none' }}>
            Checkout
          </Link>
        </button>
      </div>

      {showCheckout && (
        <div id="checkoutques" style={{ marginTop: '200px' }}>
          <Checkoutques />
        </div>
      )}
    </div>
  );
};

export default Coremock;