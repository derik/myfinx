const firebase = require("firebase");
const { firestore } = require("./firebase");

// CONTANTS
const EXPENSE_COLLECTION_NAME = "expenses";

const subscribe = (setExpenses, userUid) => {
  return firestore
    .collection("expenses")
    .where("userUid", "==", userUid)
    .orderBy("createdAt", "desc")
    .onSnapshot((snapshot) => {
      const expenses = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setExpenses(expenses);
    });
};

const findAll = async () => {
  const querySnapshot = await firestore
    .collection(EXPENSE_COLLECTION_NAME)
    .get();
  const expenses = [];
  querySnapshot.forEach((doc) => expenses.push({ id: doc.id, ...doc.data() }));
  return expenses;
};

const add = (expense) => {
  return firestore.collection(EXPENSE_COLLECTION_NAME).add({
    name: expense.name,
    value: expense.value,
    userUid: expense.userUid,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  });
};

const deleteById = (expenseId) => {
  return firestore.collection(EXPENSE_COLLECTION_NAME).doc(expenseId).delete();
};

export const expenseApi = {
  subscribe,
  findAll,
  add,
  deleteById,
};
