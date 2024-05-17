import React, { useEffect, useState } from 'react';
import Navbar1 from './Navbar1';
import Confetti from 'react-dom-confetti';

const Finalsubmit = () => {
    const [showTick1, setShowTick1] = useState(false);
    const [showTick2, setShowTick2] = useState(false);
    const [showConfetti, setShowConfetti] = useState(true);
    const [fetchCompleted, setFetchCompleted] = useState(false);

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setShowTick1(true);
        }, 2000);

        const timer2 = setTimeout(() => {
            setShowTick2(true);
            setTimeout(() => {
                setShowConfetti(true); 
                setFetchCompleted(true); 
            }, 2000);
        }, 4000);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    return (
        <div>
            <Navbar1 />
            <div style={{ marginTop: '80px', textAlign: 'center' }}>
                <h1 style={{ fontWeight: '600' }}>Preserving Your Test Legacy: Stand By for Completion</h1>
                <div className="animation-container">
                    <p style={{ fontSize: "22px", marginBottom: '20px' }}>Please refrain from refreshing or navigating to another page.</p>
                    <p style={{ marginBottom: '20px' }} className="animation-item">
                        Saving Your Test Records... Processing is about to be completed... {showTick1 && <span className="tick-animation">✔</span>}
                    </p>
                    <p className="animation-item">
                        Fetching up your results... {showTick2 && <span className="tick-animation">✔</span>}
                    </p>
                    <p className="success-message">Successful!</p>
                </div>

                <Confetti
                    active={showConfetti}
                    config={{
                        angle: 90,
                        spread: 360,
                        startVelocity: 40,
                        elementCount: 200,
                        decay: 0.95,
                        colors: ['#ff0000', '#00ff00', '#0000ff']
                    }}
                />
            </div>
        </div>
    );
}

export default Finalsubmit;
