import Header from "./components/layout/Header";
import HeroSection from ".//components/HeroSection/HeroSection"
import GlobalStyle from './GlobalStyles';
import NewsList from "./components/NewsList/NewsList";
import Sidebar from "./components/Sidebar/Sidebar";
import MainContent from "./components/MainContent";

const App = () => {
  return (
    <>
   <GlobalStyle />
   <Header />
   <MainContent>
   <HeroSection />
   <Sidebar />
   </MainContent>
   <NewsList />
   
    </>
  );
}

export default App;
