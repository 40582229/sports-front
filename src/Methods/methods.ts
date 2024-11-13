

const  login = async (username:string, password:string) =>{
    let fetchRes = await fetch("http://127.0.0.1:5000/login",{
        method: "POST",
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username:username, password:password})
      });

      const data = await fetchRes.json();

      //console.log(data);
    return data 
}

export const handleLogin = async (username:string, password:string) =>{
    const data =  await login(username, password);

    return data;
}