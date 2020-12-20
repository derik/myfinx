const firebase = require('firebase');
const { firestore } = require('./firebase');

// CONTANTS
const EXPENSE_COLLECTION_NAME = 'expenses';
const CATEGORY_COLLECTION_NAME = 'categories';

const subscribe = (setExpenses, userUid) => {
  return firestore
    .collection('expenses')
    .where('userUid', '==', userUid)
    .orderBy('createdAt', 'desc')
    .onSnapshot((snapshot) => {
      const expenses = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setExpenses(expenses);
    });
};

const findAll = async (userUid) => {
  const querySnapshot = await firestore
    .collection(EXPENSE_COLLECTION_NAME)
    .where('userUid', '==', userUid)
    .get();
  const expenses = [];
  querySnapshot.forEach((doc) => {
    console.log('expenses.push({ id: doc.id, ...doc.data() })');
    expenses.push({ id: doc.id, ...doc.data() });
  });
  return expenses;
};

const add = (expense) => {
  console.log(firebase.firestore);
  return firestore.collection(EXPENSE_COLLECTION_NAME).add({
    name: expense.name,
    category: expense.category,
    value: expense.value,
    userUid: expense.userUid,
    createdAt: Date.now(),
  });
};

const deleteById = (expenseId) => {
  return firestore.collection(EXPENSE_COLLECTION_NAME).doc(expenseId).delete();
};

const findAllCategories = async () => {
  const querySnapshot = await firestore
    .collection(CATEGORY_COLLECTION_NAME)
    .get();
  const categories = [];
  querySnapshot.forEach((doc) =>
    categories.push({ id: doc.id, ...doc.data() })
  );
  return categories;
};

export const expenseApi = {
  subscribe,
  findAll,
  add,
  deleteById,
  findAllCategories,
};
