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
  const handlePhotoUpload = photo
    ? uploadPhoto(photo).then((photoURL) => {
        // Add the photo URL to the form data
        formData.photoURL = photoURL;
      })
    : Promise.resolve();

  return handlePhotoUpload
    .then(() => {
      // Then, save the form data to Firestore
      return addDoc(formCollectionRef, formData);
    })
    .then(() => {
      // Successfully added document with the image URL
      return Promise.resolve('Form submitted successfully!');
    })
    .catch((error) => {
      console.error('Error during form submission:', error); // Log error for debugging
      const errorMessage = error.message || 'An unexpected error occurred. Please try again later.';
      return Promise.reject(errorMessage);
    });
}
