function submit(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then( resorce => resorce.json())
        .then(data =>displayUser(data))
}
function displayUser(data)
{
    const ul = document.getElementById('user');
    for(const user of data)
    {
        const li=document.createElement('li');
        //li.innerText=user.name;
        li.innerText=`name: ${user.name}    email:${user.email}`;
        ul.appendChild(li);
    }
}