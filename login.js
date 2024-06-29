document.querySelector('#register').addEventListener('click', function (){
    const userInfo = {
        name: document.querySelector('#registerName').value,
        email: document.querySelector('#registerEmail').value,
        password: document.querySelector('#registerPassword').value,
    }
    fetch('http://localhost:3000/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userInfo)
    }).then(response => response.json())
    .then(data => {
        if (data.result) {
            window.location.assign('index.html')
        }
    })
})

document.querySelector('#connection').addEventListener('click', function (){
    const userInfo = {
        email: document.querySelector('#connectionEmail').value,
        password: document.querySelector('#connectionPassword').value,
    }
    fetch('http://localhost:3000/users/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userInfo)
    }).then(response => response.json())
    .then(data => {
        if (data.result) {
            window.location.assign('index.html')
        }
    })
})