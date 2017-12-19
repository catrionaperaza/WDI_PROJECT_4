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
            id="username"
            name="username"
            placeholder="Your username"
            value={user.username}
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
            name="email"
            placeholder="Email Address"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="image"
            placeholder="Image Link"
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
            placeholder="Bio - so hosts can get to know you!"
            value={user.bio}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="guestOrHost"
            placeholder="Are you a Guest or a Host?"
            onChange={handleChange}
            value={user.guestOrHost}
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
