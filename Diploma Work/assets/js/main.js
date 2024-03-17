

!function() {
  
    var state = {
      left : false,
      right: false,
      up   : false,
      down : false,
      speed: 5,
    };
  
    var obj = document.getElementById('obj');
  
    function init() {
      document.body.addEventListener('keydown', function(e){
        if (37 === e.keyCode) state.left = true;
        if (38 === e.keyCode) state.up = true;
        if (39 === e.keyCode) state.right = true;
        if (40 === e.keyCode) state.down = true;
      });
  
      document.body.addEventListener('keyup', function(e){
        if (37 === e.keyCode) state.left = false;
        if (38 === e.keyCode) state.up = false;
        if (39 === e.keyCode) state.right = false;
        if (40 === e.keyCode) state.down = false;
      });
      
      // start event loop
      requestAnimationFrame(tick);
    }
  
    function tick() {
      var left = parseInt(obj.style.left);
      if (isNaN(left)) left = 0;
  
      var top = parseInt(obj.style.top);
      if (isNaN(top)) top = 0;
  
      if (state.right) obj.style.left = left + state.speed + 'px';
      if (state.left) obj.style.left = left - state.speed + 'px';
      if (state.up) obj.style.top = top - state.speed + 'px';
      if (state.down) obj.style.top = top + state.speed + 'px';
  
      // schedule the next tick of the event loop
      requestAnimationFrame(tick);
    }
  
    init();
  }();
  