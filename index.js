function addingEventListener() {
    const button = document.getElementById('button');

    function clickHandler() {
        alert('I was clicked!');
    }
    button.addEventListener('click', clickHandler);
}

addingEventListener();
