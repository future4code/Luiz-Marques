import React from "react";
import styled from 'styled-components'

const Reset = styled.div`
margin-left: 30%
`

const BoldText = styled.span`
  font-weight: bold;
  color: red;
  margin-bottom: 0.2em;
`
const MessageFormContainer = styled.div`
  display: flex;
  margin-bottom:0.3em
`

const UserInput = styled.input`
  width: 100px;
  display: flex;
  border-radius: 0.5em;
  border: none;
  margin-left: 0.2em
`

const TextInput = styled.input`
  flex: 1;
  border-radius: 0.5em;
  margin-right: 0.5em;
  margin-left: 0.5em;
  border: none;
`
const AppContainer = styled.div`
  max-width: 600px;
  height: 99vh;
  border: 1px solid black;
  display: flex;
  flex-direction: column-reverse;
  background-color: #e5ddd5;
`

const ButtonSend = styled.button`
color: white;
background-color: green;
border-radius: 0.5em;
margin-right: 0.1em
`
const BalloonMsg = styled.p`
background-color: #DDF7C8;
display: flex;
justify-content: flex-start;
border-radius: 0.5em;
margin-right:1.5em;
margin-left:0.5em;
max-width: 80%;
min-width: 8%;
margin-bottom: 1em;
word-wrap: break-word;
padding: 0.9em 0.8em;
font-weight: 450;
line-height: 1.3;
box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
overflow: hidden
`

class WhatsLab extends React.Component {
  state = {
    
    texts: [],
    
    inputUser: "",
    inputMessenger: ""
  };

  addtext = () => {
    
    const newtext = {
      user: this.state.inputUser,
      Msg: this.state.inputMessenger
    };

  
    const newtexts = [...this.state.texts, newtext];

    
    this.setState({ texts: newtexts, inputMessenger: ""});
  
  };

  onChangeInputtext = (event) => {
    
    this.setState({ inputUser: event.target.value });
  };

  onChangeInputMsg = (event) => {
    
    this.setState({ inputMessenger: event.target.value });
  };

  render() {
    
    const listMsg = this.state.texts.map((text) => {
      return (
        <BalloonMsg>
          <BoldText>{text.user}</BoldText>: {text.Msg}
        </BalloonMsg>
      );
    });

    return (
    <Reset>  
      <AppContainer>
        <MessageFormContainer>
          <UserInput input
            value={this.state.inputUser}
            onChange={this.onChangeInputtext}
            placeholder={"Usuario"}
          />
          <TextInput input
            value={this.state.inputMessenger}
            onChange={this.onChangeInputMsg}
            placeholder={"Mensagem"}
          />
          <ButtonSend onClick={this.addtext}>Enviar</ButtonSend>
          </MessageFormContainer>
        <div>{listMsg}</div>
      </AppContainer>
    </Reset>  
    );
  }
}

export default WhatsLab;
