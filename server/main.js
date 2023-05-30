import { Meteor } from "meteor/meteor";
import "../infra/CustomError";
// import { ContactsCollection } from "../imports/api/ContactsCollection";
import "../imports/api/collections/ContactsCollection";
import "../imports/api/methods/ContactsMethods";
import "../imports/api/publications/ContactsPublications";
import "../imports/api/collections/TransactionsCollection";
import "../imports/api/methods/TransactionsMethods";
import "../imports/api/collections/WalletsCollection";
import { WalletsCollection } from "../imports/api/collections/WalletsCollection";
import "../imports/api/publications/WalletsPublications";

// Meteor.publish("contacts", () => ContactsCollection.find());
Meteor.startup(() => {
  // ContactsCollection.allow({
  //   insert: function () {
  //     return true;
  //   },
  // });
  if (!WalletsCollection.find().count()) {
    WalletsCollection.insert({ createdAt: new Date() });
  }
});
