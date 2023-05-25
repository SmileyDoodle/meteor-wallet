import { Meteor } from "meteor/meteor";
import { ContactsCollection } from "../imports/api/ContactsCollection";

Meteor.publish("contacts", () => ContactsCollection.find());
Meteor.startup(() => {
  ContactsCollection.allow({
    insert: function () {
      return true;
    },
  });
});
