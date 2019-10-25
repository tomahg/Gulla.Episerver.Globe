//viewonwebsite/ViewOnWebsiteCommand.js
define([
        "dojo/_base/declare",
        "epi/shell/command/_Command",
        "dojo/topic",
        "epi/dependency"
    ],
    function (declare, _Command, topic, dependency) {
        return declare([_Command],
            {
                name: "ViewOnWebsite",
                iconClass: "epi-iconWebsite",
                canExecute: true,

                constructor: function () {
                    var contextService = dependency.resolve("epi.shell.ContextService");
                    var currentContext = contextService.currentContext;
                    this._contextChanged(currentContext);

                    topic.subscribe("/epi/shell/context/changed", this._contextChanged);
                },

                _contextChanged: function (newContext) {
                    if (!newContext) {
                        return;
                    }

                    viewOnWebsite = newContext.publicUrl;
                },

                _execute: function () {
                    if (viewOnWebsite) {
                        window.open(viewOnWebsite);
                    } else {
                        alert('Content has no public URL.');
                    }
                }
            });
    }
);