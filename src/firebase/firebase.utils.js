import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyByehzNeDnGO74ohOL3UGfX2OznhL2m17w",
    authDomain: "crwn-db-fed66.firebaseapp.com",
    projectId: "crwn-db-fed66",
    storageBucket: "crwn-db-fed66.appspot.com",
    messagingSenderId: "113999448804",
    appId: "1:113999448804:web:74fe76aa4078f184e3baf1",
    measurementId: "G-2HTLY052KY"
  };


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email } = userAuth
        const createdAt = new Date()
    
    try {
        await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
        })


    }catch(error){
        console.log("Error creating user", error.message)

        }
    }

    return userRef;
}

  firebase.initializeApp(config);


  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {

    const collectionRef = firestore.collection(collectionKey)

    const batch = firestore.batch()
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc()
        batch.set(newDocRef, obj)
    })
    return await batch.commit()
  }


  export const convertCollectionsSnapshotToMap = (collections) => {
      const transformedCollection = collections.docs.map(doc => {
          const { title, items } = doc.data()

          return {
              routeName: encodeURI(title.toLowerCase()),
              id: doc.id,
              title,
              items
          }
      })
        return transformedCollection.reduce((accumulator, collection) => {
            accumulator[collection.title.toLowerCase()] = collection;
            return accumulator;
        }, {})
  }
  export const auth = firebase.auth()
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({'prompt': 'select_account'})

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;