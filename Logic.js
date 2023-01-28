const axios = require("axios");

// CREATE FUNCTION
const createNewAccount = async (account_name, code) => {
  const data = { account_name, Balance: 0, code };
  await axios.post("https://deployment-bank-application.onrender.com/users",data);
};

// DEPOSITING FUNCTION 
const deposit = async (code, account) => {
  let data = await axios.get("https://deployment-bank-application.onrender.com/users");
  data = data.data;
  x = data.filter((elem) => elem.code === code);
  x.length > 0
    ? depositing(x)
    : console.log("❌ Something Went Wrong Please Enter Your Input Carefully");

  async function depositing(x) {
    let { id, account_name, Balance } = x[0];
    const data = {
      account_name,
      Balance: account + Balance,
      id: id,
      code,
    };

    await axios.put(`https://deployment-bank-application.onrender.com/users/${id}`,data);}};

 //Withdraw Action 
const withdraw = async (code, amount) => {
  let data = await axios.get("https://deployment-bank-application.onrender.com/users");
  data = data.data;
  x = data.filter((elem) => elem.code === code);
  x.length > 0 ? withdrawing(x) : console.log("❌ Something Went Wrong Please Enter Your Input Carefully");

  async function withdrawing(x) {
    let { id, Balance, account_name } = x[0];
    if (Balance > amount) {
      const data = {account_name,Balance: Balance - amount,code: code,id: id,};

     await axios.put(`https://deployment-bank-application.onrender.com/users/${id}`,data);
    } 
    else if (Balance < amount) {console.log(`\n ❌ Please Recharge Your wallet with ${Math.abs(Balance - amount)}₹`)}
  }
};

// BALANCE FUNCTION
const balance = async (code) => {
  let data = await axios.get("https://deployment-bank-application.onrender.com/users");
  data = data.data;
  x = data.filter((elem) => elem.code === code);
  let { Balance, id, account_name } = x[0];
  return `✅ Balance of ${account_name} : ${Balance}`;
};

module.exports = {
  createNewAccount,
  deposit,
  withdraw,
  balance,
};
