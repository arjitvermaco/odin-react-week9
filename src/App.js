import { Route, Routes } from "react-router";
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
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CoursesPage from "./pages/CoursesPage";
import ReactCourse from "./pages/course/ReactCourse";
import HtmlCourse from "./pages/course/HtmlCourse";
import ProductsPage from "./pages/ProductPage";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";

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
      {/* <UsingContext/>
        <ChangeAppName/> */}
      {/* <AppStore>
        
        <UserProfile/>
      </AppStore> */}

      <Header />
      {/* <Routes>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="courses" element={<CoursesPage />}>
          <Route path="react" element={<ReactCourse />} />
          <Route path="html" element={<HtmlCourse />} />
        </Route>
        <Route path="products/:name" element={<ProductsPage />} />
      </Routes> */}

      {/* //Routing for Ecommerce project */}

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="category/:id" element={<CategoryPage />} />
        <Route path="product/:id" element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;
