// date operations
var start: Date = scheduler.date.week_start(new Date());
var next: Date = scheduler.date.add(new Date(), 1, "week");

// hotkeys
scheduler.keys.edit_cancel = 13;

// config options
scheduler.config.details_on_create = true;
scheduler.config.xml_date = "%m-%d-%Y";
scheduler.xy.bar_height = 40;

// templates
scheduler.templates.event_class = function(start: Date, end: Date, event: any) {
    if (event.some) {
        return "classA";
    } else {
        return "classB";
    }
};

// locale
scheduler.locale.labels.week_tab = "7 days";

// API
scheduler.init("scheduler_here", start);
scheduler.load("/data/events");

// events
scheduler.attachEvent("onEmptyClick", function(ev?: Event) {
    var date: Date = scheduler.getActionData(ev).date;
});
// filters
scheduler.filter_week = (id: string, e: Event) => true;

// enterprise version
var scheduler2 = Scheduler.getSchedulerInstance();
scheduler2.addEvent({ some: 1 });

// map function for prev/next arrows
scheduler.date.add_map = function(date, inc) {
    return scheduler.date.add(date, inc, "month");
};
