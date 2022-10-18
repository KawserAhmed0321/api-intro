function loadpost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res =>res.json())
    .then(data => display(data))
}
loadpost();
function display(posts)
{
    const postContainer=document.getElementById('post');
    for(const post of posts)
    {
        const div= document.createElement('div');
        div.classList.add('post');
        div.innerHTML=`
        <h3>${post.title}</h3>
        <p> ${post.body}</p>
        `
        postContainer.appendChild(div);
        
    }
}