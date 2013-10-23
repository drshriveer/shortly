Shortly.Links = Backbone.Collection.extend({

  model: Shortly.Link,
  url: '/links',

  comparator: function(item){
    return -item.get('visits');
  }

  // strategies: {
  //   mostVistited: function(){

  //   },
  //   lastVisited: function(){

  //   }
  // }
});