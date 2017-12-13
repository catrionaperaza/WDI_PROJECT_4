import React from 'react';
import AutoComplete from '../utility/AutoComplete';

const RegisterForm = ({ handleChange, handleSubmit, handleLocationChange, user }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={handleChange}
          value={user.name}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Landmark or station near your home (please do not give your exact address for security reasons)</label>
        <AutoComplete handleChange={handleLocationChange} />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="email"
          placeholder="Email"
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
          placeholder="image link"
          onChange={handleChange}
          value={user.image}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="bio"
          placeholder="bio"
          onChange={handleChange}
          value={user.bio}
          className="form-control"
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
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default RegisterForm;
