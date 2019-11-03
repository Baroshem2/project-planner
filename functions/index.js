const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

const createNotification = notification =>
  admin
    .firestore()
    .collection("notifications")
    .add(notification)
    .then(doc => console.log("notification added", doc));

exports.projectCreated = functions.firestore
  .document("users/{userId}/projects/{projectId}")
  .onCreate(doc => {
    const project = doc.data();
    const notification = {
      content: "Added a new project",
      user: `${project.createdBy}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    };

    return createNotification(notification);
  });

exports.projectDeleted = functions.firestore
  .document("users/{userId}/projects/{projectId}")
  .onDelete(doc => {
    console.log(doc);
    const project = doc.data();
    const notification = {
      content: "Removed project",
      user: `${project.createdBy}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    };

    return createNotification(notification);
  });

exports.userJoined = functions.auth.user().onCreate(user => {
  return createNotification({
    content: " joined",
    user: `${user.email}`,
    time: admin.firestore.FieldValue.serverTimestamp()
  });
});
