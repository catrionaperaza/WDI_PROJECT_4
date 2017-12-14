import React from 'react';
import AutoComplete from '../utility/AutoComplete';

const RegisterForm = ({ handleChange, handleSubmit, handleLocationChange, user }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          value={user.name}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <AutoComplete handleChange={handleLocationChange} />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
          value={user.email}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={user.password}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="passwordConfirmation"
          placeholder="Confirm Password"
          onChange={handleChange}
          value={user.passwordConfirmation}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="image"
          placeholder="Image Link"
          onChange={handleChange}
          value={user.image}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="bio"
          placeholder="Bio - so hosts can get to know you!"
          onChange={handleChange}
          value={user.bio}
          className="form-control"
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
      <button className="save-button">Save</button>
    </form>
  );
};

export default RegisterForm;
