Template.home.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('story.public');
  })
});

Template.home.onRendered(function() {
  Meteor.call('countStories',function(error, result) {
    Session.set('countStories', result)
  });
});

Template.home.helpers({
  stories: ()=> {
    return Stories.find({}, {sort: {createdAt: -1}, reactive: false});
  },
  countStories: function() {
    if (Session.get('countStories') < Stories.find().count()) {
      var count = Stories.find().count() - Session.get('countStories');
      return "There are " + count + " new posts";
    }
  }
});
