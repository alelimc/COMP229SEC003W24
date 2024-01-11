const getFakePerson = async ()  => {
    let res = await fetch("https://api.randomuser.me/?nat=US&results=1");
    let {  results }  = res.json();console.log(results);
    };
    getFakePerson();
    