import React from 'react';
import AutoComplete from '../utility/AutoComplete';
import BackButton from '../utility/BackButton';

function UsersForm ({ handleSubmit, handleChange, handleLocationChange, user }) {
  return (
    <form onSubmit={handleSubmit}>
      <BackButton history={history} />
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
        <label>formatted_address</label>
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
          name="password"
          placeholder="Password"
          value={user.password}
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
          placeholder="bio"
          value={user.bio}
          onChange={handleChange}
        />
      </div>
      <div>
        <button className="btn btn-primary">Submit</button>
      </div>
    </form>
  );
}

export default UsersForm;
