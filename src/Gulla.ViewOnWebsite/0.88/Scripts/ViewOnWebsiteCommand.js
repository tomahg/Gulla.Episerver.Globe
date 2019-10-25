//viewonwebsite/ViewOnWebsiteCommand.js
define([
        "dojo/_base/declare",
        "epi/shell/command/_Command",
        "dojo/topic",
        "epi/dependency",
		"dojo/_base/lang"
    ],
    function (declare, _Command, topic, dependency, lang) {
        return declare([_Command],
            {
                name: "ViewOnWebsite",
                iconClass: "epi-iconWebsite",
                canExecute: true,

                constructor: function () {
                    var contextService = dependency.resolve("epi.shell.ContextService");
                    var currentContext = contextService.currentContext;
                    this._contextChanged(currentContext);

                    topic.subscribe("/epi/shell/context/changed", lang.hitch(this, this._contextChanged));
                },

                _contextChanged: function (newContext) {
                    if (!newContext) {
                        return;
                    }

                    this.viewOnWebsite = newContext.publicUrl;
                },

                _execute: function () {
                    if (this.viewOnWebsite) {
                        window.open(this.viewOnWebsite);
                    } else {
                        alert('Content has no public URL.');
                    }
                }
            });
    }
);