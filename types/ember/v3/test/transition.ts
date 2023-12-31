import Transition from "@ember/routing/-private/transition";
import Ember from "ember";

Ember.Route.extend({
    beforeModel(transition: Transition) {
        if (new Date() > new Date("January 1, 1980")) {
            alert("Sorry, you need a time machine to enter this route.");
            transition.abort();
        }
    },
});

Ember.Controller.extend({
    previousTransition: null as Transition | null,

    actions: {
        login() {
            // Log the user in, then reattempt previous transition if it exists.
            const previousTransition = this.get("previousTransition");
            if (previousTransition) {
                this.set("previousTransition", null);
                previousTransition.retry();
            } else {
                // Default back to homepage
                this.transitionToRoute("index");
            }
        },
    },
});
