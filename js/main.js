// Celcius to Farenheit

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

    const tempcf = parseFloat(celciusInput.value);

    const conversioncf = (tempcf*1.8)+32;

    if(isFinite(conversioncf)) {
        farenheitOutput.value = conversioncf.toFixed(2);

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


// Farenheit to Celcius


document.querySelector('#temp-form-fc').addEventListener('submit', function(e) {

    //document.querySelector('.result').style.display = 'none';

    //Make laoding img appear when submit clicked
    document.querySelector('#loading-fc').style.display = 'block';

    //Image will only appear for 2 seconds.
    setTimeout(calculateResultOne, 2000);
    
    //Stop results disappearing as soon as they are displayed.
    e.preventDefault();
});

function calculateResultOne() {
    //UI Vars
    const farenheitInput = document.querySelector('#farenheit-input');

    const celciusOutput = document.querySelector('#celcius');

    const tempfc = parseFloat(farenheitInput.value);

    const conversionfc = (tempfc-32)/1.8;

    if(isFinite(conversionfc)) {
        celciusOutput.value = conversionfc.toFixed(2);

        document.querySelector('#loading-fc').style.display = 'none';
    } else {
        showErrorOne('Please enter a valid temperature')
    }
    
}

function showErrorOne(error) {
    document.querySelector('#loading-fc').style.display = 'none';

    const errorDivOne = document.createElement('div');

    const cardOne = document.querySelector('#card-one');
    const headingOne = document.querySelector('#heading-one');

    errorDivOne.className = 'alert alert-danger';

    errorDivOne.appendChild(document.createTextNode(error));

    cardOne.insertBefore(errorDivOne, headingOne);

    setTimeout(clearError, 3000);
}

function clearError() {
    document.querySelector('.alert').remove();
}
