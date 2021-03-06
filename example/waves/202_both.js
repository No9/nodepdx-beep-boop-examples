var baudio = require('baudio');
var tau = 2 * Math.PI;

var b = baudio(function (t) {
    return (sin(200) + sin(1600)) / 2;
    
    function sin (freq) {
        return Math.sin(tau * t * freq);
    }
});
b.play();
