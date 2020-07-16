import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCpoKsAUYZYcRLossGbIxla5SHiesDFmKc",
    authDomain: "myhome-ef467.firebaseapp.com",
    databaseURL: "https://myhome-ef467.firebaseio.com",
    projectId: "myhome-ef467",
    storageBucket: "myhome-ef467.appspot.com",
    messagingSenderId: "189766214528",
    appId: "1:189766214528:web:86e1aac6ec5e2fff631765",
    measurementId: "G-TLGNEP042E"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating a user', error.message);
        }
    }

    return userRef;

};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        // set up unique keys 
        const newDocRef = collectionRef.doc();
        // set up new value
        batch.set(newDocRef, obj);
    });
    // fire off our batch request, returns us a Promise
    return await batch.commit()
};

// covert to an object, and add new properties
export const convertCollectionSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();
        return {
            // convert symbols URL can read
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });
    
    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {})
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
