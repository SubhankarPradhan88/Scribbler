// All Post's details
const postsMasterArray = [
    {
        id: 1,
        title: `‘let’ me be a ‘const’(ant), not a ‘var’(iable)!`,
        author: 'Srishti Gupta',
        post: `Since JavaScript does not have any type-checking, either of these keywords can be used to declare a variable of any type (datatype) in JavaScript.
        Though all the three keywords are used for the same purpose, they are different. Variables declared using the let keyword can change their values in the future.
        You know that you cannot update a constant in future. If you do not initialize a constant during its declaration, 
        you will not be able to assign any value to it EVER! This is why you get a SyntaxError when you leave a constant uninitialized.
        So far, you’ve learned that variables declared using the const keyword cannot be assigned any other value. 
        While this is true, there’s another side of the story too. Undoubtedly, 
        you cannot assign a new value to a constant but you can manipulate the existing value if it is an object or an array.
        In the code given above, you are not changing the entire value assigned to the constant passengerBus but you are manipulating a property inside it. 
        You can add/delete/update a property inside an object declared using the const keyword.`
    },
    {
        id: 2,
        title: `What is linting and how can it save you time?`,
        author: 'Colby Fayock',
        post: `One of the biggest challenges in software development is time. 
        It’s something we can’t easily get more of, but linting can help us make the most out of the time we have.
        So what is linting? lint, or a linter, is a tool that analyzes source code to flag programming errors, bugs, stylistic errors, and suspicious constructs.
        Simply put, a linter is a tool that programmatically scans your code with the goal of finding issues that can lead to bugs or inconsistencies with code health and style. 
        Some can even help fix them for you! Even though there are linters for most, 
        if not all, other mainstream languages, for the purpose of this post, I’m going to focus on Javascript. 
        The same principles apply, but the tooling may be a bit different. To get started, we first need a linter. Probably the most popular in the Javascript world is ESLint. 
        Your linter will actually be the engine for defining rules and parsing your files to test against. 
        ESLint is available as an npm package by itself and once installed, 
        out of the box it allows you to set up a basic configuration file and hit the ground running with some command line tools.`
    },
    {
        id: 3,
        title: `How to Get More Views on Your Tech Blog`,
        author: 'Yazeed Bzadough',
        post: `If you're a developer with a Twitter account, you've already seen everyone and their cat start a blog, YouTube channel, or Patreon. 
        We all want to become stars, or at the very least, a recognizable name in the industry. Always remember that teaching and doing are two different things. 
        If all you do is teach, you eventually become that person who knows everything in theory, but can't get anything done.
        Make sure to balance the teaching / learning ratio by constantly challenging yourself. 
        Do a side project, take on harder tasks at work, anything to sharpen your skills. Blogging is not "get rich quick" scheme. 
        It takes a long time of sharing quality content and can feel slow, hopeless, and destined to fail.
        But if you enjoy yourself throughout the process, you'll build a solid content portfolio, benefit others, grow your brand (over time), 
        and cement your hard-earned knowledge by sharing your insights on the global stage. Take your time, prefer quality over quantity, and always challenge yourself.`
    },
    {
        id: 4,
        title: `How to write easily describable code`,
        author: 'Cedd Burge',
        post: `When code is not describable using words, most people have to do some mental mapping to turn it in to words. 
        This wastes mental energy, and you run the risk of getting the mapping wrong. 
        Different people will map to different words, which leads to confusion when discussing the code.
        This is usually a fertile breeding ground for bugs born out of miscommunication / misunderstanding, and fixing these bugs often introduces new ones, 
        for the same reasons. In the end it becomes code that no one really understands or wants to touch. 
        It is easy to think that code is already a written language. 
        If it looks simple, it should be easy to read, speak and listen to. However, this is not always the case.
        Below is a common solution to deciding whether a year is a leap year. This is not overly complicated code. 
        It calls a functions 3 times, has 3 operators (and, or, not), and has two levels of nesting. However, 
        if you take a second to try and describe the algorithm in words I think you will find it to be a struggle.`
    },
    {
        id: 5,
        title: `Everything you should know about ‘module’ & ‘require’ in Node.js`,
        author: 'Srishti Gupta',
        post: `Node.js treats each JavaScript file as a separate module.
        For instance, if you have a file containing some code and this file is named xyz.js, 
        then this file is treated as a module in Node, and you can say that you’ve created a module named xyz.
        Let’s take an example to understand this better. You have a file named circle.js which consists of the logic for calculating the area & 
        the circumference of a circle of a given radius. You might be wondering why is there a need to have multiple modules? 
        You could have just written all the code in a single module. Well, it is very important to write modular code. 
        By modular, I mean to say that your code should be independent and should be loosely coupled. 
        Imagine that there’s a large application and you have all your code written in just one place, just one file. Too messy, right?
        You can see that there is a function wrapper at the root level encompassing all the code written inside the circle module.
        The entire code written inside a module is private to the module, unless explicitly stated (exported) otherwise.
        This is the most significant advantage of having modules in Node.js. 
        Even if you define a global variable in a module using var, let or const keywords, 
        the variables are scoped locally to the module rather than being scoped globally. 
        This happens because each module has a function wrapper of its own and the code written 
        inside one function is local to that function and cannot be accessed outside this function.`
    }
]

loadAllPosts();  // Invoke the function on page load
// Function to fetch all the post's details and display
function loadAllPosts() {
    for(let i = 0; i < postsMasterArray.length; i++) {
        let postTemplate = `<div class="postContainer" id="postSection_${postsMasterArray[i].id}">
            <div class="textAlignCenter" id="postTitle_${postsMasterArray[i].id}">
                <h5>${postsMasterArray[i].title}</h5>
            </div>
            <div class="editActionWrapper" id="editPostSection_${postsMasterArray[i].id}">
                <div>${postsMasterArray[i].author}</div>
                <button class="postBtnStyle" id="editPost_${postsMasterArray[i].id}" onclick="handleEditEvent(${postsMasterArray[i].id})">
                    <span id="editText_${postsMasterArray[i].id}">Edit</span> &nbsp; <span id="editIcon_${postsMasterArray[i].id}"><i class="fa fa-edit"></i></span>
                </button>
            </div>
            <div id="postDesc_${postsMasterArray[i].id}">${postsMasterArray[i].post}</div>
            <div>
                <button class="postBtnStyle btnAlignment" id="post_${postsMasterArray[i].id}" onclick="handleLikeEvent(${postsMasterArray[i].id}, ${1})">
                    <i class="fa fa-thumbs-up"></i> <span id="likeText_${postsMasterArray[i].id}">Like</span>
                </button>
                <p class="likeTextStyle" id="likeCount_${postsMasterArray[i].id}">Be the first one to like this!</p>
            </div>
            <div>
                <textarea name="userComment" id="userComment_${postsMasterArray[i].id}" placeholder="Leave a comment..." rows="5"></textarea>
            </div>
            <div>
                <button class="postBtnStyle btnAlignment" onclick="addComment(userComment_${postsMasterArray[i].id}, ${postsMasterArray[i].id})">Comment</button>
            </div>
            <p><h6>All Comments</h6></p>
            <div id="commentsSection_${postsMasterArray[i].id}" class="commentsWrapper"></div>
            <hr/>
        </div>`
        document.getElementById('postWrapper').innerHTML += postTemplate;
    }
}

// Comment feature's common model / function, for all the posts
let commentArray = [];
function addComment(commentId, postNumber) {
    if(!commentId.value) {
        return;
    }
    let obj = {};
    obj.commentId = postNumber;
    obj.comments = commentId.value;
    document.getElementById('commentsSection_' + postNumber).innerHTML = '';
    document.getElementById('commentsSection_' + postNumber).style.background = '#ffffff';
    document.getElementById('commentsSection_' + postNumber).style.border = '4px #cccccc solid';
    commentArray.unshift(obj); 
    for(let i = 0; i < commentArray.length; i++) {
        if(postNumber === commentArray[i].commentId) {
            let node = document.createElement("DIV");          
            let textnode = document.createTextNode(commentArray[i].comments);   
            node.appendChild(textnode);                            
            document.getElementById('commentsSection_' + postNumber).appendChild(node);
        }
    }
    document.getElementById('userComment_' + postNumber).value = '';
}
// Edit feature's common model / function, for all the posts
function handleEditEvent(flag) {
    let editAction = document.getElementById('editText_' + flag).innerHTML;
    if(editAction === 'Edit') {
        document.getElementById('editText_' + flag).innerHTML  = 'Save';
        document.getElementById('postDesc_' + flag).contentEditable = true;
        document.getElementById('postTitle_' + flag).contentEditable = true;
        document.getElementById('editPostSection_' + flag).style.marginTop = '10px';
        document.getElementById('postDesc_' + flag).style.border = '1px solid #ff91af';
        document.getElementById('postDesc_' + flag).style.padding = '5px';
        document.getElementById('postTitle_' + flag).style.border = '1px solid #ff91af';
        document.getElementById('editIcon_' + flag).innerHTML = '<i class="fa fa-save"></i>';
    }else {
        document.getElementById('editText_' + flag).innerHTML  = 'Edit';
        document.getElementById('postDesc_' + flag).contentEditable = false;
        document.getElementById('postTitle_' + flag).contentEditable = false;
        document.getElementById('editPostSection_' + flag).style.marginTop = '0px';
        document.getElementById('postDesc_' + flag).style.border = 'none';
        document.getElementById('postDesc_' + flag).style.padding = '0';
        document.getElementById('postTitle_' + flag).style.border = 'none';
        document.getElementById('editIcon_' + flag).innerHTML = '<i class="fa fa-edit"></i>';
    }    
}
// Like feature's common model / function, for all the posts
let likeDetailArray = [];
function handleLikeEvent(flag, count) { 
    let likeDetailsObj = {};
    likeDetailsObj.postId = flag;
    likeDetailsObj.likeCount = count;
    likeDetailArray.push(likeDetailsObj);
    for(let i = 0; i < likeDetailArray.length; i++) {
        if(flag === likeDetailArray[i].postId) {
            likeDetailsObj.likeCount = count++;
            document.getElementById('likeText_' + flag).innerHTML  = 'Liked';
            if(likeDetailArray[i].likeCount === 1) {
                document.getElementById('likeCount_' + flag).innerHTML  = `${likeDetailArray[i].likeCount} person likes this!`;
            }
            if(likeDetailArray[i].likeCount > 1) {
                document.getElementById('likeCount_' + flag).innerHTML  = `${likeDetailArray[i].likeCount} people like this!`;
            }
        }
    }
}