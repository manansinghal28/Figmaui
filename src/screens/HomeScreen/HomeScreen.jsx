import React from "react";
import "./style.css";

export const HomeScreen = () => {
  return (
    <div className="home-screen">
      <div className="div">
        <div className="outdoor-climate">
          <div className="temp">
            <div className="element-c">
              <div className="text-wrapper">29 C</div>
              <div className="ellipse" />
            </div>
            <img
              className="temperature"
              alt="Temperature"
              src="https://c.animaapp.com/BLxZJNoD/img/temperature-3.svg"
            />
          </div>
          <div className="humidity">
            <div className="text-wrapper-2">52</div>
            <img className="img" alt="Humidity" src="https://c.animaapp.com/BLxZJNoD/img/humidity-3.svg" />
          </div>
          <div className="UV-index">
            <div className="div-wrapper">
              <div className="text-wrapper-3">5</div>
            </div>
            <img className="img-2" alt="Vector" src="https://c.animaapp.com/BLxZJNoD/img/vector.svg" />
          </div>
          <img className="weather" alt="Weather" src="https://c.animaapp.com/BLxZJNoD/img/weather.svg" />
          <div className="AQI">
            <div className="AQI-wrapper">
              <div className="AQI-2">
                <div className="AQI-3">
                  <div className="AQI-2">
                    <div className="AQI-4">
                      <div className="text-wrapper-4">58</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img className="AQI-5" alt="Aqi" src="https://c.animaapp.com/BLxZJNoD/img/aqi@2x.png" />
          </div>
        </div>
        <img className="indihood-map" alt="Indihood map" src="https://c.animaapp.com/BLxZJNoD/img/indihood-map.png" />
        <div className="scenes">
          <div className="scene">
            <img
              className="office-running-icon"
              alt="Office running icon"
              src="https://c.animaapp.com/BLxZJNoD/img/office-running-icon@2x.png"
            />
            <div className="office-running">
              Office
              <br />
              running
            </div>
          </div>
          <div className="scene-2">
            <div className="text-wrapper-5">Party</div>
            <img className="party" alt="Party" src="https://c.animaapp.com/BLxZJNoD/img/party-@2x.png" />
          </div>
          <div className="scene-3">
            <div className="text-wrapper-6">Cleaning</div>
            <img className="cleaning" alt="Cleaning" src="https://c.animaapp.com/BLxZJNoD/img/cleaning@2x.png" />
          </div>
          <div className="scene-4">
            <div className="text-wrapper-7">Energy Saving</div>
            <img
              className="energy-save"
              alt="Energy save"
              src="https://c.animaapp.com/BLxZJNoD/img/energy-save@2x.png"
            />
          </div>
          <div className="scene-5">
            <img
              className="festive-icon"
              alt="Festive icon"
              src="https://c.animaapp.com/BLxZJNoD/img/festive-icon@2x.png"
            />
            <div className="text-wrapper-8">Festive</div>
          </div>
        </div>
        <div className="home">
          <img className="home-2" alt="Home" src="https://c.animaapp.com/BLxZJNoD/img/home--3@2x.png" />
          <div className="water-consumption">
            <div className="flexcontainer">
              <p className="text">
                <span className="span">
                  0<br />
                </span>
              </p>
              <p className="text">
                <span className="span">litre</span>
              </p>
            </div>
            <img className="vector" alt="Vector" src="https://c.animaapp.com/BLxZJNoD/img/vector-2.svg" />
          </div>
          <div className="alert">
            <div className="text-wrapper-9">0</div>
            <img className="img-2" alt="Frowny face" src="https://c.animaapp.com/BLxZJNoD/img/frowny-face@2x.png" />
          </div>
          <div className="total-water-usage">
            <div className="flexcontainer">
              <p className="span-wrapper">
                <span className="text-wrapper-10">
                  0<br />
                </span>
              </p>
              <p className="span-wrapper">
                <span className="text-wrapper-10">litre</span>
              </p>
            </div>
            <img className="vector" alt="Vector" src="https://c.animaapp.com/BLxZJNoD/img/vector-2.svg" />
          </div>
          <div className="power-consumption">
            <div className="overlap-group">
              <div className="power-consumption-2">
                <div className="flexcontainer-2">
                  <p className="p">
                    <span className="text-wrapper-11">
                      3.2 <br />
                    </span>
                  </p>
                  <p className="p">
                    <span className="text-wrapper-11">K</span>
                    <span className="text-wrapper-11">wh</span>
                  </p>
                </div>
                <img
                  className="clip-path-group"
                  alt="Clip path group"
                  src="https://c.animaapp.com/BLxZJNoD/img/clip-path-group@2x.png"
                />
              </div>
              <img className="vector-2" alt="Vector" src="https://c.animaapp.com/BLxZJNoD/img/vector-3.svg" />
            </div>
          </div>
          <div className="solar-reading">
            <div className="electricity">
              <div className="flexcontainer-3">
                <p className="p">
                  <span className="text-wrapper-11">
                    1.7 <br />
                  </span>
                </p>
                <p className="p">
                  <span className="text-wrapper-11">K</span>
                  <span className="text-wrapper-11">Wh</span>
                </p>
              </div>
            </div>
            <img className="group" alt="Group" src="https://c.animaapp.com/BLxZJNoD/img/group@2x.png" />
          </div>
        </div>
        <div className="halls">
          <div className="overlap">
            <div className="text-wrapper-12">Halls</div>
          </div>
        </div>
        <div className="meeting-rooms">
          <div className="overlap-2">
            <div className="text-wrapper-13">Meeting Rooms</div>
          </div>
        </div>
        <div className="washrooms">
          <div className="overlap">
            <div className="text-wrapper-14">Washrooms</div>
          </div>
        </div>
        <div className="common-areas">
          <div className="overlap-3">
            <div className="text-wrapper-15">Common Areas</div>
          </div>
        </div>
        <div className="outdoor">
          <div className="overlap-3">
            <div className="text-wrapper-15">Outdoor</div>
          </div>
        </div>
      </div>
    </div>
  );
};
