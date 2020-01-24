import React from "react"
import ContactCard from "./ContactCard"

function ContactList() {
    return (
        <div className="contacts">
        <ContactCard
               contact={{name: "Mr. Saravana", imgUrl: "http://placekitten.com/300/200", phone: "(212) 555-1234", email: "mr.saravana@gmail.meow"}}
           />
       <ContactCard
              contact={{name: "Mr. gmail", imgUrl: "http://placekitten.com/300/100", phone: "(141) 444-7845", email: "mr.Einsten@gmail.meow"}}
          />
          <ContactCard
                 contact={{name: "Mr. Jumps", imgUrl: "http://placekitten.com/400/200", phone: "(998) 456-2244", email: "mr.Jumps@gmail.meow"}}
             />


        </div>
    )
}

export default ContactList
