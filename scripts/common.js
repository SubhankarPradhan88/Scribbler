// Click handler for Sign Up link
function signUpModal(e) {
    e.preventDefault();   // To prevent further propagation of the current event
    e.stopPropagation();  // To prevent the default action made by the browser on button click
    document.getElementById('closeSignInModal').click();  // Trigger click to close the Sign In Modal
    document.getElementById('signUpInModal').click();  // Trigger click to open the Sign Up Modal
    return false;
}
// Check madatory fields validation for Sign Up action
document.getElementById('signUpAction').addEventListener('click', function() {
    if(!document.getElementById('name').value.trim() || 
    !document.getElementById('userName').value.trim() || 
    !document.getElementById('userPassword').value.trim() ||
    !document.getElementById('confirmPassword').value.trim()) {
        return false;
    }
});
// Check madatory fields validation for Sign In action
document.getElementById('signInAction').addEventListener('click', function() {
    if(!document.getElementById('signInName').value.trim() || 
    !document.getElementById('signInPassword').value.trim()) {
        return false;
    }
});
// Route to the home screen
function homeRouteHandler() {
    window.location.href = '../index.html';
}