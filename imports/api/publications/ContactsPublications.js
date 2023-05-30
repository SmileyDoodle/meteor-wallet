import { ContactsCollection } from "../collections/ContactsCollection";
import { Meteor } from "meteor/meteor";

Meteor.publish("contacts", function publishContacts() {
  return ContactsCollection.find();
});
Meteor.publish("contactsActive", function publishContacts() {
  return ContactsCollection.find({ archived: { $ne: true } });
});
