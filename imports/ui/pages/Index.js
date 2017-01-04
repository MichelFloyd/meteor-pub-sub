import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const version = Meteor.valueOf('version').release; // get the version of Meteor in use

const Index = () => (
  <div className="Index">
    <Jumbotron className="text-center">
      <h2>Meteor Pub-Sub</h2>
      <p>A sample application that illustrates pub-sub patterns in MeteorJS.</p>
      <p>Running { version }</p>
      <p>Hit ctrl-m to examine data with mongol</p>
    </Jumbotron>
  </div>
);

export default Index;
