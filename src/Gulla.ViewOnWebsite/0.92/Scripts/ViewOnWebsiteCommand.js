//viewonwebsite/ViewOnWebsiteCommand.js
define([
        "dojo/_base/declare",
        "epi/shell/command/_Command",
        "epi/dependency",
        "dojo/topic"
    ],
    function (declare, _Command, dependency, topic) {
        return declare([_Command],
            {
                name: "ViewOnWebsite",
                iconClass: "epi-iconWebsite",
                canExecute: true,

                // Show correct icon and tooltip on initial page load
                constructor: function () {
                    var contextService = dependency.resolve("epi.shell.ContextService");
                    var currentContext = contextService.currentContext;

                    if (currentContext) {
                        this.set('iconClass', currentContext.publicUrl ? "epi-iconWebsite" : "epi-iconLock");
                        this.set('label', currentContext.publicUrl ? "View on website" : "Content has no URL");
                    }
                },

                // Executes when toolbar button is clicked
                _execute: function () {
                    var contextService = dependency.resolve("epi.shell.ContextService");
                    var currentContext = contextService.currentContext;
                    var publicUrl = currentContext.publicUrl;

                    if (publicUrl) {
                        window.open(publicUrl);
                    }
                }
            });
    }
);