var baudio = require('baudio');
var tau = 2 * Math.PI;

var b = baudio(function (t) {
    return square(400) * (sin(3) + sin(4) + sin(5));
    
    function sin (freq) {
        return Math.sin(tau * t * freq);
    }
    
    function square (freq) {
        return Math.sin(tau * t * freq) < 0 ? -1 : 1;
    }
});
b.play();
