import React from 'react'

import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faEye, faRightFromBracket } from "@fortawesome/free-solid-svg-icons"

const NavbarLogged = () => {

    const handleClick = () =>{
        const hidden = document.getElementById('hiddenNa')
        if (hidden.style.display === 'flex'){
            hidden.style.display = 'none'
        }else{
            hidden.style.display = 'flex'
        }
    }

  return (
    <nav className='navBar' style={{overflow:'visible'}}>
            <img src={Logo} alt="" />
            <div className="navMid">
                <h5><a href='/'>Home</a></h5>
                <h5><a href="#prevquest">Prev-Quest</a></h5>
                <h5><a href="#mockexams">Mock-Exam</a></h5>
                <h5><a href="#resources">Resources</a></h5>
            </div>
            <div className='navRight' style={{overflow:'visible'}}>
                <div onClick={handleClick}>
                    <div className='hoverLog' style={{height:'30px',width:'30px',borderRadius:'50%',zIndex:'-100',backgroundColor:'black',display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer'}}>
                        <FontAwesomeIcon style={{cursor:'pointer',zIndex:'100',color:'white'}} icon={faUser}  />
                    </div>
                </div>
                <div className='hiddenNav' id='hiddenNa'>
                    <h4><FontAwesomeIcon icon={faEye} /><Link to='/profile' style={{color:'black',textDecoration:'none'}}>View Profile</Link></h4>
                    <h4><FontAwesomeIcon icon={faRightFromBracket} />Logout</h4>
                </div>
            </div>
        </nav>
  )
}

export default NavbarLogged