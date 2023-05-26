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
    <div className="mt-10">
      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
        Contact list
      </h3>
      {isLoading ? (
        <div className="text-sm font-medium text-gray-900">Loading...</div>
      ) : (
        <ul
          role="list"
          className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200"
        >
          {contacts.map((contact) => (
            <li
              key={contact.email}
              className="py-4 flex items-center justify-between space-x-3"
            >
              <div className="min-w-0 flex-1 flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={contact.imageUrl}
                    alt=""
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {contact.name}
                  </p>
                  <p className="text-sm font-medium text-gray-500 truncate">
                    {contact.email}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
