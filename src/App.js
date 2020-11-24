import styled from 'styled-components/macro'
import useUserLocation from './hooks/useUserLocation'
import MainPage from './MainPage'
import ResultPage from './ResultPage'

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
