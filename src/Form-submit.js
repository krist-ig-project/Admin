import { db, storage } from '/src/firebase/index.js';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export function HandleSubmitedForm(formData, photo) {
  const formCollectionRef = collection(db, 'formSubmissions');

  // Function to upload the photo to Firebase Storage and get the download URL
  const uploadPhoto = async (photo) => {
    const photoRef = ref(storage, `photos/${Date.now()}_${photo.name}`);
    await uploadBytes(photoRef, photo);
    return getDownloadURL(photoRef);
  };

  // First, upload the photo if provided
  return uploadPhoto(photo)
    .then((photoURL) => {
      // Add the photo URL to the form data
      formData.photoURL = photoURL;

      // Then, save the form data to Firestore
      return addDoc(formCollectionRef, formData);
    })
    .then(() => {
      // Successfully added document with the image URL
      return Promise.resolve('Form submitted successfully with photo!');
    })
    .catch((error) => {
      // Error occurred while uploading the photo or saving the document
      const errorMessage = error.message || 'An unexpected error occurred. Please try again later.';
      return Promise.reject(errorMessage);
    });
}
