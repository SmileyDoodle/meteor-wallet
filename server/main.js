import { Meteor } from "meteor/meteor";
// import { ContactsCollection } from "../imports/api/ContactsCollection";
import "../imports/api/ContactsCollection";
import "../imports/api/ContactsMethods";
import "../imports/api/ContactsPublications";
import "../imports/api/TransactionsCollection";
import "../imports/api/WalletsCollection";

// Meteor.publish("contacts", () => ContactsCollection.find());
Meteor.startup(() => {
  // ContactsCollection.allow({
  //   insert: function () {
  //     return true;
  //   },
  // });
});
