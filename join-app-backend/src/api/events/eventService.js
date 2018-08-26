const Event = require('./event')

Event.methods(['get','post', 'put', 'delete'])
Event.updateOptions({ new: true, runValidators: true })

module.exports = function (router) 
{
    Event.register(router, '/events')

    router.get('/events/agenda', function(req, res) {

        Event.find({}, function(err, events) {
            var eventMap = []
        
            events.forEach(function(e) {
                eventMap.push(e)
            });
        
            res.status(200).json({ today: new Date().toJSON().slice(0,10).replace(/-/g,'-'), data: eventMap })
        });
    })
}