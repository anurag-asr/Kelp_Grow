const createNewAccount = async (account_name,code) => {const data = {account_name,Balance: 0,code}
  return await fetch("https://deployment-bank-application.onrender.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

const deposit = async (code,account) => {
  let data = await fetch("https://deployment-bank-application.onrender.com/users");
  data = await data.json();
  x=data.filter((elem)=>elem.code === code)
  x.length>0 ? depositing(x) : console.log("❌ Something Went Wrong Please Enter Your Input Carefully")

  async function depositing(x){
    let {id,account_name,Balance}=x[0];
    const data = {
        account_name,Balance: account+Balance,id: id,code
      }
      
      return await fetch(`https://deployment-bank-application.onrender.com/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });  
    }
   
};

const withdraw=async (code,amount)=>{
    let data = await fetch("https://deployment-bank-application.onrender.com/users");
    data = await data.json();
    x=data.filter((elem)=>elem.code === code)
    x.length>0 ? withdrawing(x) : console.log("❌ Something Went Wrong Please Enter Your Input Carefully")

   async function withdrawing(x){
    let {id,Balance,account_name}=x[0];
    if(Balance>amount){ const data = { account_name,Balance: Balance-amount,code:code,id: id};
      
      return await fetch(`https://deployment-bank-application.onrender.com/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });  
    }
  else if(Balance<amount){console.log(`\n ❌ Please Recharge Your wallet with ${Math.abs(Balance-amount)}₹`)}
}
   
}

const balance=async(code)=>{
    let data = await fetch("https://deployment-bank-application.onrender.com/users");
    data = await data.json();
    x=data.filter((elem)=>elem.code === code)
    let {Balance,id,account_name}=x[0];
    await console.log(`✅ Balance of ${account_name} : ${Balance}`)
}

module.exports = {
  createNewAccount,
  deposit,
  withdraw,
  balance
};
