import React from 'react';
import AutoComplete from '../utility/AutoComplete';
import MultiSelect from '../utility/MultiSelect';

function DinnersForm({ handleSubmit, handleChange, handleLocationChange, dinner, handleSelectChange, removeSelected, guests, value}) {
  return (
    <div className="row">
      <div className="page-banner col-md-12">
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="Dinner Title"
            value={dinner.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <AutoComplete handleChange={handleLocationChange} />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="image"
            placeholder="Image Link"
            value={dinner.image}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="Number"
            className="form-control"
            name="avail_places"
            placeholder="Available Places at Dinner"
            value={dinner.avail_places}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            placeholder="Dinner Description"
            value={dinner.description}
            onChange={handleChange}
          />
        </div>
        <div className="select">
          <MultiSelect
            handleSelectChange={handleSelectChange}
            removeSelected={removeSelected}
            options={guests}
            value={value}
          />
        </div>
        <div>
          <button className="save-button">Save</button>
        </div>
      </form>
    </div>

  );
}

export default DinnersForm;
