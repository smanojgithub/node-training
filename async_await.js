async function run(){
    const sum = async(a,b)=>a+b;
    const a = await sum(5,3)
    console.log(a);
}

run()


////////////////////////////////////////////////


async function run(){
    const sum = async(a,b)=>a+b;
  sum(5,1).then(a=>console.log(a))
    console.log("Done");
}

run()