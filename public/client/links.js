Shortly.Links = Backbone.Collection.extend({

  model: Shortly.Link,
  url: '/links',

  sortStrategy: 'lastVisitsDESC',

  comparator: function(item){
    return this.sortStrategies[this.sortStrategy](item);
  },

  sortStrategies: {
    visitsDESC: function(item){
      return -item.get('visits');
    },
    visitsASC: function(item){
      return item.get('visits');
    },
    lastVisitsDESC: function(item){
      return -(new Date(item.get('last_visited')).getTime());
    },
    lastVisitsASC: function(item){
      return (new Date(item.get('last_visited')).getTime());
    }
  }
});