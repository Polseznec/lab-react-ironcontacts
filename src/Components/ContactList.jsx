import React from "react";
import contactsJSON from "../contacts.json";


//console.log(contactsJSON);

class ContactList extends React.Component {
  state = {
    contacts: contactsJSON.splice(0, 5),
  };
  handleRandomizeContact = () => {
    // console.log('CLIC BITCH')
    const newMovies = contactsJSON;
    let newActor = newMovies[Math.floor(Math.random() * newMovies.length - 1)];
    let copy = [...this.state.contacts];
    copy.push(newActor);
    this.setState({ contacts: copy });
  };

  sortByName = () => {
    //console.log("Click Name");
    const newMovies = contactsJSON;
    newMovies.sort((a,b) =>{
        return a.name.localeCompare(b.name); 
    })
    this.setState({contacts:newMovies})
  };
  sortByPopularity = () => {
    //console.log("Click Popularity");
    const newMovies = contactsJSON;
    newMovies.sort((a,b) =>{
        return b.popularity - a.popularity; 
    })
    this.setState({contacts:newMovies})
  };

  //   handleShowMore = () => {
  //     const newcontacts = contactsJSON.splice(0, 5);

  //     const copyWithNewContact = [...newcontacts, ...this.state.contacts];

  //     this.setState({
  //       contact: copyWithNewContact,
  //     });
  //   };

  render() {
    return (
      <div className="Contact">
        <button onClick={this.handleRandomizeContact}>
          Add Ramdom Contact
        </button>
        <button onClick={this.sortByName}>Sort By Name</button>
        <button onClick={this.sortByPopularity}>Sort By Popularity</button>

        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((contact, index) => {
              //   console.log(contact.name);
              //   console.log(contact.pictureUrl);
              //   console.log(contact.popularity);

              return (
                <tr class="contactDisplayer" key={index}>
                  <td>
                    <img src={contact.pictureUrl} alt="contactPic" />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ContactList;
