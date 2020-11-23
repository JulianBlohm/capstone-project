import MainPage from './MainPage'
import styled from 'styled-components/macro'
import ResultPage from './ResultPage'
import useUserLocation from './hooks/useUserLocation'

function App() {

  const { setUserPlace, countyData, errorMessage, resetSearch, isCountyDataLoaded 
     } = useUserLocation()

  return (
    <AppStyled>
        {!isCountyDataLoaded ? 
        <MainPage
            setUserPlace={setUserPlace}
            errorMessage={errorMessage}
            /> :
        <ResultPage 
            countyData={countyData} 
            resetSearch={resetSearch}/>
        }
    </AppStyled>
  );
}

const AppStyled = styled.div`
max-width: 375px;
`

export default App;
