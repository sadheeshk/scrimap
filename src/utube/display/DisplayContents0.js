import React from "react"
import Content from "./Content"


function DisplayContents(){

  

  return(
        <div className="display-cards">
          <Content
            content={{imgUrl:"https://picsum.photos/150/100",
                      name:"AAAA",
                      phone:"415263",
                      email:"a@mail.com"}}/>
          <Content
           content={{imgUrl:"https://picsum.photos/150/100",
                    name:"BBBB",
                    phone:"784512",
                    email:"b@mail.com"}}/>
          <Content
            content={{imgUrl:"https://picsum.photos/150/100",
                   name:"CCC",
                   phone:"6685958",
                   email:"c@mail.com"}}/>
          <Content
           content={{imgUrl:"https://picsum.photos/150/100",
                 name:"DDD",
                 phone:"74585",
                 email:"d@mail.com"}}/>
          <Content
           content={{imgUrl:"https://picsum.photos/150/100",
                name:"EEE",
                phone:"8554",
                email:"e@mail.com"}}/>
          <Content
            content={{imgUrl:"https://picsum.photos/150/100",
                name:"FFFFF",
                phone:"9965568",
                email:"f@mail.com"}}/>
          <Content
            content={{imgUrl:"https://picsum.photos/150/100",
                name:"JJJJ",
                phone:"8984948",
                email:"J@mail.com"}}/>
        </div>
   )
}

export default DisplayContents
