const additem=async(item)=>{
            await randomdelay();
            let div=document.createElement("div");
            div.innerHTML=item;
            document.body.append(div)

        }
        const randomdelay=()=>{
            return new Promise((resolve,reject)=>{
                timeout=1+6*Math.random();
                setTimeout(()=>{
                    resolve()
                },timeout*1000);
            })
        }
        
 async function main() {

     let t=  setInterval(()=>{
let last=document.body.getElementsByTagName("div");
last=last[last.length-1]
if(last.innerHTML.endsWith("...")){
    last.innerHTML=last.innerHTML.slice(0,last.innerHTML.length-3)
}
 else {
 last.innerHTML=last.innerHTML+"."
}


},100);
 
        let text=["Initilizing Haking to your system",
            "NOW its my time",
            " Akmal hacked your system ",
            "All passward are cracked ",
            "Files lost success",
            "Meeooow Goooopopopo",
            "Byeeee Nooob" ]
        for(const item of text){
          await  additem(item)

        }
        await randomdelay()
        clearInterval(t)

        
    
    }
    main()