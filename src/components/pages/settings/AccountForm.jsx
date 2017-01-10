import React from 'react';

const AccountForm = () => (
  <form>
    <div className="form-group">
      <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
    </div>
    <div className="form-group">
      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
);

export default AccountForm;