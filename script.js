//your JS code here. If required.
document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally
    
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    
    if (name === "" || isNaN(age)) {
        alert("Both fields are required.");
        return;
    }
    
    const ageValidationPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age > 18) {
                resolve();
            } else {
                reject();
            }
        }, 4000);
    });
    
    ageValidationPromise
        .then(() => {
            alert(`Welcome, ${name}. You can vote.`);
        })
        .catch(() => {
            alert(`Oh sorry ${name}. You aren't old enough.`);
        });
});
