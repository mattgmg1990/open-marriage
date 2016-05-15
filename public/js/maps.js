YUI.add('le-maps', function (Y) {
    Y.all('[data-map]').each(function (mapNode) {
        L.mapbox.accessToken = 'pk.eyJ1IjoibWF0dGdtZzE5OTAiLCJhIjoiY2lqOTI2OHExMDAyOXU5bHgycWNobmhmNiJ9.kr4S4yXPInDnGVDKf0dSzg';
        mapId = mapNode.getData('map');
        map = L.mapbox.map(mapNode.getDOMNode(), mapId, {attributionControl : false});
    });

}, '1.8.0', {
    requires: ['node-base', 'mapbox']
});
