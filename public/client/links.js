Shortly.Links = Backbone.Collection.extend({

  model: Shortly.Link,
  url: '/links',

  sortStrategy: 'visitsDESC',

  comparator: function(item){
    return this.sortStrategies[this.sortStrategy](item);
  },

  sortStrategies: {
    visitsDESC: function(item){
      return -item.get('visits');
    },
    visitsASC: function(item){
      return item.get('visits');
    }
  }
});