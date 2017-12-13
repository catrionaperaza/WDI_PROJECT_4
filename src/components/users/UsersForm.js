import React from 'react';
import AutoComplete from '../utility/AutoComplete';

function UsersForm ({ handleSubmit, handleChange, handleLocationChange, user }) {
  return (
    <div className="row">
      <div className="page-banner col-md-12">
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
        <div className="form-group">
          <input
            type="text"
            name="attendeeOrHost"
            placeholder="Please list as Attendee or Host"
            onChange={handleChange}
            value={user.attendeeOrHost}
            className="form-control"
          />
        </div>
        <div>
          <button className="save-button">Save</button>
        </div>
      </form>
    </div>
  );
}

export default UsersForm;
