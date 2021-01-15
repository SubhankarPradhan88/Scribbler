const postsMasterArray = [
    {
        id: 1,
        title: `‘let’ me be a ‘const’(ant), not a ‘var’(iable)!`,
        author: 'Srishti Gupta',
        post: `Since JavaScript does not have any type-checking, either of these keywords can be used to declare a variable of any type (datatype) in JavaScript.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis luctus mi aliquam blandit. 
        Curabitur lorem sem, tristique a tincidunt sed, semper quis nunc. Curabitur at sagittis velit. 
        Pellentesque tincidunt euismod mauris nec consequat. Phasellus ullamcorper est odio, eget dignissim massa feugiat id. 
        Maecenas aliquet lectus urna, sit amet dignissim velit congue nec. Integer sed justo a ex tristique vestibulum. Proin lacinia egestas mollis. 
        Praesent non eleifend orci. Proin nec quam posuere, vestibulum turpis vel, convallis neque. 
        Etiam in massa quis nisi tristique facilisis id ac sapien. Vivamus sodales dui est, in iaculis enim mattis gravida. 
        Aenean lobortis massa et tempor pellentesque. Pellentesque ut purus in ligula commodo consectetur a et diam. 
        Maecenas volutpat ante eu nisl congue bibendum. Vivamus interdum lobortis aliquam. Morbi laoreet cursus urna. 
        Aenean justo odio, dictum sed commodo in, dignissim sit amet augue. Vestibulum dictum finibus feugiat.`
    },
    {
        id: 2,
        title: `What is linting and how can it save you time?`,
        author: 'Colby Fayock',
        post: `One of the biggest challenges in software development is time. 
        It’s something we can’t easily get more of, but linting can help us make the most. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis luctus mi aliquam blandit.
        Curabitur lorem sem, tristique a tincidunt sed, semper quis nunc. Curabitur at sagittis velit. 
        Pellentesque tincidunt euismod mauris nec consequat. Phasellus ullamcorper est odio, eget dignissim massa feugiat id. 
        Maecenas aliquet lectus urna, sit amet dignissim velit congue nec. Integer sed justo a ex tristique vestibulum. Proin lacinia egestas mollis. 
        Praesent non eleifend orci. Proin nec quam posuere, vestibulum turpis vel, convallis neque. 
        Etiam in massa quis nisi tristique facilisis id ac sapien. Vivamus sodales dui est, in iaculis enim mattis gravida. 
        Aenean lobortis massa et tempor pellentesque. Pellentesque ut purus in ligula commodo consectetur a et diam. 
        Maecenas volutpat ante eu nisl congue bibendum. Vivamus interdum lobortis aliquam. Morbi laoreet cursus urna. 
        Aenean justo odio, dictum sed commodo in, dignissim sit amet augue. Vestibulum dictum finibus feugiat.`
    },
    {
        id: 3,
        title: `How to Get More Views on Your Tech Blog`,
        author: 'Yazeed Bzadough',
        post: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis luctus mi aliquam blandit. 
        Curabitur lorem sem, tristique a tincidunt sed, semper quis nunc. Curabitur at sagittis velit. 
        Pellentesque tincidunt euismod mauris nec consequat. Phasellus ullamcorper est odio, eget dignissim massa feugiat id. 
        Maecenas aliquet lectus urna, sit amet dignissim velit congue nec. Integer sed justo a ex tristique vestibulum. Proin lacinia egestas mollis. 
        Praesent non eleifend orci. Proin nec quam posuere, vestibulum turpis vel, convallis neque. 
        Etiam in massa quis nisi tristique facilisis id ac sapien. Vivamus sodales dui est, in iaculis enim mattis gravida. 
        Aenean lobortis massa et tempor pellentesque. Pellentesque ut purus in ligula commodo consectetur a et diam. 
        Maecenas volutpat ante eu nisl congue bibendum. Vivamus interdum lobortis aliquam. Morbi laoreet cursus urna. 
        Aenean justo odio, dictum sed commodo in, dignissim sit amet augue. Vestibulum dictum finibus feugiat.`
    },
    {
        id: 4,
        title: `How to write easily describable code`,
        author: 'Cedd Burge',
        post: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis luctus mi aliquam blandit. 
        Curabitur lorem sem, tristique a tincidunt sed, semper quis nunc. Curabitur at sagittis velit. 
        Pellentesque tincidunt euismod mauris nec consequat. Phasellus ullamcorper est odio, eget dignissim massa feugiat id. 
        Maecenas aliquet lectus urna, sit amet dignissim velit congue nec. Integer sed justo a ex tristique vestibulum. Proin lacinia egestas mollis. 
        Praesent non eleifend orci. Proin nec quam posuere, vestibulum turpis vel, convallis neque. 
        Etiam in massa quis nisi tristique facilisis id ac sapien. Vivamus sodales dui est, in iaculis enim mattis gravida. 
        Aenean lobortis massa et tempor pellentesque. Pellentesque ut purus in ligula commodo consectetur a et diam. 
        Maecenas volutpat ante eu nisl congue bibendum. Vivamus interdum lobortis aliquam. Morbi laoreet cursus urna. 
        Aenean justo odio, dictum sed commodo in, dignissim sit amet augue. Vestibulum dictum finibus feugiat.`
    },
    {
        id: 5,
        title: `Everything you should know about ‘module’ & ‘require’ in Node.js`,
        author: 'Srishti Gupta',
        post: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis luctus mi aliquam blandit. 
        Curabitur lorem sem, tristique a tincidunt sed, semper quis nunc. Curabitur at sagittis velit. 
        Pellentesque tincidunt euismod mauris nec consequat. Phasellus ullamcorper est odio, eget dignissim massa feugiat id. 
        Maecenas aliquet lectus urna, sit amet dignissim velit congue nec. Integer sed justo a ex tristique vestibulum. Proin lacinia egestas mollis. 
        Praesent non eleifend orci. Proin nec quam posuere, vestibulum turpis vel, convallis neque. 
        Etiam in massa quis nisi tristique facilisis id ac sapien. Vivamus sodales dui est, in iaculis enim mattis gravida. 
        Aenean lobortis massa et tempor pellentesque. Pellentesque ut purus in ligula commodo consectetur a et diam. 
        Maecenas volutpat ante eu nisl congue bibendum. Vivamus interdum lobortis aliquam. Morbi laoreet cursus urna. 
        Aenean justo odio, dictum sed commodo in, dignissim sit amet augue. Vestibulum dictum finibus feugiat.`
    }
]

loadAllPosts();
function loadAllPosts() {
    for(let i = 0; i < postsMasterArray.length; i++) {
        let postTemplate = `<div class="postContainer" id="postSection_${postsMasterArray[i].id}">
            <div class="textAlignCenter" id="postTitle_${postsMasterArray[i].id}">
                <h5>${postsMasterArray[i].title}</h5>
            </div>
            <div class="editActionWrapper">
                <div>${postsMasterArray[i].author}</div>
                <button class="postBtnStyle" id="editPost_${postsMasterArray[i].id}" onclick="handleEditEvent(${postsMasterArray[i].id})">
                    <span id="editText_${postsMasterArray[i].id}">Edit</span> &nbsp; <i class="fa fa-edit"></i>
                </button>
            </div>
            <div id="postDesc_${postsMasterArray[i].id}">${postsMasterArray[i].post}</div>
            <div>
                <button class="postBtnStyle" id="post_${postsMasterArray[i].id}" onclick="handleLikeEvent(${postsMasterArray[i].id})">
                    <i class="fa fa-thumbs-up"></i> <span id="likeText_${postsMasterArray[i].id}">Like</span>
                </button>
                <p id="likeCount_${postsMasterArray[i].id}">Be the first one to like this!</p>
            </div>
            <div>
                <textarea row="4"></textarea>
                <button>Comment</button>
            </div>
            <div>
                <p>All Comments</p>
            </div>
            <hr/>
        </div>`
        document.getElementById('postWrapper').innerHTML += postTemplate;
    }
}
function handleEditEvent(flag) {
    document.getElementById('postDesc_' + flag).contentEditable = true;
    document.getElementById('postTitle_' + flag).contentEditable = true;
    document.getElementById('postDesc_' + flag).style.border = '1px solid #FF3349';
    document.getElementById('postTitle_' + flag).style.border = '1px solid #FF3349';
}

let firstPostlikeCount = 0, secondPostlikeCount = 0, thirdPostlikeCount = 0, fourthlikeCount = 0, fifthlikeCount = 0;
function handleLikeEvent(flag) {
    if(flag === 1) {
        firstPostlikeCount++; 
        document.getElementById('likeText_' + flag).innerHTML  = 'Liked';
        if(firstPostlikeCount === 1) {
            document.getElementById('likeCount_' + flag).innerHTML  = `${firstPostlikeCount} person likes this!`;
        }
        if(firstPostlikeCount > 1) {
            document.getElementById('likeCount_' + flag).innerHTML  = `${firstPostlikeCount} person like this!`;
        }
    }else if(flag === 2) {
        secondPostlikeCount++; 
        document.getElementById('likeText_' + flag).innerHTML  = 'Liked';
        if(secondPostlikeCount === 1) {
            document.getElementById('likeCount_' + flag).innerHTML  = `${secondPostlikeCount} person likes this!`;
        }
        if(secondPostlikeCount > 1) {
            document.getElementById('likeCount_' + flag).innerHTML  = `${secondPostlikeCount} person like this!`;
        }
    }else if(flag === 3) {
        thirdPostlikeCount++; 
        document.getElementById('likeText_' + flag).innerHTML  = 'Liked';
        if(thirdPostlikeCount === 1) {
            document.getElementById('likeCount_' + flag).innerHTML  = `${thirdPostlikeCount} person likes this!`;
        }
        if(thirdPostlikeCount > 1) {
            document.getElementById('likeCount_' + flag).innerHTML  = `${thirdPostlikeCount} person like this!`;
        }
    }else if(flag === 4) {
        fourthlikeCount++; 
        document.getElementById('likeText_' + flag).innerHTML  = 'Liked';
        if(fourthlikeCount === 1) {
            document.getElementById('likeCount_' + flag).innerHTML  = `${fourthlikeCount} person likes this!`;
        }
        if(fourthlikeCount > 1) {
            document.getElementById('likeCount_' + flag).innerHTML  = `${fourthlikeCount} person like this!`;
        }
    }else if(flag === 5) {
        fifthlikeCount++; 
        document.getElementById('likeText_' + flag).innerHTML  = 'Liked';
        if(fifthlikeCount === 1) {
            document.getElementById('likeCount_' + flag).innerHTML  = `${fifthlikeCount} person likes this!`;
        }
        if(fifthlikeCount > 1) {
            document.getElementById('likeCount_' + flag).innerHTML  = `${fifthlikeCount} person like this!`;
        }
    }
}

