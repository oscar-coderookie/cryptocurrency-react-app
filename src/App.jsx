import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, Footer, LoadingComponent } from "./components";
import MarketPage from "./pages/MarketPage/MarketPage";
import HomePage from "./pages/HomePage/HomePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import React, { Suspense, useState, useEffect } from "react";
import { checkSession } from "./api/auth.api";
import CompanysPage from "./pages/CompanysPage/CompanysPage";
import MarketDetail from "./pages/MarketDetail/MarketDetail";
import GlobalPage from "./pages/GlobalPage/GlobalPage";
import CompaniesDetail from "./pages/CompaniesDetail/CompaniesDetail";
import UserDetailPage from "./pages/UserDetailPage/UserDetailPage";
import LoginPage from "./pages/LoginPage/LoginPage";

export const UserContext = React.createContext(null);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserData();
  });

  const getUserData = async () => {
    try {
      const user = await checkSession();
      if (!user.message) {
        saveUser(user);
      } else {
        saveUser(false);
      }
    } catch (error) {
      console.log("error get user data (check session)", error);
    }
  };
  const saveUser = (user) => {
    setUser(user);
  };

  return (
    <Router>
      <UserContext.Provider value={user}>
        <div className="App">
        
          <Header saveUser={saveUser} />
          <Suspense fallback={<LoadingComponent />}>
            <Switch>
              <Route exact path="/" render={(props)=> <HomePage {...props} user={user} />}/>
              <Route exact path="/market/coins" render={(props)=> <MarketPage {...props} saveUser={saveUser} /> } />
              <Route exact path="/market/coins/:id" render={(props)=> <MarketDetail {...props} saveUser={saveUser} /> }/>
              <Route exact path="/market/companies" render={(props)=> <CompanysPage {...props} saveUser={saveUser} />}/>
              <Route exact path="/market/companies/:id" render={(props)=> <CompaniesDetail saveUser={saveUser} {...props} />}/>
              <Route exact path="/market/global" render={(props)=> <GlobalPage {...props} saveUser={saveUser} />}/>
              <Route exact path="/users/:id" render={(props)=> <UserDetailPage {...props} saveUser={saveUser} />}/>
              <Route exact path="/contact" render={(props)=> <ContactPage />}/>
              <Route exact path="/register" render={(props)=> <RegisterPage />}/>
              <Route exact path="/login" render={(props)=> <LoginPage {...props} saveUser={saveUser} />}>
                
              </Route>
            </Switch>
          </Suspense>

          <Footer />
        </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
