import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import { Clients } from "../../api/clients";

class ClientsPage extends Component {
  render() {
    console.log(this.props.clients);
    return (
      <div>
        Clients Page
      </div>
    );
  }
}

ClientsPage.propTypes = {};

export default withTracker(() => {
  Meteor.subscribe('clients');

  return {
    clients: Clients.find({}).fetch()
  }
})(ClientsPage);
