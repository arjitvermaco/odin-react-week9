import AppStore from "./Context/AppStore";
import Banner from "./components/Banner";
import ChangeAppName from "./components/ChangeAppName";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LargeForms from "./components/LargeForms";
import MealSearch from "./components/MealSearch";
import TodoList from "./components/TodoList";
import UseEffectDemo from "./components/UseEffectDemo";
import UserProfile from "./components/UserProfile";
import UsingContext from "./components/UsingContext";

function App() {
  return (
    // JSX
    <>
      {/* <Header/>
      <Banner/>
      <Footer/> */}
      {/* <TodoList/> */}
      {/* <UseEffectDemo/> */}
      {/* <MealSearch/> */}
      <AppStore>
        {/* <UsingContext/>
        <ChangeAppName/> */}
        <UserProfile/>
      </AppStore>
    </>
  );
}

export default App;
