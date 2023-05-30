import React from "react";
import { ContactsCollection } from "../api/collections/ContactsCollection";
import { useTracker, useSubscribe, useFind } from "meteor/react-meteor-data";
import { ArchiveIcon, UserIcon } from "@heroicons/react/solid";

export const ContactList = () => {
  const isLoading = useSubscribe("contactsActive");

  // const isLoading = useTracker(() => {
  //   const handle = Meteor.subscribe("contacts");
  //   return !handle.ready();
  // });

  // const contacts = useTracker(() => {
  //   return ContactsCollection.find({}, { sort: { createdAt: -1 } }).fetch();
  // });

  const contacts = useFind(() => {
    return ContactsCollection.find(
      { archived: { $ne: true } },
      { sort: { createdAt: -1 } }
    );
  });

  const archiveContact = (event, _id) => {
    event.preventDefault();
    Meteor.call("contacts.archive", { contactId: _id });
  };

  // const removeContact = (event, _id) => {
  //   event.preventDefault();
  //   Meteor.call("contacts.remove", { contactId: _id });
  // };

  return (
    <div className="mt-10">
      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
        Contact list
      </h3>
      {isLoading() ? (
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
                  {contact.imageUrl ? (
                    <img
                      className="h-10 w-10 rounded-full"
                      src={contact.imageUrl}
                      alt=""
                    />
                  ) : (
                    <UserIcon
                      className="h-10 w-10 text-gray-700 rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {contact.name}
                  </p>
                  <p className="text-sm font-medium text-gray-500 truncate">
                    {contact.email}
                  </p>
                  <p className="text-sm font-medium text-gray-500 truncate">
                    {contact.walletId}
                  </p>
                </div>
                <div>
                  <a
                    href="#"
                    onClick={(event) => archiveContact(event, contact._id)}
                    className="inline-flex items-center shadow-sm px-2.5 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-full bg-blue-500 hover:bg-gray-50"
                  >
                    <ArchiveIcon
                      className="h-5 w-5 text-white hover:text-gray-700"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
