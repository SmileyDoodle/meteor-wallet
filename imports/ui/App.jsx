import React from "react";
import { Header } from "./Header";
import { Wallet } from "./Wallet";
import { ContactForm } from "./ContactForm";
import { ContactList } from "./ContactList";

export const App = () => (
  <div>
    <Header />
    <div className="min-h-full">
      <div className="max-w-4xl mx-auto p-2">
        <Wallet />
        <ContactForm />
        <ContactList />
      </div>
    </div>
  </div>
);
