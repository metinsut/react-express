import React, { Fragment } from "react";
import { Row, P1, P2, Self, Image } from "./person.styled";

class PersonList extends React.Component {
   render() {
      let { person, count } = this.props;
      return (
         <Row>
            <Self>
               <P1>Count</P1>
               <P2>{count + 1}</P2>
            </Self>
            <Self>
               <P1>First Name</P1>
               <P2>{person.first_name}</P2>
            </Self>
            <Self>
               <P1>Last Name</P1>
               <P2>{person.last_name}</P2>
            </Self>
            <Self>
               <P1>Gender</P1>
               <P2>{person.gender}</P2>
            </Self>
            <Self>
               <P1>Email</P1>
               <P2>{person.email}</P2>
            </Self>
            <Self>
               <P1>City</P1>
               <P2>{person.city}</P2>
            </Self>
            <Self>
               <P1>Country</P1>
               <P2>{person.country}</P2>
            </Self>
            <Self>
               <P1>Depatman</P1>
               <P2>{person.departman}</P2>
            </Self>
            <Self>
               <P1>Job Title</P1>
               <P2>{person.job_title}</P2>
            </Self>
            <Self>
               <P1>date</P1>
               <P2>{person.date}</P2>
            </Self>
            <Self>
               <P1>date2</P1>
               <P2>{person.date2}</P2>
            </Self>
            {/* <Self>
                         <P1>date3</P1>
                         <P2>{person.date3.$date}</P2>
                    </Self> */}
            <Self>
               <P1>date4</P1>
               <P2>{person.date4}</P2>
            </Self>
            <Self>
               <P1>Year</P1>
               <P2>{person.year}</P2>
            </Self>
            <Self>
               <P1>Time</P1>
               <P2>{person.time}</P2>
            </Self>
            <Self>
               <P1>image</P1>
               <Image src={person.image} />
            </Self>
            <Self>
               <P1>avatar</P1>
               <Image src={person.avatar} />
            </Self>
            <Self>
               <P1>image_url</P1>
               <Image src={person.image_url} />
            </Self>
            <Self>
               <P1>language</P1>
               <P2>{person.language}</P2>
            </Self>
            <Self>
               <P1>web</P1>
               <P2>{person.web}</P2>
            </Self>
            <Self>
               <P1>salary</P1>
               <P2>{person.salary}</P2>
            </Self>
            <Self>
               <P1>sell</P1>
               <P2>{person.sell}</P2>
            </Self>
            <Self>
               <P1>lat</P1>
               <P2>{person.lat}</P2>
            </Self>
            <Self>
               <P1>long</P1>
               <P2>{person.long}</P2>
            </Self>
         </Row>
      );
   }
}

export default PersonList;
