export default viewManager()

function viewManager(){

    let modeStarted = false;
    let startedSetter = ()=>{}
    
  
    function start(){
        modeStarted = true;
        startedSetter(modeStarted)
    }
    
    function stop(){
        if(!modeStarted){ return false }
        modeStarted = false
        startedSetter(modeStarted)
    }

    function setStartedSetter(setter){
        startedSetter = setter
    }
   
    return {
        start,
        stop,
        setStartedSetter,
    }
  
}