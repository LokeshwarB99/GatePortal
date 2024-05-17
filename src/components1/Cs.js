import React, { useState } from 'react';

const Cs = () => {
  return (
    <div>
      <div style={{ marginTop: '20px' }}>
        <label className='label' style={{ marginRight: '20px' }}>Total questions count</label>
        <input style={{ width: 'auto', padding: '0.5rem', border: ' 1px solid #ccc', borderRadius: '4px' }} type='number' />
      </div>


      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "20px",
          overflow: 'hidden'
        }}
      >
        <hr style={{ flex: 1, marginRight: "10px" }} />
        <p style={{ color: "gray", fontFamily: "montserrat" }}>TEST PAPER</p>
        <hr style={{ flex: 1, marginLeft: "10px" }} />
      </div>

      {/* section tag */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '30px' }}>
        <div style={{ marginTop: '30px' }}>
          <label className='label' style={{ marginRight: '20px' }}>Section 1: Engineering Mathematics</label>
          <input style={{ width: '100%', padding: '0.5rem', border: ' 1px solid #ccc', borderRadius: '4px' }} type='number' />
        </div>

        <div style={{ marginTop: '30px' }}>
          <label className='label' style={{ marginRight: '20px' }}>Section 2: Digital Logic</label>
          <input style={{ width: '100%', padding: '0.5rem', border: ' 1px solid #ccc', borderRadius: '4px' }} type='number' />
        </div>

        <div style={{ marginTop: '30px' }} >
          <label className='label' style={{ marginRight: '20px' }}>Section 3: Computer Organization and Architecture</label>
          <input style={{ width: '100%', padding: '0.5rem', border: ' 1px solid #ccc', borderRadius: '4px' }} type='number' />
        </div>

        <div style={{ marginTop: '30px' }}>
          <label className='label' style={{ marginRight: '20px' }}>Section 4: Programming and Data Structures</label>
          <input style={{ width: '100%', padding: '0.5rem', border: ' 1px solid #ccc', borderRadius: '4px' }} type='number' />
        </div>

        <div style={{ marginTop: '30px' }}>
          <label className='label' style={{ marginRight: '20px' }}>Section 5: Algorithms</label>
          <input style={{ width: '100%', padding: '0.5rem', border: ' 1px solid #ccc', borderRadius: '4px' }} type='number' />
        </div>

        <div style={{ marginTop: '30px' }}>
          <label className='label' style={{ marginRight: '20px' }}>Section 6: Theory of Computation </label>
          <input style={{ width: '100%', padding: '0.5rem', border: ' 1px solid #ccc', borderRadius: '4px' }} type='number' />
        </div>

        <div style={{ marginTop: '30px' }}>
          <label className='label' style={{ marginRight: '20px' }}>Section 7: Compiler Design</label>
          <input style={{ width: '100%', padding: '0.5rem', border: ' 1px solid #ccc', borderRadius: '4px' }} type='number' />
        </div>

        <div style={{ marginTop: '30px' }}>
          <label className='label' style={{ marginRight: '20px' }}>Section 8: Operating System</label>
          <input style={{ width: '100%', padding: '0.5rem', border: ' 1px solid #ccc', borderRadius: '4px' }} type='number' />
        </div>

        <div style={{ marginTop: '30px' }}>
          <label className='label' style={{ marginRight: '20px' }}>Section 9: Databases</label>
          <input style={{ width: '100%', padding: '0.5rem', border: ' 1px solid #ccc', borderRadius: '4px' }} type='number' />
        </div>

        <div style={{ marginTop: '30px' }}>
          <label className='label' style={{ marginRight: '20px' }}>Section 10: Computer Networks</label>
          <input style={{ width: '100%', padding: '0.5rem', border: ' 1px solid #ccc', borderRadius: '4px' }} type='number' />
        </div>
      </div>

    </div>
  );
};

export default Cs;