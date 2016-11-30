# Meteor Pub-Sub Example App
This application illustrates the use of various Meteor pub-sub patterns including

* Publishing a publication, subscribing to it, then displaying a list of documents
* Displaying a loading template while waiting for a subscription to be ready
* Publishing many documents with a subset of keys
* Drilling into a single document and getting the remaining keys
* Pagination
* Joining two collections in a publication using the [reywood:publish-composite](https://atmospherejs.com/reywood/publish-composite) package
* Displaying two joined collections
* Subscribing based on a route parameter
* Reactively displaying new documents
* Observing changes

This sample application will have one route for each of the patterns listed above. Some patterns may be combined.

Eventually this sample application will be described in a post on [The Meteor Chef](http://themeteorchef.com)

Based on [base](https://github.com/themeteorchef/base).
This means ReactJS and FlowRouter rather than Blaze and Iron-Router.
