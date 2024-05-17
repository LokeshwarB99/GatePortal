import React from 'react'

const Mech = () => {
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
                    <label className='label' style={{ marginRight: '20px' }}>Section 2: Applied Mechanics and Design</label>
                    <input style={{ width: '100%', padding: '0.5rem', border: ' 1px solid #ccc', borderRadius: '4px' }} type='number' />
                </div>

                <div style={{ marginTop: '30px' }} >
                    <label className='label' style={{ marginRight: '20px' }}>Section 3: Fluid Mechanics and Thermal Sciences</label>
                    <input style={{ width: '100%', padding: '0.5rem', border: ' 1px solid #ccc', borderRadius: '4px' }} type='number' />
                </div>

                <div style={{ marginTop: '30px' }}>
                    <label className='label' style={{ marginRight: '20px' }}>Section 4: Materials, Manufacturing and Industrial Engineering</label>
                    <input style={{ width: '100%', padding: '0.5rem', border: ' 1px solid #ccc', borderRadius: '4px' }} type='number' />
                </div>

                {/* <div style={{ marginTop: '30px' }}>
                    <label className='label' style={{ marginRight: '20px' }}>Section 5: Electrical Machines</label>
                    <input style={{ width: '100%', padding: '0.5rem', border: ' 1px solid #ccc', borderRadius: '4px' }} type='number' />
                </div>

                <div style={{ marginTop: '30px' }}>
                    <label className='label' style={{ marginRight: '20px' }}>Section 6: Power Systems
                    </label>
                    <input style={{ width: '100%', padding: '0.5rem', border: ' 1px solid #ccc', borderRadius: '4px' }} type='number' />
                </div>

                <div style={{ marginTop: '30px' }}>
                    <label className='label' style={{ marginRight: '20px' }}>Section 7: Control Systems</label>
                    <input style={{ width: '100%', padding: '0.5rem', border: ' 1px solid #ccc', borderRadius: '4px' }} type='number' />
                </div>

                <div style={{ marginTop: '30px' }}>
                    <label className='label' style={{ marginRight: '20px' }}>Section 8: Electrical and Electronic Measurements</label>
                    <input style={{ width: '100%', padding: '0.5rem', border: ' 1px solid #ccc', borderRadius: '4px' }} type='number' />
                </div>

                <div style={{ marginTop: '30px' }}>
                    <label className='label' style={{ marginRight: '20px' }}>Section 9: Analog and Digital Electronics</label>
                    <input style={{ width: '100%', padding: '0.5rem', border: ' 1px solid #ccc', borderRadius: '4px' }} type='number' />
                </div>

                <div style={{ marginTop: '30px' }}>
                    <label className='label' style={{ marginRight: '20px' }}>Section 10: Power Electronics</label>
                    <input style={{ width: '100%', padding: '0.5rem', border: ' 1px solid #ccc', borderRadius: '4px' }} type='number' />
                </div> */}
            </div>

        </div>
    )
}

export default Mech