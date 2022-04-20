
/*
    //Usage
    SwiftNumeric.prepare('.integer');
*/

const SwiftNumeric = {};

SwiftNumeric.allowIntegerOnly = evt => {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    if (key === undefined) {
        return;
    }

      //Allow Shift, CTRL, ALT, SpaceBar, Enter  //ref - https://keycode.info/
    if (key == 16 || key == 17 || key == 18 || key == 13){
        return;
    }

    key = String.fromCharCode( key );
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
      alert('Only numbers (0-9) allowed.');
    }
  }

SwiftNumeric.prepare = selector =>{
    document.querySelectorAll(selector).forEach(textbox=>{
        textbox.addEventListener('keypress', event=>{
            SwiftNumeric.allowIntegerOnly(event);
        })
    });
}
