import React, {Component, useEffect, useRef, useState} from 'react';
import './Contacts.css'
import Contact from "./Contact";
import searchIcon from '../assets/img/search.png'


function Contacts(data) {

    const [contacts] = useState(data);
    const [inputValue, setInputValue] = useState('');
    const [contactRender, setContactRender] = useState(contacts.data);
    const [currentGender, setCurrentGender] = useState(['male', 'female', 'unknown']);
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleGenderChange = () => {
        let checkboxes = document.querySelectorAll('.gender-checkbox');
        let checkboxesChecked = [];
        for (const input of checkboxes) {
            if (input.checked) {
                checkboxesChecked.push(input.value);
            }
        }
        return setCurrentGender(checkboxesChecked);
    }
    const searchFilter = () => {
        return contacts.data.filter(contact =>
            contact.firstName.toLowerCase().includes(inputValue.toLowerCase())
            || contact.lastName.toLowerCase().includes(inputValue.toLowerCase())
            || contact.phone.toLowerCase().includes(inputValue.toLowerCase())
        ).filter(contact => currentGender.includes(contact.gender));
    }
    useEffect(() => {
        setContactRender(searchFilter())
    }, [inputValue, currentGender])

    function noSearchResult() {
        return <div>
            <h2>Нічого не знайдено</h2>
        </div>
    }
    return (
        <div>
            <div className="wrapper">
                <div className="container">
                    <header className="header">
                        <div className="form__search">
                            <input onChange={handleInputChange} className='search' type="text"/>
                            <img className='search-icon' src={searchIcon} alt="search-icon"/>
                        </div>
                        <div className="checkbox-block">
                            <div className="male checkbox">
                                <p>Ч</p>
                                <label className="toggler-wrapper style-1">
                                    <input
                                        className='gender-checkbox'
                                        value={'male'}
                                        onClick={handleGenderChange}
                                        defaultChecked="checked"
                                        type="checkbox"/>
                                    <div className="toggler-slider">
                                        <div className="toggler-knob"></div>
                                    </div>
                                </label>
                            </div>
                            <div className="female checkbox">
                                <p>Ж</p>
                                <label className="toggler-wrapper style-1">
                                    <input
                                        className='gender-checkbox'
                                        value={'female'}
                                        onClick={handleGenderChange}
                                        type="checkbox"
                                        defaultChecked="checked"
                                    />
                                    <div className="toggler-slider">
                                        <div className="toggler-knob"></div>
                                    </div>
                                </label>
                            </div>
                            <div className="no-gender checkbox">
                                <p>Не вказано</p>
                                <label className="toggler-wrapper style-1">
                                    <input
                                        className='gender-checkbox'
                                        value={'unknown'}
                                        onClick={handleGenderChange}
                                        type="checkbox"
                                        defaultChecked="checked"
                                    />
                                    <div className="toggler-slider">
                                        <div className="toggler-knob"></div>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </header>
                    <div className="contact">
                        {
                            contactRender.map(contact => <Contact item={contact} key={contact.id}/>)
                        }
                        {
                            contactRender.length === 0 && noSearchResult()
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
