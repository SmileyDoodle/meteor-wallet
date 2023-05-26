import { Meteor } from "meteor/meteor";
import { ContactsCollection } from "../imports/api/ContactsCollection";
import { ContactsMethods } from "../imports/api/ContactsMethods";

Meteor.publish("contacts", () => ContactsCollection.find());
Meteor.startup(() => {
  // ContactsCollection.allow({
  //   insert: function () {
  //     return true;
  //   },
  // });
});
