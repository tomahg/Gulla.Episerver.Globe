//globe/CustomToolbarProvider
define([
        "dojo/_base/declare",
        "dijit/form/Button",
        "epi-cms/component/command/_GlobalToolbarCommandProvider",
        "globe/ViewOnWebsiteCommand",
        "dojo/topic",
        "dojo/_base/lang"
    ],
    function (declare, Button, _GlobalToolbarCommandProvider, ViewOnWebsiteCommand, topic, lang) {
        return declare([_GlobalToolbarCommandProvider],
            {
                constructor: function () {
                    this.inherited(arguments);
                    this.addToTrailing(new ViewOnWebsiteCommand(), { showLabel: false, widget: Button });
                    topic.subscribe("/epi/shell/context/changed", lang.hitch(this, this._contextChanged));
                },

                // Executes when the context changes, i.e. nodes in the page tree are clicked
                // Show correct icon and tooltip on after context change
                _contextChanged: function (newContext) {
                    if (!newContext) {
                        return;
                    }

                    this.commands[0].set('iconClass', newContext.publicUrl ? "epi-iconWebsite" : "epi-iconLock");
                    this.commands[0].set('label', newContext.publicUrl ? "View on website" : "Content has no URL");
                } 
            });
    }
);