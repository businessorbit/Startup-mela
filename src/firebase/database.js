import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './config.js';

// Function to save registration data to Firestore
export const saveRegistration = async (registrationData) => {
  try {
    console.log('saveRegistration called with data:', registrationData);
    
    // Add timestamp to the data
    const dataWithTimestamp = {
      ...registrationData,
      createdAt: serverTimestamp(),
      status: 'pending'
    };

    console.log('Data with timestamp:', dataWithTimestamp);

    // Save to 'registrations' collection in Firestore
    const docRef = await addDoc(collection(db, 'registrations'), dataWithTimestamp);
    
    console.log('Registration saved with ID: ', docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error saving registration: ', error);
    return { success: false, error: error.message };
  }
};
