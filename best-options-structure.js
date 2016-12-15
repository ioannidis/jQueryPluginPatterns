(function( $, window, document, undefined ) {

    $.fn.myNewPlugin = function( userOptions ) {

        $.extend( {}, $.fn.myNewPlugin.options, userOptions );

        return this.each(function() {
             var $el = $(this);
        });

    };

    $.fn.myNewPlugin.options = {
        key: "value"
    };

})( jQuery, window, document );