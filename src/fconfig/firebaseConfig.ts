import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDJV9Ly1Epe_X_PnWyblO6yiupbzk0t71o",
    authDomain: "vue-project-planner.firebaseapp.com",
    databaseURL: "https://vue-project-planner.firebaseio.com",
    projectId: "vue-project-planner",
    storageBucket: "vue-project-planner.appspot.com",
    messagingSenderId: "578106064017",
    appId: "1:578106064017:web:46dcd70b3f20382e491330"
};

firebase.initializeApp(firebaseConfig); 

export default firebase;