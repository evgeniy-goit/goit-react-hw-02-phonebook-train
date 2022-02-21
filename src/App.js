import { Component } from "react";
import Form from "./components/Form/form";

class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHendler = (data) => {
    console.log(data);
  };

  render() {
    return (
      <div>
        Phonebook
        <Form onSubmit={this.formSubmitHendler} />
      </div>
    );
  }
}

export default App;
