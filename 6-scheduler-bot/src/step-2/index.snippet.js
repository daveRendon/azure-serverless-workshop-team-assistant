var scheduledEvents = [];

//Add all scheduled events into an array
req.body.forEach(function (calendar) {
    calendar.items.forEach(function (items) {
        scheduledEvents.push({
            start: new Date(items['start']).toLocaleTimeString('en-US', { hour12: false }),
            end: new Date(items['end']).toLocaleTimeString('en-US', { hour12: false })
        });
        context.log(items['start']);
        context.log(new Date(items['start']).getUTCHours());
    })
});