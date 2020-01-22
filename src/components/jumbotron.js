import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

const Example = (props) => {
  return (
      <div className="col">
      <Jumbotron>
        <h1 className="display-3">TEXT TEXT TEXT</h1>
        <p className="lead">Das ist eine einfache Komponente.</p>
        <hr className="my-2" />
        <p>Man kann verschiedene Text und Schriftarten nutzen.</p>
        <p className="lead">
        <Button color="primary"><FontAwesomeIcon icon={faPaw} />PAWFECT</Button>
        </p>
      </Jumbotron>
      </div>
  );
};

export default Example;
