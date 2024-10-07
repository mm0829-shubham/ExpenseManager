import axios from "axios";

const URL = "https://react-native-testing-377b5-default-rtdb.firebaseio.com";

export async function fetchExpenses() {
  const response = await axios.get(URL + "/expenses.json");

  const expenses = [];
  console.log(response.data);

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }
  return expenses;
}


export async function StoreExpense(expenseData) {
  const response = await axios.post(URL + "/expenses.json", expenseData);
  const id = response.data.name;
  return id;
}

export async function updateExpense(id, expenseData) {
  return await axios.put(URL + `/expenses/${id}.json`, expenseData);
}

export async function deleteExpense(id) {
  return await axios.delete(URL + `/expenses/${id}.json`);
}
