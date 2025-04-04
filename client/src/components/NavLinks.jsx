import React, { useState }  from 'react'
import { Link } from 'react-router-dom';
import { FaUserCircle,FaCaretUp,FaCaretDown } from "react-icons/fa";
import { Dropdown } from 'react-bootstrap';
import Wrapper from '../assets/wrappers/NavLinks';
const NavLinks = () => {
    const [changeCaret, setCaret] = useState(false);
    const toggleDropdown = () => {
        setCaret(!changeCaret); 
    }
  return (
    <Wrapper>
 <Dropdown>
        <Dropdown.Toggle  id="dropdown-header" title="Dropdown button">
            <FaUserCircle/>
        </Dropdown.Toggle>
        <Dropdown.Menu> 
            <Dropdown.Item as="section"  id="item">
                <Link to="/">Dashboard</Link>
            </Dropdown.Item>
            <Dropdown.Item as="section"  id="item">
            <Link to="/">Profile</Link>
            </Dropdown.Item>
            <Dropdown.Item as="section"  id="item">
            <Link to="/">Logout</Link>
            </Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
    </Wrapper>
  )
}

export default NavLinks
