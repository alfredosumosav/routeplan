import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import NavBarContainer from "./navbar/navbar_container";
import Modal from "./modal/modal";
import MainPage from "./main/main_page";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import TripShowContainer from "./trip/trip_show_container";
import ProfileContainer from "./profile/profile_container";

const App = () => (
  <div className="main">
    <NavBarContainer />

    <Modal />
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/trip" component={TripShowContainer} />
      <ProtectedRoute
        exact
        path="/trips/:tripId"
        component={TripShowContainer}
      />
      <ProtectedRoute
        exact
        path="/users/:userId"
        component={ProfileContainer}
      />
      <Route exact path="/" component={MainPage} />
    </Switch>
    <footer>
      <div className="footer-container">
        <div className="member">
          <div className="member-name">Alfredo Sumosa</div>
          <div className="member-links">
            <div className="gh">
              <a href="https://github.com/alfredosumosav" target="_blank">
                <i className="fab fa-github"></i>
              </a>
            </div>
            <div className="in">
              <a
                href="https://linkedin.com/in/alfredosumosa"
                target="_blank"
                alt="Linkedin"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="member">
          <div className="member-name">Lance Wong</div>
          <div className="member-links">
            <div className="gh">
              <a href="https://github.com/LanceSanity" target="_blank">
                <i className="fab fa-github"></i>
              </a>
            </div>
            <div className="in">
              <a
                href="https://www.linkedin.com/in/lanceawong"
                target="_blank"
                alt="Linkedin"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="member">
          <div className="member-name">Renata Santoso</div>
          <div className="member-links">
            <div className="gh">
              <a href="https://github.com/resant18" target="_blank">
                <i className="fab fa-github"></i>
              </a>
            </div>
            <div className="in">
              <a
                href="https://www.linkedin.com/in/renata-santoso"
                target="_blank"
                alt="Linkedin"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="member">
          <div className="member-name">Timothy Scatterday</div>
          <div className="member-links">
            <div className="gh">
              <a href="https://github.com/timscatterday" target="_blank">
                <i className="fab fa-github"></i>
              </a>
            </div>
            <div className="in">
              <a
                href="https://www.linkedin.com/in/tim-scatterday-09283067"
                target="_blank"
                alt="Linkedin"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default App;
