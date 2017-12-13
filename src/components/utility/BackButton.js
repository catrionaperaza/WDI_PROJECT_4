import React from 'react';
import { withRouter } from 'react-router-dom';

import { Button } from 'react-bootstrap';

const BackButton = ({ history }) => {
  return (
    <div>
      <Button onClick={history.goBack} className="small-button" bsStyle="primary">Go Back
      </Button>
    </div>
  );
};





export default withRouter(BackButton);
