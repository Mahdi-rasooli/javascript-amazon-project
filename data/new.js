
let greeting;

/*
function loadGreetingFetch(){
    const promise = fetch(
        'https://supersimplebackend.dev/greeting'
    ).then((response) => {
        return response.text();
    }).then((text) => {
       console.log(text); 
    })

    
}

loadGreetingFetch();*/


async function loadGreeting() {
    const response = await fetch('https://supersimplebackend.dev/greeting')
    const text = await response.text()
    console.log(text);
}

loadGreeting();


async function sendPostRequest() {
    const response = await fetch('https://supersimplebackend.dev/greeting', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'Mahdi'
        })
    });

    const text = response.text();

    console.log(text);
};

sendPostRequest();



async function getAmazon() {

    try {

        const response = await fetch('https://amazon.com');
        const text = await response.text();
        console.log(text)

    } catch (error) {
        console.log('CORS error')
    }
};

//getAmazon();




async function secondPostRequest() {

    try {

        const response = await fetch('https://supersimplebackend.dev/greeting', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (response.status >= 400) {
            throw response
        }

        const txt = await response.text()
        console.log(txt);

    } catch (error) {

        if (error.status === 400) {
            const errorMessage = await error.json()
            console.log(errorMessage)
        }
        else {
            console.log('network error')
        };
    };

};

secondPostRequest();









/*
export function loadGreeting(){
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('load' , () => {
        //greeting = JSON.parse(xhr.response)
        //console.log(greeting)
        console.log(xhr.response)
    });


  xhr.open('GET' , 'https://supersimplebackend.dev/greeting');

  xhr.send();
}


loadGreeting();
*/

