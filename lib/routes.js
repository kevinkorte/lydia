FlowRouter.route('/', {
  name: 'front-page',
  action: function() {
    BlazeLayout.render('frontPage', {main: 'home'});
  }
});
