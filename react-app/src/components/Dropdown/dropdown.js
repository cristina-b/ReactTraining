import React, { useState } from 'react';
import styles from './dropdown.css';

const initialOptions = [
  {
    id: 0,
    title: 'Option 1'
  },
  {
    id: 1,
    title: 'Option 2'
  },
  {
    id: 2,
    title: 'Option 3'
  },
  {
    id: 3,
    title: 'Option 4'
  },
  {
    id: 4,
    title: 'Option 5'
  },
  {
    id: 5,
    title: 'Option 6'
  }
]

const Dropdown = () => {

  const [options, setOptions] = useState(initialOptions);
  const [expanded, setExpanded] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggle = (e) => {
    e.preventDefault();
    setExpanded(!expanded);
  }

  const selectOption = (option) => {
    if (!optionIsSelected(option)) {
      setSelectedOptions([...selectedOptions, option])
    }
  }

  const optionIsSelected = (currentOption) => {
    if (selectedOptions.some(opt => opt.id === currentOption.id)) {
      return true;
    }
    return false;
  }
  const removeSelectedOption = (removedOption) => {
    let newOptions = selectedOptions.filter(
      option => option.id !== removedOption.id
    );
    setSelectedOptions([...newOptions]);
  }

  return (
    <div>
      <div>
        {selectedOptions.map((x) => (
          <button key={x.id} onClick={() => removeSelectedOption(x)}>
            {x.title} X
          </button>
        ))}
      </div>
      <div className={`dd-wrapper js-wrapper ${!expanded ? "dd-closed" : "not"}`} >
        <div className="dd-header js-header" onClick={toggle}>
          <div className="dd-header-title">
          </div>
        </div>
        <ul className="dd-list">
          {options.map((x) => (
            <li className="dd-list-item" key={x.id} onClick={() => selectOption(x)}>Option: {x.title} {optionIsSelected(x) ? "selected" : "not"}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;