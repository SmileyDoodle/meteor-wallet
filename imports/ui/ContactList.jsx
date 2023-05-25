import React from "react";
import { ContactsCollection } from "../api/ContactsCollection";
import { useTracker } from "meteor/react-meteor-data";

export const ContactList = () => {
  const isLoading = useTracker(() => {
    const handle = Meteor.subscribe("contacts");
    return !handle.ready();
  });

  const contacts = useTracker(() => {
    return ContactsCollection.find({}).fetch();
  });

  return (
    <div>
      <h3>Contact list</h3>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <ul>
          {contacts.map((contact) => (
            <li key={contact.email}>
              {contact.name} - {contact.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
