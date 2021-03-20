import * as firebase from "firebase/app";
import "firebase/messaging";

const initializedFirebaseApp = firebase.initializeApp({
  messagingSenderId: process.env.gcm_sender_id //"89467926110"
});

const messaging = initializedFirebaseApp.messaging();

messaging.usePublicVapidKey(
    process.env.server_key
);//"BOQEoxq2iHqG3sUa2p9KTFoPlzA_N9RNHOBDNvlBPRkY4FmOBsJUdD6Spu4oCAEC3aKtmaj1Jmjm8AzFWHqFFNI"
// Project Settings => Cloud Messaging => Web Push certificates

export { messaging };
