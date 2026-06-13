const myComponent = () => {
    return 
    <div>
        Someshit here
    </div>
}

const somethingHere = () => {
    <div>
        <h1>Hatdog</h1>
    </div>
}

// normal js function
// <button onClick={somethingHere}></button>

// anonymous react function (no name function, just the function itself)
<button onClick={() => {
    console.log("no name, just function");
}}>
</button>

