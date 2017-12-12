import React from 'react';
import Select from 'react-select';

const MultiSelect = ({options, handleSelectChange, removeSelected, value}) => {

  return (
    <Select
      name="form-field-name"
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
