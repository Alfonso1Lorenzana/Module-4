const form = document.querySelector('form');    
const usernameInput = document.getElementById('username');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
//const submitButton = document.getElementById('submit');
const errorElement = document.getElementById('error');

//const redirectPage = function (url) {
//    location.assign(url);
//};
   
const handleFormSubmission = (event) => {
    event.preventDefault();
  
    const formData = {
        username: usernameInput.value,
        title: titleInput.value,
        content: contentInput.value,
    };
    let posts = JSON.parse(localStorage.getItem('blogPosts'));
    if (!posts) {
        posts=new Array();
    }
    
    posts.push(formData);

    if(!usernameInput.value || !titleInput.value || !contentInput.value) {
        errorElement.style.display = 'block';
        errorElement.textContent = "Please complete the form.";
    } else {
        errorElement.style.display = 'none';
       localStorage.setItem('blogPosts', JSON.stringify(posts));
        redirectPage('blog.html');
    }
    };
    form.addEventListener('submit', handleFormSubmission);
