var map = document.querySelector('#map');

var paths = map.querySelectorAll('.map__image a');

var links = map.querySelectorAll('.map__list a');

// Polyfill du forEach

if (NodeList.prototype.forEach == undefined) {
    NodeList.prototype.forEach = function (callback) {
        [].forEach.call(this, callback)
    };
};

paths.forEach(function (path) {
    path.addEventListener('mouseenter', function (e) {

        var id = this.id.replace('region-', '');

        map.querySelectorAll('.is-active').forEach(function (item) {
            item.classList.remove('is-active');
        });
        

        if (id !== undefined) {
            document.querySelector('#list-' + id).classList.add('is-active');
            document.querySelector('#region-' + id).classList.add('is-active');

        }
    });
});