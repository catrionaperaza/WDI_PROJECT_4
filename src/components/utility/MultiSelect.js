import React from 'react';
import Select from 'react-select';

const MultiSelect = ({options, handleSelectChange, removeSelected, value}) => {

  return (
    <Select
      username="form-field-username"
      removeSelected={removeSelected}
      onChange={handleSelectChange}
      options={options}
      value={value}
      multi
      matchPos="start"
    />
  );
};

export default MultiSelect;
