import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Olivia'}
          fotoUsuario={'https://picsum.photos/50/102'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'Thor'}
          fotoUsuario={'https://picsum.photos/50/100'}
          fotoPost={'https://picsum.photos/200/100'}
        />
        <Post
          nomeUsuario={'Catarina'}
          fotoUsuario={'https://picsum.photos/50/103'}
          fotoPost={'https://picsum.photos/200/120'}
        />
      </MainContainer>
    );
  }
}

export default App;
