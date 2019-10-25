//viewonwebsite/ViewOnWebsiteCommand.js
define([
        "dojo/_base/declare",
        "epi/shell/command/_Command",
        "epi/dependency"
    ],
    function (declare, _Command, dependency) {
        return declare([_Command],
            {
                name: "ViewOnWebsite",
                iconClass: "epi-iconWebsite",
                canExecute: true,

                _execute: function () {
                    var contextService = dependency.resolve("epi.shell.ContextService");
                    var currentContext = contextService.currentContext;
                    var publicUrl = currentContext.publicUrl;

                    if (publicUrl) {
                        window.open(publicUrl);
                    } else {
                        alert('Content has no public URL.');
                    }
                }
            });
    }
);