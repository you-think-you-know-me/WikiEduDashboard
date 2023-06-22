import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_PETSCAN_IDS } from '../../../constants/scoping_methods';
import CreatableSelect from 'react-select/creatable';

const PetScanScoping = () => {
  const [inputValue, setInputValue] = React.useState('');
  const petscanIDs = useSelector(state => state.scopingMethods.petscan.psids);
  const dispatch = useDispatch();

  const handleKeyDown = async (event) => {
    if (!inputValue) return;
    switch (event.key) {
      case 'Enter':
      case 'Tab':
        if (isNaN(inputValue)) {
          return;
        }
        dispatch({
          type: UPDATE_PETSCAN_IDS,
          psids: petscanIDs.concat({
            label: inputValue,
            value: inputValue,
          }),
        });
        setInputValue('');
        event.preventDefault();
        break;
      default:
    }
  };

    return (
      <div className="scoping-method-petscan form-group">
        <label htmlFor="petscan-ids">Enter PetScan IDs</label>
        <CreatableSelect
          inputValue={inputValue}
          isClearable
          isMulti
          menuIsOpen={false}
          onChange={psids => dispatch({ type: UPDATE_PETSCAN_IDS, psids })}
          onInputChange={newValue => !isNaN(newValue) && setInputValue(newValue)}
          onKeyDown={handleKeyDown}
          placeholder="Type something and press enter..."
          value={petscanIDs}
          className="react-select-container"
          id="petscan-psids"
        />
        <a href="https://petscan.wmflabs.org/" target="_blank">
          {I18n.t('courses_generic.creator.scoping_methods.petscan_create_psid')}
        </a>
      </div>
    );
};

export default PetScanScoping;
