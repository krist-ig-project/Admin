// Form-submit.js
import { db } from '/src/firebase/index.js';
import { collection, addDoc } from 'firebase/firestore';

export function HandleSubmitedForm(formData) {
  // Reference to the collection where you want to store the data
  const formCollectionRef = collection(db, 'formSubmissions');
  
  // Return a promise that resolves when the data is successfully added
  return addDoc(formCollectionRef, formData)
    .then(() => {
      // Successfully added document
      return Promise.resolve('Form submitted successfully!');
    })
    .catch((error) => {
      // Error occurred while adding document
      const errorMessage = error.message || 'An unexpected error occurred. Please try again later.';
      return Promise.reject(errorMessage);
    });
}
