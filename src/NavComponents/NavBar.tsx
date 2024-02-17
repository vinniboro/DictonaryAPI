import DictionarySearch from "./DictionarySearch";
import { Outlet, Link } from "react-router-dom";
import React from 'react';


export const NavComponent: React.FC = () => {
  return(
    <nav>
        <Link className="menuBtn" to="/" >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M3.25098 13.2148C3.25098 13.6719 3.60254 14.0674 4.16504 14.0674C4.4375 14.0674 4.68359 13.918 4.90332 13.7422L13.6221 6.4209C13.8682 6.20996 14.1494 6.20996 14.3955 6.4209L23.1055 13.7422C23.3164 13.918 23.5625 14.0674 23.835 14.0674C24.3535 14.0674 24.749 13.7422 24.749 13.2324C24.749 12.9336 24.6348 12.6963 24.4062 12.5029L21.9365 10.4287V6.77246C21.9365 6.37695 21.6816 6.13086 21.2861 6.13086H20.0732C19.6865 6.13086 19.4229 6.37695 19.4229 6.77246V8.31055L15.2568 4.8125C14.4922 4.1709 13.5254 4.1709 12.7607 4.8125L3.60254 12.5029C3.36523 12.6963 3.25098 12.96 3.25098 13.2148ZM6.10742 21.1162C6.10742 22.3818 6.89844 23.1465 8.20801 23.1465H19.8008C21.1016 23.1465 21.9014 22.3818 21.9014 21.1162V14.4365L14.5449 8.27539C14.2021 7.97656 13.7891 7.98535 13.4551 8.27539L6.10742 14.4365V21.1162ZM16.3115 21.4941H11.6973V15.8691C11.6973 15.4561 11.9697 15.1924 12.3828 15.1924H15.6348C16.0479 15.1924 16.3115 15.4561 16.3115 15.8691V21.4941Z" fill="#eee"/>
        </svg>
    </Link>
    <Link className="menuBtn" to="/MyBookmarked" >

        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 20" fill="none">
                    <path d="M1.99902 19.3223C2.47363 19.3223 2.78125 19.0762 3.52832 18.3467L6.9209 14.9893C6.95605 14.9453 7.03516 14.9453 7.07031 14.9893L10.4717 18.3467C11.2188 19.0762 11.5176 19.3223 12.001 19.3223C12.7041 19.3223 13.1436 18.8389 13.1436 18.0479V2.70215C13.1436 0.953125 12.2295 0.0302734 10.498 0.0302734H3.49316C1.76172 0.0302734 0.847656 0.953125 0.847656 2.70215V18.0479C0.847656 18.8389 1.28711 19.3223 1.99902 19.3223Z" fill="#eee"/>
                </svg>

                </Link>


                <DictionarySearch />

      </nav>

  );
};