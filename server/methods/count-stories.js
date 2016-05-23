Meteor.methods({
  countStories: function() {
    return Stories.find().count();
  }
});
