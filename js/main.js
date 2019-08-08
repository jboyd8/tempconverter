document.querySelector('#temp-form-c2f').addEventListener('submit', function(e) {

    //Make laoding img appear when submit clicked
    document.querySelector('#loading-c2f').style.display = 'block';

    //Image will only appear for 2 seconds.
    setTimeout(calculateTempCelciusToFarenheit, 2000);
    
    //Stop results disappearing as soon as they are displayed.
    e.preventDefault();
})