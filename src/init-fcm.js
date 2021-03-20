import * as firebase from "firebase/app";
import "firebase/messaging";

const initializedFirebaseApp = firebase.initializeApp({
  messagingSenderId: "89467926110"
});

const messaging = initializedFirebaseApp.messaging();

messaging.usePublicVapidKey(
  "BOQEoxq2iHqG3sUa2p9KTFoPlzA_N9RNHOBDNvlBPRkY4FmOBsJUdD6Spu4oCAEC3aKtmaj1Jmjm8AzFWHqFFNI"
);

export { messaging };
