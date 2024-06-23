function addingEventListener() {
    const button = document.getElementById('button');
  
    function clickAlert() {
      alert('Button was clicked!');
    }
  
    button.addEventListener('click', clickAlert);
  }
  
  addingEventListener();
  