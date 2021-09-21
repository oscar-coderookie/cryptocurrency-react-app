import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Header, Footer, LoadingComponent } from "./components";
import MarketPage from "./pages/MarketPage/MarketPage";
import HomePage from "./pages/HomePage/HomePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { Suspense, useState, useEffect } from "react";

import { auth } from "./config/firebase";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser({ uid: currentUser.uid, email: currentUser.email });
      } else {
        setUser(null);
      }
      setLoading(false);
    });
  }, []);

  function handleLogout() {
    auth.signOut().catch((err) => {
      console.error("Error in signOut", err.message);
    });
  }

  return (
    <Router>
      <div className="App">
        <Header hasUser={!!user} onLogout={() => handleLogout()} />
        <Suspense fallback={<LoadingComponent />}>
        {loading ? (<LoadingComponent/>) : (<Switch>
            <Route exact path="/">
              {user ? <HomePage userId={user.uid} user={user} /> : <RegisterPage onLogin={setUser} />}
            </Route>
            <Route exact path="/market">
              {user ? <MarketPage /> : <Redirect to="/" />}
            </Route>
            <Route exact path="/contact">
              {user ? <ContactPage /> : <Redirect to="/" />}
            </Route>
            <Route exact path="/register">
              <RegisterPage onLogin={setUser} />
            </Route>
          </Switch>)}
        </Suspense>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
