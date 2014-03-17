(function (window, $) {
    var lite = window.lite;
    lite.Form = lite.Widget.extend({
        initialize: function (options) {
            lite.Form.superclass.initialize.call(this, options);
        },
        prepare: function (options) {
            this.events = {
                'init .submit': 'submit',
                'click .submit': 'submit'
            };
            this.observers = {};
            this.parameters = new lite.Parameter();
        },
        render: function () {
            this.$el = $('<div class="form"></div>')

        },
        addItem: function (type, widget) {
            var wid = new lite[type](widget);
            this.$el.append(wid.$el);
            return this;
        },
        submit: function () {
            var that = this;
            $.ajax({
                url: this.url,
                cache: false,
                success: function (data) {
                    var obs = that.observers,
                        k;
                    for (k in obs) {
                        obs[k].refresh(that.url + that.parameters.toUrl(), data);
                    }
                }
            });

        },
        setParameter: function () {

        },
        addObserver: function (observer) {
            this.observers[observer.id] = observer;
        },
        getObserver: function (observerId) {
            lite.isString(observerId) || (observerId = observerId.id);
            return this.observers[observerId];
        },
        removeObserver: function (observer) {
            lite.isString(observerId) || (observerId = observerId.id);
            delete this.observers[observerId];
        }
    })
})(window, $);