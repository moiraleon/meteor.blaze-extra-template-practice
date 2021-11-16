import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.startup(function() {
  if (!FlowRouter._askedToWait) {
     FlowRouter.initialize();
  }
});
