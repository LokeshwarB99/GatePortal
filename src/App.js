import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import HomePage from './HomePage';
import Scheduled from './components/Scheduled';
import Unscheduled from './components/Unscheduled';
import Assigntest from './components/Assigntest';
import Leaderboard from './components/Leaderboard';
import Adminview from './components/Adminview';
import Instruction from './components/Instruction';
import Questionpage from './Questionpage';
import Login from './components/Login';
import Signup from './components/Signup';
import Resources from './components/Resources';
import Uploadquestions from './components/Uploadquestions';
import NavBar from './components/NavBar';
import Checkoutques from './components/Checkoutques';
import Mobileerrorpage from './components/Mobileerrorpage';
import Finalsubmit from './components/Finalsubmit';
import { dashContext } from './userContext';
import Profile from './Profile';



function App() {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const [userstate, setUserstate] = useState({
        email: storedUser ? storedUser.email : '',
        loggedin: storedUser ? true : false,
    });
    console.log(userstate)
    const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

    useEffect(() => {
        const checkDeviceType = () => {
            setIsMobileOrTablet(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
        };
        checkDeviceType();

        window.addEventListener('resize', checkDeviceType);

        return () => {
            window.removeEventListener('resize', checkDeviceType);
        };
    }, []);

    return (
        <BrowserRouter>
            <dashContext.Provider value={{ userstate, setUserstate }}>
                <Routes>
                    {/* {isMobileOrTablet && <Route path="*" element={<Mobileerrorpage />} />} */}
                    {/* {!isMobileOrTablet && ( */}
                        <>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/questions/:id" element={<Questionpage />} />
                            <Route path="/instruction/:id" element={<Instruction />} />
                            <Route path="/schedule" element={<Scheduled />} />
                            <Route path="/unschedule" element={<Unscheduled />} />
                            <Route path="/assign" element={<Assigntest />} />
                            <Route path="/leaderboard/:id" element={<Leaderboard />} />
                            <Route path="/admin" element={<Adminview />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<Signup />} />
                            <Route path="/resources" element={<Resources />} />
                            <Route path="/uploadquestion" element={<Uploadquestions />} />
                            <Route path="/navbar" element={<NavBar />} />
                            <Route path="/checkout" element={<Checkoutques />} />
                            <Route path="/submit" element={<Finalsubmit />} />

                        </>
                    {/* )} */}
                    <Route path="/profile" element={<Profile />}></Route>
                </Routes>
            </dashContext.Provider>
        </BrowserRouter>
    );
}

export default App;
