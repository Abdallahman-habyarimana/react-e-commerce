
import React from 'react';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
      this.state = {
        user: {
          id: '',
          name: '',
        }
      
    }
  }

  loadUser = () => {
    this.setState({
      user: {
        ...this.state.user,
        id: '1',
        name: 'Abdallah'
      }
    })

   
  }
  render() {
     console.log(this.state.user)
    return(
      <div className='container'>
      <h1>Hello world</h1>

      <button onClick={this.loadUser}>Click Me</button>
    </div>
    )
  }
}

export default App;
