FlowRouter.route('/', {
  name: 'front-page',
  action: function() {
    BlazeLayout.render('frontPage', {main: 'home'});
  }
});

FlowRouter.route('/new', {
  name: 'new',
  action: function() {
    BlazeLayout.render('frontPage', {main: 'new'});
  }
});
