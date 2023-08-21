import {Route, Routes} from "react-router";
import {Menu} from "./pages/menu/menu";
import {Catalogs} from "./pages/catalogs/catalogs";
import {Details} from "./pages/details/details";
import {Language} from "./pages/language/language";


function App() {

  return (
      <>
          <Menu/>
          <div className={'container'}>
              <Routes>
                  <Route path={"nurDemo/"} element={<Language/>}/>
                  <Route path={"nurDemo/catalogs/:lang"} element={<Catalogs/>}/>
                  <Route path={"nurDemo/details/:id"} element={<Details/>}/>
                  <Route path={"*"} element={<h1>Error 404 (Page Not Found)</h1>}/>
              </Routes>
          </div>
      </>
  );
}

export default App;
