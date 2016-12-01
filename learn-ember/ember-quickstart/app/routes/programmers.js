import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ['James Gosling', 'Andrew Hunt', 'Yukihiro Matsumoto', 'David Thomas'];
  }
});
