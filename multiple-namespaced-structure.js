(function( $ ) {

    // If there is no namespace, create one and assign an empty object
    if (!$.nameSpace) {
        $.nameSpace = {};
    }

    // My plugin logic appended to my namespace
    $.nameSpace.myNewPlugin = function (element, params, options) {

        this.$el = $(element);
        this.$el.data("nameSpace.myNewPlugin", this);

        // Using es6 arrow function
        this.init = () => {
            this.params = params;
            // Combine defaults and options to create a new object
            this.options = $.extend({}, this.defaults, options);
        };

        // Add more functions
        // this.myFunc = () => {};

        // Initialize plugin
        this.init();

    };

    // Add and object with the default options
    $.nameSpace.myNewPlugin.defaults = {
        key: "value"
    };

    $.fn.myPlugin = function ( params, options ) {
        return this.each(function() {
            new $.nameSpace.myNewPlugin( this, params, options);
        });

        // Prevent multiple initialization
        // return this.each(function( params, options ) {
        //     if (!$.data(this, "nameSpace.myNamePlugin")){
        //         new $.nameSpace.myNewPlugin( this, params, options);
        //     }
        // });

    };


})( jQuery );