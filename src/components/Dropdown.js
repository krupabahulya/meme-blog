import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

function DropMenu() {
  const [value,setValue]=useState('');
  const handleSelect=(e)=>{
    console.log(e);
    setValue(e)
  }
  return (
    <div className="App container">
    <DropdownButton
      alignRight
      title="Select Category"
      id="dropdown-menu-align-right"
      onSelect={handleSelect}
        >
              <Dropdown.Item eventKey="all">all</Dropdown.Item>
              <Dropdown.Item eventKey="latest">latest</Dropdown.Item>
              <Dropdown.Item eventKey="classics">classics</Dropdown.Item>
              <Dropdown.Item eventKey="animals">animals</Dropdown.Item>
              <Dropdown.Item eventKey="crypto">crypto</Dropdown.Item>
              <Dropdown.Item eventKey="ocooking">cooking</Dropdown.Item>
              <Dropdown.Item eventKey="orelationship">relationship</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="some link">some link</Dropdown.Item>
      </DropdownButton>
      <h4>You selected {value}</h4>
    </div>
  );
}
export default DropMenu;