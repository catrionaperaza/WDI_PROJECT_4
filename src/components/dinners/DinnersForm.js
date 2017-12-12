import React from 'react';
import AutoComplete from '../utility/AutoComplete';
import MultiSelect from '../utility/MultiSelect';

function DinnersForm({ handleSubmit, handleChange, handleLocationChange, dinner, handleSelectChange, removeSelected, attendees, value}) {
  return (
    <div className="row">
      <div className="page-banner col-md-12">
      </div>
      <form onSubmit={handleSubmit} className="col-md-6">
        <div className="form-group">
          <label htmlFor="title">Event Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={dinner.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Landmark or station near your home (please do not give your exact address for security reasons)</label>
          <AutoComplete handleChange={handleLocationChange} />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="image"
            placeholder="image link"
            value={dinner.image}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="avail_places">Available places: </label>
          <input
            type="Number"
            className="form-control"
            name="avail_places"
            placeholder="available places"
            value={dinner.avail_places}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Dinner Event Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={dinner.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <MultiSelect
            handleSelectChange={handleSelectChange}
            removeSelected={removeSelected}
            options={attendees}
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
