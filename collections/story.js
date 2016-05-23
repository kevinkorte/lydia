Stories = new Mongo.Collection("stories");

Stories.allow({
  insert: function(userId, doc) {
    return !!userId;
  }
});

Stories.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  body: {
    type: String,
    label: "Body",
  },
  author: {
    type: String,
    label: "User",
    autoValue: function() {
      return this.userId
    },
    autoform: {
      type: "hidden"
    }
  },
  createdAt: {
    type: Date,
    label: "Created At",
    autoValue: function() {
      return new Date()
    },
    autoform: {
      type: "hidden"
    }
  }
}));
