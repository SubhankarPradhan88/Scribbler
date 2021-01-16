let removePostmodal = document.getElementById("delPostConfirm");        // Capture the delete modal confirmation
let selectedPost = '';
// Remove post modal comfirmation function
function removePostModal(flag) {
    selectedPost = flag;                                                // Set the recieved selected post argument to the global variable
    document.getElementById("delPostConfirm").style.display = "block";  // Click event to open the delete post modal
}
// Click event on select of 'Yes' button on the Delete Modal
document.getElementById('delPost').addEventListener('click', function() {
    removePostHandler(selectedPost);                                        // Invoke delete function for the selected post
    document.getElementById("delPostConfirm").style.display = "none";       // Close the Modal after selecting 'Yes'
});
// Click event on select of 'No' button on the Delete Modal
document.getElementById('cancelDel').addEventListener('click', function() {
    selectedPost = '';                                                      // Set the variable back to it's initial value / Clearing the selected state
    document.getElementById("delPostConfirm").style.display = "none";       // Close the Modal after selecting 'No'
});

// Clicks handler when clicked anywhere outside of the modal, by closing the modal
window.onclick = function(event) {
  if (event.target == removePostmodal) {
    document.getElementById("delPostConfirm").style.display = "none";
  }
}

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

// Route to respective post's
function postHandler(flag) {
    if(flag === 'firstPost') {
        window.location.href = '../html/post.html#postSection_1';       // Jump's to the selected post section due to the anchor tag
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
