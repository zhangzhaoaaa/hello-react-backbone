define(function(require,exports, module) {
    var $ = require('jquery');
    var React = require('react');
    var Backbone = require('backbone');
    var HelloMessage = require('./components/HelloMessage');
    var ReactApp={
        getJsonData:function(data){
            alert('收集数据！'+data);
        },
        getInstance:function(model,options){
            var modelData = new Backbone.Model(model);
            React.render(<HelloMessage data={modelData} onGetJsonData={this.getJsonData} />, $('#example')[0]);
        }
    };
    return ReactApp;
});

