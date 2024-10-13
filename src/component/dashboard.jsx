import {useState} from 'react';
import '../index.css';
import { FaBars, FaBell, FaUserAlt, FaSearch, FaSitemap } from 'react-icons/fa';
import { Input, Select, Switch, Button } from 'antd';

const { Option } = Select;

function Navbar() {
  const [isOpenGeneral, setIsOpenGeneral] = useState(true);
  const [isOpenReferences, setIsOpenReferences] = useState(true);
  const [isOpenAddress, setIsOpenAddress] = useState(true);
  const [isOpenContactInfo, setIsOpenContactInfo] = useState(true);

  const toggleGeneral = () => setIsOpenGeneral(!isOpenGeneral);
  const toggleReferences = () => setIsOpenReferences(!isOpenReferences);
  const toggleAddress = () => setIsOpenAddress(!isOpenAddress);
  const toggleContactInfo = () => setIsOpenContactInfo(!isOpenContactInfo);

  return (
    <div className="navbar-layout">
      {/* Sidebar */}
      <div className="sidebar">
        <FaBars className="sidebar-menu-icon" />
        <FaSitemap className="sidebar-icon" /> 
      </div>

      <div className="main-content">
        {/* Top Navbar */}
        <div className="navbar-container">
          <div className="navbar-left">
            <img src='https://i.imgur.com/3GznpBp.png' className="navbar-logo" alt="Logo" />
            <span className="navbar-logo-text">Logo</span>
          </div>

          <div className="navbar-search">
            <FaBars className="navbar-menu-icon" />
            <Input placeholder="Search" className="navbar-search-input" />
            <FaSearch className="navbar-search-icon" />
          </div>

          <div className="navbar-icons">
            <FaBell className="navbar-icon" />
            <FaUserAlt className="navbar-icon" />
          </div>
        </div>

        {/* Form Section */}
        <div className="form-container">
          <div className="section-header" onClick={toggleGeneral} style={{ cursor: 'pointer' }}>
            <h3><span className={`arrow ${isOpenGeneral ? 'down' : 'right'}`}>&#9662;</span>General</h3>
          </div>
          {isOpenGeneral && (
            <form>
              {/* First Row */}
              <div className="form-row">
                <div  >
                  <label htmlFor="org-name">Organisation Name<span className="star"> *</span></label>
                  <Input id="org-name" className='field-orgName'required />
                </div>
                <div class="input-group">
                  <label for="org-type">Organisation Type</label>
                  <select id="org-type" className='dropdown-orgtype'>
                    <option value="" disabled selected></option>
                    <option value="type1">Type 1</option>
                    <option value="type2">Type 2</option>
                  </select>
                </div>
                <div className="city">
                  <label htmlFor="org-name">Currency</label>
                  <Input id="org-name" className='field-currency' required />
                </div>
              </div>
              {/* second Row */}
              <div className="form-row">
                <div class="input-group">
                  <label for="org-type">Communication Method</label>
                  <select id="org-type" className='field-communication'>
                    <option value="" disabled selected >Placeholder text</option>
                    <option value="type1">Type 1</option>
                    <option value="type2">Type 2</option>
                  </select>
                </div>
                <div className='bar'>
                  <label className='switch'>Active</label>
                  <Switch/>
                </div>
              </div>
            </form>
            )}

          {/* Reference  */}
          <div className="section-header2" onClick={toggleReferences} style={{ cursor: 'pointer' }} >
            <h3><span className={`arrow ${isOpenReferences ? 'down' : 'right'}`}>&#9662;</span>References</h3>
          </div>
          {isOpenReferences && (
            <form>
              {/* First Row */}
              <div className="form-row">
                <div class="input-group">
                    <label for="org-type"></label>
                    <select id="org-type" className='dropdown-ReferType' required>
                      <option value="Select" className='field-orgName'>Reference Type</option>
                      <option value="type1">Type 1</option>
                      <option value="type2">Type 2</option>
                    </select >
                </div>

                <div  >
                  <label htmlFor="org-name"><span className="star"></span></label>
                  <Input id="org-name" className='field-ReferVal' placeholder='Reference Value'required />
                </div>
                <div>
                  <button className='button'>+Add</button>
                  <button className='button'>Remove</button>
                </div>
              </div>
            </form>
            )}
            {/* Address Details */}
            <div className="section-header2" onClick={toggleAddress} style={{ cursor: 'pointer' }}>
              <h3><span className={`arrow ${isOpenAddress ? 'down' : 'right'}`}>&#9662;</span>Address Details</h3>
            </div>
              {isOpenAddress && (
                <form>
                  {/* First Row */}
                  <div className="form-row">
                    <div>
                      <label htmlFor="org-name" >Address 1</label>
                      <Input id="org-name" className='field-Add1'required />
                    </div>
                    <div>
                      <label htmlFor="org-name" className='add2'>Address 2</label>
                      <Input id="org-name" className='field-Add2'required />
                    </div>
                    <div>
                      <label htmlFor="org-name">City</label>
                      <Input id="org-name" className='field-City' required />
                    </div>
                  </div>

                  {/* second Row */}
                  <div className="form-row">
                    <div>
                      <label htmlFor="org-name" >State</label>
                      <Input id="org-name" className='field-state'required />
                    </div>
                    <div className="Country">
                      <label htmlFor="org-name" className='add2'>Country</label>
                      <Input id="org-name" className='field-country'required />
                    </div>
                    <div className="code">
                      <label htmlFor="org-name">Postal Code</label>
                      <Input id="org-name" className='field-Code' required />
                    </div>
                  </div>
                </form>
              )}
              {/* Reference  */}
              <div className="section-header2" onClick={toggleContactInfo} style={{ cursor: 'pointer' }} >
                <h3><span className={`arrow ${isOpenContactInfo ? 'down' : 'right'}`}>&#9662;</span>Contact Information</h3>
              </div>
              {isOpenContactInfo && (
                <form>
                  {/* First Row */}
                  <div className="form-row">
                    <div class="input-group">
                        <label for="org-type"></label>
                        <select id="org-type" className='dropdown-ReferType' required>
                          <option value="Select" className='field-orgName'>Email Type</option>
                          <option value="type1">Type 1</option>
                          <option value="type2">Type 2</option>
                        </select >
                    </div>

                    <div>
                      <label htmlFor="org-name"><span className="star"></span></label>
                      <Input id="org-name" className='field-ReferVal' placeholder='Email'required />
                    </div>
                    <div>
                      <button className='button'>+Add</button>
                      <button className='button'>Remove</button>
                    </div>
                  </div>
                  <div className="form-row">
                    <div>
                        <label for="org-type"></label>
                        <select id="org-type" className='dropdown-ReferType' required>
                          <option value="Select" className='field-orgName'>Phone Type</option>
                          <option value="type1">Type 1</option>
                          <option value="type2">Type 2</option>
                        </select >
                    </div>

                    <div  >
                      <label htmlFor="org-name"><span className="star"></span></label>
                      <Input id="org-name" className='field-ReferVal' placeholder='Phone number'required />
                    </div>
                    <div>
                      <button className='button'>+Add</button>
                      <button className='button'>Remove</button>
                    </div>
                  </div>
                </form>
                )}
                <div className='butt'>
                  <button className='cancel'>Cancel</button>
                  <button className='save'>Save</button>
                </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
