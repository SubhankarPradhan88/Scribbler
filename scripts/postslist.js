// Function to remove selected post from the postslist
function removePostHandler(flag) {
    if(flag === 'firstPost') {
        document.getElementById('firstPost').style.display = 'none';
    }else if(flag === 'secondPost') {
        document.getElementById('secondPost').style.display = 'none';
    }else if(flag === 'thirdPost') {
        document.getElementById('thirdPost').style.display = 'none';
    }else if(flag === 'fourthPost') {
        document.getElementById('fourthPost').style.display = 'none';
    }else if(flag === 'fifthPost') {
        document.getElementById('fifthPost').style.display = 'none';
    }
}
// Route to the home screen
function homeRouteHandler() {
    window.location.href = '../index.html';
}