(function($,window){
    lite.Slide = lite.Widget.extend({
        initialize: function(options){
            options || (options = {});
            options.type = 'slide';
            lite.Slide.superclass.initialize.call(this,options);
            return this;
        },
        build: function(){

            return this;
        }
    })
})($,window);