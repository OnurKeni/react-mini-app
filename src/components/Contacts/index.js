import {useState,useEffect} from "react";

import List from "./List";
import Form from "../Form";

function Contacts() {
const [contacts, setContacts] = useState([
    {name: 'John Doe', phoneNumber: '111-111-1111'},
    {name: 'Jane Doe', phoneNumber: '222-222-2222'},
    {name: 'Jack Doe', phoneNumber: '333-333-3333'},
]);

useEffect(() => {
    console.log('contacts', contacts);
}, [contacts]);

    return (
        <div className="bg-white p-6 mx-4 md:mx-0 rounded-2xl w-full md:w-[600px]">
            <h1 className="text-4xl font-semibold mb-6">Contacts</h1>
          <div className="md:flex">
              <Form addContact={setContacts} contacts={contacts}/>
              <List contacts={contacts}/>
          </div>
        </div>
    );
}

export default Contacts;