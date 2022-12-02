const axios = require("axios").default

async function run(){
    const response = await axios.get("https://randomuser.me/api?results=5")
    console.log(response.data.results.length);
    // console.log(response.data.results[0].name);
    let data=[]
    for (let i=0; i<response.data.results.length; i++){
        console.log(response.data.results[i].name.first);  

        
        data.push(response.data.results[i].name.first)
        console.log(data);
    }
    console.log("=======",data.join())
    console.log("--------",data.sort());
}
run();



//map method
const axios = require("axios").default

async function run() {
    const response = await axios.get("https://randomuser.me/api?results=5");
    const json = response.data;
    const names = json.results.map((user) => user.name.first);
    console.log(names.join(", "));
  }
  run();



  //print first name and last name
  const axios = require("axios").default;

async function run() {
  const response = await axios.get("https://randomuser.me/api?results=5");
  const json = response.data;
  
  json.results.sort((userA, userB)=>
  userA.name.last.localeCompare(userB.name.last)
  );
  const names = json.results.map(
    (user)=>user.name.first + " " +user.name.last
  );
  console.log(names.join(", "));
}
run();

// only females

const axios = require("axios").default;

async function run() {
  const response = await axios.get("https://randomuser.me/api?results=5");
  const json = response.data;
  
  const onlyFemales = json.results.filter((user)=>user.gender==="female")
  onlyFemales.sort((userA, userB)=>
  userA.name.last.localeCompare(userB.name.last)
  );
  const names = onlyFemales.map(
    (user)=>user.name.first + " " +user.name.last
  );
  console.log(names.join(", "));
}
run();
