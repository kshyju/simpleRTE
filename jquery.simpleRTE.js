(function ($, window, document, undefined) {
    if (!$.techiesweb) {
        $.techiesweb = {};
    };
    $.fn.simpleRTE = function (options) {

        var settings = {           
            minwidth: 100,
            height: 100,
            bgcolor: "#FFF",
            borderColor: "#DCDCDC"
        };

        $.extend(true, settings, options);

        return this.each(function () {
            var _self = $(this);
            var elementWidth = _self.width();
            elementWidth = elementWidth - 8;
            var toolbar = '<div class="srteToolbar" style="background-color:#F5F5F5; min-width:' + settings.minwidth + 'px;"><button class="srteBold">B</button><button class="srteItalic">I</button><button class="srteUnderline">U</button><button class="srteImage">IMG</button><button class="srteLink">LINK</button></div>';
            var previewDiv = '<div class="previewContent" contenteditable="true" style="padding:2px;background-color:' + settings.bgcolor + ';min-width:' + settings.minwidth + 'px;width:' + elementWidth + 'px;height:' + settings.height + ';overflow:auto;"></div>';
            _self.html('<div class="srteContainer" style="border:1px solid ' + settings.borderColor + ';min-width:' + settings.minwidth + 'px;">' + toolbar + previewDiv + '</div>');

            //Events

            $(document).on("click", "button.srteItalic", function (e) {
                e.preventDefault();
                document.execCommand('italic', false, null);
            });

            $(document).on("click", "button.srteUnderline", function (e) {
                e.preventDefault();
                document.execCommand('underline', false, null);
            });

            $(document).on("click", "button.srteImage", function (e) {
                e.preventDefault();
                var src = prompt('Please specify the link of the image.');
                if (src) {
                    document.execCommand('insertImage', false, src);
                }
            });

            $(document).on("click", "button.srteLink", function (e) {
                e.preventDefault();
                var link = prompt('Please specify the link.');
                if (link) {
                    document.execCommand('createLink', false, link);
                }
            });

            $(document).on("click", "button.srteBold", function (e) {
                e.preventDefault();
                document.execCommand('bold', false, null);
            });

            //Events ends

        });  // return this.each      

    };
})(jQuery, window, document);