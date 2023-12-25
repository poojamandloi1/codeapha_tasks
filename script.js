function calculateAge() {
    // Get the user's input
    const dobInput = document.getElementById('dob').value;

    // Create a Date object from the input
    const dob = new Date(dobInput);

    // Get the current date
    const currentDate = new Date();

    // Calculate the age
    const age = currentDate.getFullYear() - dob.getFullYear();

    // Check if the birthday has occurred this year
    if (
        currentDate.getMonth() < dob.getMonth() ||
        (currentDate.getMonth() === dob.getMonth() && currentDate.getDate() < dob.getDate())
    ) {
        // If not, subtract 1 from the age
        document.getElementById('result').innerText = `Your age is ${age - 1} years.`;
    } else {
        document.getElementById('result').innerText = `Your age is ${age} years.`;
    }
}
