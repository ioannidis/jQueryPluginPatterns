(function($, window, document, undefined) {

    // Choose your plugin name and the default data
    var pluginName = "myNewPlugin",
        defaults = {
            key: "value"
        };

    function NewPlugin( element, options) {

        this._defaults      = defaults;
        this._pluginName    = pluginName;
        this.$el            = element;

        // Combine defaults and options to create a new object
        this.options        = $.extend({}, this._defaults, options);

        // Plugin initialization
        this._init();

    }

    NewPlugin.prototype._init = function() {
        //Add here your initialization code
        // e.g alert(1);
    };

    // Register your new plugin to jQuery proto
    $.fn[pluginName] = function( options ) {

        // Prevent multiple initialization
        return this.each( function() {
            if ( !$.data(this, pluginName) ) {
                $.data(this, pluginName , new NewPlugin( this, options));
            }
        });
    }

})(jQuery, window, document);