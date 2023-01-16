import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./main.css";

const Main = () => {
  var [time, setTime] = useState("");
  var [Day, setDay] = useState("");
  var [city, setCity] = useState("Cairo");
  var baseURL = `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=Egypt&method=8`;

  useEffect(() => {
    axios.get(baseURL).then((res) => {
      setTime(res.data.data.timings);
      setDay(getCurrentDate());
    });

  });
  function getCurrentDate(separator = "/") {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${year}${separator}${
      month < 10 ? `0${month}` : `${month}`
    }${separator}${date}`;
  }
  var days = [
    "الأحد",
    "الأثنين",
    "الثلاثاء",
    "الأربعاء",
    "الخميس",
    "الجمعة",
    "السبت",
  ];
  var d = new Date(getCurrentDate());
  var dayName = days[d.getDay()];
  const [isActive, setIsActive] = useState(true);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const handleClick = (event) => {
    setIsActive(true);
    setIsActive3(false);
    setIsActive2(false);
  };
  const handleClick2 = (event) => {
    setIsActive2(true);
    setIsActive(false);
    setIsActive3(false);
  };
  const handleClick3 = (event) => {
    setIsActive3(true);
    setIsActive(false);
    setIsActive2(false);
  };
  return (
    <>
      <div className="tittle">
        <h1>مواقيت الصلاة</h1>
      </div>
      <div className="city">
        <h6
          onClick={() => {
            setCity("Cairo");
            handleClick();
          }}
          className={isActive ? "active" : ""}
        >
          القاهرة
        </h6>
        <h6
          onClick={() => {
            setCity("Alexandria");
            handleClick2();
          }}
          className={isActive2 ? "active" : ""}
          id="Alex"
        >
          الأسكندرية
        </h6>
        <h6
          onClick={() => {
            setCity("MarsaMatroh");
            handleClick3();
          }}
          className={isActive3 ? "active" : ""}
          id="Matroh"
        >
          مرسي مطروح
        </h6>
      </div>
      <div className="Date">
        <h5>اليوم : {dayName} </h5>
        <h5>التاريخ : {Day}</h5>
      </div>
          <div className="container">
      <div className="row">
        <div id="Fajr" className="col-xl-3 col-lg-12 ">
          <div className="prayWindow">
            <div className="Head">
              <h3 id="head">صلاة الفجر</h3>
            </div>
            <div className="time">
              <p className="timeParagraph"> {time.Fajr}</p>
            </div>
          </div>
        </div>
        <div id="sunrise" className="col-xl-3 col-lg-12  ">
          <div className="prayWindow">
            <div className="Head">
              <h3 id="head">صلاة الشروق</h3>
            </div>
            <div className="time">
              <p className="timeParagraph"> {time.Sunrise}</p>
            </div>
          </div>
        </div>
        </div>
        <div className="row">

        <div id="Duhr" className="col-xl-3 col-lg-12  ">
          <div className="prayWindow">
            <div className="Head">
              <h3 id="head">صلاة الظهر</h3>
            </div>
            <div className="time">
              <p className="timeParagraph"> {time.Dhuhr}</p>
            </div>
          </div>
          <div />
        </div>

        <div id="Asr" className="col-xl-3 col-lg-12  ">
          <div className="prayWindow">
            <div className="Head">
              <h3 id="head">صلاة العصر</h3>
            </div>
            <div className="time">
              <p className="timeParagraph"> {time.Asr}</p>
            </div>
          </div>
        </div>
        </div>
        <div className="row">
        <div id="Maghrib" className="col-xl-3 col-lg-12  ">
          <div className="prayWindow">
            <div className="Head">
              <h3 id="head">صلاة المغرب</h3>
            </div>
            <div className="time">
              <p className="timeParagraph"> {time.Maghrib}</p>
            </div>
          </div>
        </div>
        <div id="Aisha" className="col-xl-3 col-lg-12  ">
          <div className="prayWindow">
            <div className="Head">
              <h3 id="head">صلاة العشاء</h3>
            </div>
            <div className="time">
              <p className="timeParagraph"> {time.Isha}</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Main;
