import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import DictionarySearch from "../NavComponents/DictionarySearch";

import coverPhoto from "..//Images/alex-block-PdDBTrkGYLo-unsplash.jpg";
import hpPhoto from "../Images/unseen-studio-s9CC2SKySJM-unsplash.jpg";
import reactPhoto from "../Images/alex-block-PdDBTrkGYLo-unsplash.jpg"

interface LayoutProps {
  //Enter props here
};

const Layout: React.FC<LayoutProps> = () => {

  return (
    <>
      

      <h2 style={{paddingLeft:'5vh'}}>My Quiz</h2>

        <div id="home">
      <Outlet />


        <div id="Categories-main">
        <div id="category-container">
        <Link id="customQuiz" className="category" to="/CustomQuiz">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 33 34" fill="none">
              <path d="M14.8702 31.5265C14.8702 32.4055 15.6341 33.2113 16.5654 33.2008C17.4863 33.2008 18.2606 32.4056 18.2606 31.5265L18.2502 18.7077L31.0795 18.7077C31.9794 18.7077 32.7538 17.9333 32.7538 17.0125C32.7329 16.0916 31.9794 15.3172 31.069 15.3277L18.2502 15.3172L18.2502 2.50883C18.2606 1.59843 17.4863 0.824063 16.5654 0.824062C15.6445 0.844991 14.8702 1.59843 14.8702 2.49836L14.8702 15.3277L2.0513 15.3172C1.1723 15.3172 0.356074 16.0916 0.377003 17.0125C0.377003 17.9333 1.1723 18.7077 2.0513 18.7077L14.8702 18.6972L14.8702 31.5265Z" fill="#FF7A00"/>
            </svg>
            </div>
          </Link>



            <Link style={{ backgroundImage: `url(${hpPhoto})` }} className="category" to="/SwedishQuiz" >
              <div>
                <h2>Högskoleprovet</h2>
                <p>10 Questions</p>
              </div>
          </Link>

          <Link  style={{ backgroundImage: `url(${coverPhoto})` }} className="category" to="/EnglishWords" >
          <div>
              <h2>Cambridge C1 Advanced</h2>
              <p>10 Questions</p>
            </div>
          </Link>

          <Link style={{ backgroundImage: `url(${reactPhoto})` }}  className="category" to="/EnglishWords" >
          <div>

            </div>
          </Link>

        </div>

        </div>

    </div>

    </>
  );
};

export default Layout;
