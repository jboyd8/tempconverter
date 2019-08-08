document.querySelector('#temp-form-c2f').addEventListener('submit', function(e) {

    //document.querySelector('.result').style.display = 'none';

    //Make laoding img appear when submit clicked
    document.querySelector('#loading-cf').style.display = 'block';

    //Image will only appear for 2 seconds.
    setTimeout(calculateResult, 2000);
    
    //Stop results disappearing as soon as they are displayed.
    e.preventDefault();
});

function calculateResult() {
    //UI Vars
    const celciusInput = document.querySelector('#celcius-input');

    const farenheitOutput = document.querySelector('#farenheit');

    const temp = parseFloat(celciusInput.value);

    const conversion = (temp*1.8)+32;

    if(isFinite(conversion)) {
        farenheitOutput.value = conversion.toFixed(2);

        document.querySelector('#loading-cf').style.display = 'none';
    } else {
        showError('Please enter a valid temperature')
    }
    
}

function showError(error) {
    document.querySelector('#loading-cf').style.display = 'none';

    const errorDiv = document.createElement('div');

    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    errorDiv.className = 'alert alert-danger';

    errorDiv.appendChild(document.createTextNode(error));

    card.insertBefore(errorDiv, heading);

    setTimeout(clearError, 3000);
}

function clearError() {
    document.querySelector('.alert').remove();
}

