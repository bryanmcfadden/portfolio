function manageTouchDevices(){
    var isTouch = false //var to indicate current input type (is touch versus no touch)
    var isTouchTimer
    var curRootClass = '' //var indicating current document root class ("can-touch" or "")

    function addtouchclass(e){
        clearTimeout(isTouchTimer)
        isTouch = true
        if (curRootClass != 'can-touch'){ //add "can-touch' class if it's not already present
            curRootClass = 'can-touch'
            document.documentElement.classList.add(curRootClass)
        }
        isTouchTimer = setTimeout(function(){isTouch = false}, 500) //maintain "istouch" state for 500ms so removetouchclass doesn't get fired immediately following a touch event
    }

    function removetouchclass(e){
        if (!isTouch && curRootClass == 'can-touch'){ //remove 'can-touch' class if not triggered by a touch event and class is present
            isTouch = false
            curRootClass = ''
            document.documentElement.classList.remove('can-touch')
        }
    }

    document.addEventListener('touchstart', addtouchclass, false) //this event only gets called when input type is touch
    document.addEventListener('mouseover', removetouchclass, false) //this event gets called when input type is everything from touch to mouse/ trackpad
}



function isPropertySupported(property)
{
	/*
	Advanced function :
	function cssPropertyValueSupported(prop, value) {
  var d = document.createElement('div');
  d.style[prop] = value;
  return d.style[prop] === value;
  }
*/
	return property in document.body.style;
}

/*function getSupportedTransform() {
    var prefixes = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' ');
    var div = document.createElement('div');
    for(var i = 0; i < prefixes.length; i++) {
        if(div && div.style[prefixes[i]] !== undefined) {
            return prefixes[i];
        }
    }
    return false;
}*/
function isTransformSupported() {
    var prefixes = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' ');
    var div = document.createElement('div');
    for(var i = 0; i < prefixes.length; i++) {
        if(div && div.style[prefixes[i]] !== undefined) {
            return true;
        }
    }
    return false;
}

			// Function from David Walsh: http://davidwalsh.name/css-animation-callback
			function whichTransitionEvent(){
			  var t,
				  el = document.createElement("fakeelement");

			  var transitions = {
				"transition"      : "transitionend",
				"OTransition"     : "oTransitionEnd",
				"MozTransition"   : "transitionend",
				"WebkitTransition": "webkitTransitionEnd"
			  }

			  for (t in transitions){
				if (el.style[t] !== undefined){
					//console.log(el.style[t] !== undefined);
				  return transitions[t];
				}
			  }
			}

			var transitionEvent = whichTransitionEvent();
			//console.log(transitionEvent);
			/* $(this).one(transitionEvent, function(event) { // Do something when the transition ends });*/
