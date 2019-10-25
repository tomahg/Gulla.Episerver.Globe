//viewonwebsite/CustomToolbarProvider
define([
        "dojo/_base/declare",
        "dijit/form/Button",
        "epi-cms/component/command/_GlobalToolbarCommandProvider",
        "viewonwebsite/ViewOnWebsiteCommand"
    ],
    function (declare, Button, _GlobalToolbarCommandProvider, ViewOnWebsiteCommand) {
        return declare([_GlobalToolbarCommandProvider],
            {
                constructor: function () {
                    this.inherited(arguments);

                    this.addToTrailing(new ViewOnWebsiteCommand(
                            { label: "View on website" }),
                            { showLabel: false, widget: Button });
                }
            });
    }
);