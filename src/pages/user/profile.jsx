import React from 'react';
import { Link } from 'react-router-dom';

//component

import ProfileCard from "../../components/cards/profilecard.jsx";

export default function profile() {
  return (
    <>
          <div className="flex flex-wrap mt-4">
            <div className="w-full mb-12 px-4">
              <ProfileCard />
            </div>
          </div>
        </>

  );
}



