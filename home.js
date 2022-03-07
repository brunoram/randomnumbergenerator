onSubmit();

function onSubmit()
{
    const form=document.querySelector("#form");
    form.addEventListener('submit', callAPI);
}

function callAPI(event)
{
    event.preventDefault();
    const form=document.querySelector("#form");
    const n=form.n.value;
   
    fetch('https://rdtl82jl5j.execute-api.eu-central-1.amazonaws.com/default/yout?n='+n).then(onResponse).then(onJSON); 
}

function onResponse(response){
     
    return response.json();
}

function onJSON(json){
   
    const array = JSON.parse(json.body);
    const title = document.createElement('h2');
    title.textContent = "Generated values:";
    document.body.appendChild(title);
    for (let x of array)
    {
        const row = document.createElement('p');
        row.textContent = x;
        title.appendChild(row);
    }

}
