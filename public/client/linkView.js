Shortly.LinkView = Backbone.View.extend({

  className: 'link',

  template: _.template(' \
      <img src="/redirect_icon.png"/> \
      <div class="info"> \
        <div class="visits"><span class="count"><%= visits %></span>Visits.  Last on: <%= function(){ if(last_visited === null){ return "never";}else{return new Date(last_visited).toDateString() + " at "+new Date(last_visited).toLocaleTimeString();}}() %></div> \
        <div class="title"><%= title %></div> \
        <div class="original"><%= url %></div> \
        <a href="<%= base_url %>/<%= code %>"><%= base_url %>/<%= code %></a> <a href="<%= base_url %>/<%= code %>/stats">(stats)</a> \
      </div>'
  ),

  render: function() {
    this.$el.html( this.template(this.model.attributes) );
    return this;
  }

});