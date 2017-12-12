import React from 'react';
import AutoComplete from '../utility/AutoComplete';
import BackButton from '../utility/BackButton';

function UsersForm ({ handleSubmit, handleChange, handleLocationChange, user }) {
  return (
    <div className="row">
      <div className="page-banner col-md-12">
        <BackButton history={history} />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="name"
            value={user.name}
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
            name="username"
            placeholder="Username"
            value={user.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="image"
            placeholder="image link"
            value={user.image}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="bio"
            id="bio"
            placeholder="bio"
            value={user.bio}
            onChange={handleChange}
          />
        </div>
        {/* <div className="form-group">
          <select>
            <option value="user.attendee" onChange={handleChange}>Yes</option>
            <option value="">No</option>
          </select>
        </div> */}
        <div>
          <button className="save-button">Save</button>
        </div>
      </form>
    </div>
  );
}

export default UsersForm;
