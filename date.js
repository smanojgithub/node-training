
// const { default: axios } = require('axios')
const express = require("express");
const axios = require("axios").default;

const app = express();

// app.get("/", async (req, res) => {
//   // res.send({"mes":"hello world"})
//   const response = await axios.get("https://randomuser.me/api?results=5");

//   const json = response.data;
//   const user = json.results[0];
//   const dob = new Date(user.dob.date);
//   // program to display the date
//   const date = new Date();
//   const n = date.toDateString();
//   const time = date.toLocaleTimeString();
// //   const endtime = "November 30 2022 16:00:00 GMT+0200";
//   function getTimeRemaining(endtime) {
//     const total = Date.parse(endtime) - Date.parse(new Date());
//     const seconds = Math.floor((total / 1000) % 60);
//     const minutes = Math.floor((total / 1000 / 60) % 60);
//     console.log(total);
//   }
//   res.send({
//     firstname: user.name.first,
//     yearofBirth: dob.getFullYear(),
//     date: n,
//     time: time,
//     tomorrowSameTime: new Date(date.getTime() + 24 * 60 * 60 * 1000).toString,
//     minutes: minutes,
//   });
// });
app.get("/",async(req,res)=>{
    const breakTime= new Date("2022-11-30T16:00:00.000+05:30").getTime();
    console.log(getTime());
    const now =new Date().getTime();
    const minitesLeftForBreak= (breakTime -now)/100/60;
    res.send({
        minitesLeftForBreak
    })
})
app.listen(3000);

const date = new Date();

console.log(date);

console.log("2022-11-30T11:27:01.677Z".substring(11 ,16));


const a= "2022-11-30T11:27:01.677Z".split("T")[1].split(":")
console.log(a[0] + ":" +a[1]);

console.log(date.getUTCHours() + ":" + date.getUTCMinutes());
console.log("2022-11-30T11:27:01.677Z".slice(11,16));