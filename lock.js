// Check password here 
const correctPassword = [10, 12, 10, 11, 11];

function checkPassword() {
    const dials = document.querySelectorAll('.dial');
    const enteredPassword = Array.from(dials).map(dial => Number(dial.value));
    const decodedPassword = [
        enteredPassword[0] + enteredPassword[1] + enteredPassword[2],
        enteredPassword[1] + enteredPassword[2] + enteredPassword[3],
        enteredPassword[2] + enteredPassword[3] + enteredPassword[4],
        enteredPassword[3] + enteredPassword[4] + enteredPassword[0],
        enteredPassword[4] + enteredPassword[0] + enteredPassword[1],
    ];
    if (JSON.stringify(decodedPassword) === JSON.stringify(correctPassword)) {
        const passwordString = enteredPassword.join('');
        const hexPassword = new TextEncoder().encode(passwordString).reduce((prev, curr) => prev + curr.toString(16).padStart(2, '0'), '');
        const base64Password = btoa(hexPassword);
        alert("Congratulation! Your password is : BKSEC{" + base64Password + "}");
    } else {
        alert('Wrong password! Let u cook!');
    }
}
