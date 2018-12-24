import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton'
import { throws } from 'assert';

class QuizQuestion extends Component{
    handleClick(button_text){
      if(button_text === this.props.quiz_question.answer){
        this.props.showNextQuestionHandler();
      }
    }
    render(){
        return(
            <main>
            <section className="QuizQuestion">
              <p>{this.props.quiz_question.instruction_text}</p>
            </section>
            <section className="buttons">
              <ul>
                {this.props.quiz_question.answer_options.map((answer_option, index) => {
                  return <QuizQuestionButton key = {index} button_text = {answer_option}
                  clickHandler = {this.handleClick.bind(this)}
                  />
                })}
              </ul>
            </section>
          </main>
    
        )
    }
}

export default QuizQuestion