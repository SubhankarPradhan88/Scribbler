// Function to remove selected post from the postslist
function removePostHandler(flag) {
    if(flag === 'firstPost') {
        document.getElementById('firstPost').style.display = 'none';  // Set style display to 'none'
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
// Route to respective post's
function postHandler(flag) {
    if(flag === 'firstPost') {
        window.location.href = '../html/post.html#postSection_1';
    }else if(flag === 'secondPost') {
        window.location.href = '../html/post.html#postSection_2';
    }else if(flag === 'thirdPost') {
        window.location.href = '../html/post.html#postSection_3';
    }else if(flag === 'fourthPost') {
        window.location.href = '../html/post.html#postSection_4';
    }else if(flag === 'fifthPost') {
        window.location.href = '../html/post.html#postSection_5';
    }
}