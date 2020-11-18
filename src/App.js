import MainPage from './MainPage'
import styled from 'styled-components/macro'

function App() {
  return (
    <AppStyled>
      <MainPage></MainPage>
    </AppStyled>
  );
}

const AppStyled = styled.div`
max-width: 375px;
`

export default App;
