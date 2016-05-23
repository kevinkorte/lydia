Meteor.publish('story.public', function() {
  return Stories.find({});
});
