var fs = require('fs')
fs.readFile('./integration/info.json', 'utf8', function(err, data) {
    json = JSON.parse(data)
    groceries(json)
});

var groceries = function(json) {
    for (var i = 0; i<json.length; i++) {
        if (json[i].Text.toLowerCase() === "dagligvarer") {
            flatten(json[i])
        }
    }
}

var flatten = function(groceries, collected=[]) {
    if (Array.isArray(groceries)) {
        groceries.forEach(function (grocery) {
            flatten(grocery, collected);
        });
    }
    if ( groceries.Children == null || groceries.Children.length === 0) {
        
        console.log(groceries);
    }
    else {
        flatten(groceries.Children, collected)
    }
}

