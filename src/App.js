import React from 'react';
import './App.css'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      // Add magic 8 ball outcomes to the array
      answerArray: ["Yes", "No", "Maybe", "This is likely", "Test your luck", "It is your luckyday", "I think this is unlikely", "Be careful"],
      question: "This is a test"
    }
  }

  getAnswer = () => {
    // destructures answerArray out of state
    const { answerArray } = this.state
    // write your code here!

    // Update the return statement below to reflect the outcome of your code.
    return this.state.question + " " + this.state.answerArray[Math.floor(Math.random() * 8)]
  }

  handleChange = (e) => {
    // gets the event from the input on change and updates state
    this.setState({ question: e.target.value})
  }

  handleSubmit = () =>{
    // destructures question out of state
    const { question } = this.state
    // calls the getAnswer function and saves the outcome as answer
    const answer = this.getAnswer()
    this.setState({ answer: answer})
  }

  render(){
    return (
        <div>
        <h1>Magic 8 Ball</h1>
        <script src="http://use.edgefonts.net/butcherman.js"></script>
        <img src="https://cdn.pixabay.com/photo/2017/12/12/09/05/drawing-3014194_960_720.jpg" className="image"/>
        <br />
        <input
          id="inputBox"
          type='text'
          placeholder="Have a question?"
          onChange={ this.handleChange }
        />
        <br />
        <button onClick={ this.handleSubmit }>
          Ask the Magic 8 Ball a Question
        </button>
        <p> { this.state.answer } </p>
      </div>
    )
  }
}

export default App;
