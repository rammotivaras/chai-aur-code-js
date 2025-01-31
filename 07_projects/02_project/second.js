const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseFloat(document.querySelector('#height').value); // Fix: Parse as float
    const weight = parseFloat(document.querySelector('#weight').value); // Fix: Select correct ID
    const results = document.querySelector('#results');

    if (!height || height <= 0 || isNaN(height)) {
        results.innerHTML = `<p style="color: red;">Please enter a valid height!</p>`;
        return;
    }

    if (!weight || weight <= 0 || isNaN(weight)) {
        results.innerHTML = `<p style="color: red;">Please enter a valid weight!</p>`;
        return;
    }

    // Calculate BMI
    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);

    // Determine BMI category
    let message = "";
    if (bmi < 18.6) {
        message = "You are underweight.";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        message = "You are in the normal weight range.";
    } else {
        message = "You are overweight.";
    }

    // Display BMI result
    results.innerHTML = `<p>Your BMI is <strong>${bmi}</strong>. ${message}</p>`;
});
