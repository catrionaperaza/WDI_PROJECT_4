import React from 'react';

import BackButton from '../utility/BackButton';
import AutoComplete from '../utility/BackButton';

function DinnersForm({ handleSubmit, handleChange, handleLocationChange, dinner}) {
  return (
    <div className="row">
      <div className="page-banner col-md-12">
        <BackButton history={history} />
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
          <label>Address</label>
          <AutoComplete handleChange={handleLocationChange} />
          <input
            type="text"
            className="form-control"
            id="formatted-address"
            name="formatted-address"
            value={dinner.formatted_address}
            onChange={handleChange}
          />
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
        <div className="form-group">
          <label htmlFor="createdBy">Host: </label>
          <input
            type="text"
            className="form-control"
            id="createdBy"
            name="createdBy"
            value={dinner.createdBy}
            onChange={handleChange}
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
