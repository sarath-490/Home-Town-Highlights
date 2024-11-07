// import React from 'react';
// import './popular.css';
// import { BsArrowLeftShort, BsArrowRightShort, BsDot } from "react-icons/bs";
// import img2 from '../../Interactive/Tirupathi/tirumala.jpg';
// import img5 from '../../Interactive/Amaravati/Dhyana BuddhaStatue.jpg';
// import img7 from '../../Interactive/Araku/Araku_Dudumawaterfalls.jpg';
// import img9 from '../../Interactive/Papikondalu/papikondalu.jpg';

// const Data = [
//   {
//     id: 1,
//     imgsrc: img2,
//     destTitle: 'Chittoor',
//     location: 'Tirumala',
//     grade: 'CULTURAL RELAX',
//   },
//   {
//     id: 2,
//     imgsrc: img5,
//     destTitle: 'Guntur',
//     location: 'Amaravathi',
//     grade: 'CULTURAL RELAX',
//   },
//   {
//     id: 3,
//     imgsrc: img7,
//     destTitle: 'Vizag',
//     location: 'Arku',
//     grade: 'CULTURAL RELAX',
//   },
//   {
//     id: 4,
//     imgsrc: img9,
//     destTitle: 'Alluri Sitharama Raju',
//     location: 'Papikondalu',
//     grade: 'CULTURAL RELAX',
//   },
// ];

// const Popular = ({ onAmravathiClick ,onArkuClick ,onPapiClick}) => { // Receive the handler as a prop
//   return (
//     <section className='popular section container'>
//       <div className="secContainer">
//         <div className="secHeader flex">
//           <div className="textDiv">
//             <h2 className="secTitle">Popular Destination</h2>
//             <p>From historical cities to natural spectacles, come see the best of the world!</p>
//           </div>

//           <div className="iconDiv flex">
//             <BsArrowLeftShort className='icon' />
//             <BsArrowRightShort className='icon' />
//           </div>
//         </div>

//         <div className="mainContent grid">
//           {Data.map(({ id, imgsrc, destTitle, location }) => {
//             return (
//               <div className="singleDestination" key={id}>
//                 <div className="destImage">
//                   <img src={imgsrc} alt={destTitle} className="" />
//                   <div className="overlayInfo">
//                     <h3>{destTitle}</h3>
//                     <p>{location}</p>
                    
//                     <BsArrowRightShort
//                       className='icon'
//                       onClick={() => {
//                         if (location === 'Amaravathi') {
//                           onAmravathiClick(); 
//                         }
//                         else if(location === 'Arku')
//                         {
//                           onArkuClick();
//                         }
//                         else if(location === 'Papikondalu')
//                           {
//                             onPapiClick();
//                           }
//                       }}
//                     />
//                   </div>
//                 </div>
//                 <div className="destFooter">
//                   <div className="number">0{id}</div>
//                   <div className="destText flex">
//                     <h6>{location}</h6>
//                     <span className="flex">
//                       <span className="dot"><BsDot className='icon' /></span> Dot
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Popular;

// import React from 'react';
// import './popular.css';
// import { BsArrowLeftShort, BsArrowRightShort, BsDot } from "react-icons/bs";
// import img2 from '../../Interactive/Tirupathi/tirumala.jpg';
// import img5 from '../../Interactive/Amaravati/Dhyana BuddhaStatue.jpg';
// import img7 from '../../Interactive/Araku/Araku_Dudumawaterfalls.jpg';
// import img9 from '../../Interactive/Papikondalu/papikondalu.jpg';

// const Data = [
//   {
//     id: 1,
//     imgsrc: img2,
//     destTitle: 'Chittoor',
//     location: 'Tirumala',
//     grade: 'CULTURAL RELAX',
//   },
//   {
//     id: 2,
//     imgsrc: img5,
//     destTitle: 'Guntur',
//     location: 'Amaravathi',
//     grade: 'CULTURAL RELAX',
//   },
//   {
//     id: 3,
//     imgsrc: img7,
//     destTitle: 'Vizag',
//     location: 'Arku',
//     grade: 'CULTURAL RELAX',
//   },
//   {
//     id: 4,
//     imgsrc: img9,
//     destTitle: 'Alluri Sitharama Raju',
//     location: 'Papikondalu',
//     grade: 'CULTURAL RELAX',
//   },
// ];

// const Popular = ({ onAmravathiClick, onArkuClick, onPapiClick }) => {
//   return (
//     <section className='popular section container'>
//       <div className="secContainer">
//         <div className="secHeader flex">
//           <div className="textDiv">
//             <h2 className="secTitle">Popular Destination</h2>
//             <p>From historical cities to natural spectacles, come see the best of the world!</p>
//           </div>

//           <div className="iconDiv flex">
//             <BsArrowLeftShort className='icon' />
//             <BsArrowRightShort className='icon' />
//           </div>
//         </div>

//         <div className="mainContent grid">
//           {Data.map(({ id, imgsrc, destTitle, location }) => {
//             return (
//               <div className="singleDestination" key={id}>
//                 <div className="destImage">
//                   <img src={imgsrc} alt={destTitle} className="" />
//                   <div className="overlayInfo">
//                     <h3>{destTitle}</h3>
//                     <p>{location}</p>

//                     <BsArrowRightShort
//                       className='icon'
//                       onClick={() => {
//                         if (location === 'Amaravathi') {
//                           onAmravathiClick();
//                         } else if (location === 'Arku') {
//                           onArkuClick();
//                         } else if (location === 'Papikondalu') {
//                           onPapiClick();
//                         }
//                       }}
//                     />
//                   </div>
//                 </div>
//                 <div className="destFooter">
//                   <div className="number">0{id}</div>
//                   <div className="destText flex">
//                     <h6>{location}</h6>
//                     <span className="flex">
//                       <span className="dot"><BsDot className='icon' /></span> 
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Popular;







import React from 'react';
import './popular.css';
import { BsArrowLeftShort, BsArrowRightShort, BsDot } from "react-icons/bs";
import img2 from '../../Interactive/Tirupathi/tirumala.jpg';
import img5 from '../../Interactive/Amaravati/Dhyana BuddhaStatue.jpg';
import img7 from '../../Interactive/Araku/Araku_Dudumawaterfalls.jpg';
import img9 from '../../Interactive/Papikondalu/papikondalu.jpg';
import { FaHotel } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


const Data = [
  {
    id: 1,
    imgsrc: img2,
    destTitle: 'Chittoor',
    location: 'Tirumala',
    grade: 'CULTURAL RELAX',
    hotelLink:'https://www.agoda.com/en-in/city/tirupati-in.html?site_id=1922866&tag=a6f754d1-7d5e-42fc-8c2d-215ba0efd149&gad_source=1&device=c&network=g&adid=702552111585&rand=3902263258653056467&expid=&adpos=&aud=kwd-306944265801&gclid=CjwKCAjwyfe4BhAWEiwAkIL8sFxfxzRkIlT38An4y2WSq0QPPHKWOjsmg1dUT0M9QH5ZOL2ojvM4_hoC_DAQAvD_BwE&pslc=1&ds=TgMUisPfZF2Y04o6',
    place: 'https://www.google.com/maps/place/Tirupati,+Andhra+Pradesh/@13.6276524,79.4265032,12z/data=!3m1!4b1!4m6!3m5!1s0x3a4d4b0f88620427:0xcf4152d1daca0cac!8m2!3d13.6287557!4d79.4191795!16zL20vMDg5bHJj?authuser=0&entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D'
  },
  {
    id: 2,
    imgsrc: img5,
    destTitle: 'Guntur',
    location: 'Amaravathi',
    grade: 'CULTURAL RELAX',
    hotelLink:'https://www.agoda.com/en-in/city/amaravati-in.html',
    place:'https://www.google.com/maps/place/Amaravathi,+Andhra+Pradesh/@16.5760939,80.3558586,12z/data=!3m1!4b1!4m6!3m5!1s0x3a35f2b4a4b1c4a5:0xf7a51f7fa0049e04!8m2!3d16.5734992!4d80.3570598!16zL20vMDE5Y3Vi?authuser=0'
  },
  {
    id: 3,
    imgsrc: img7,
    destTitle: 'Vizag',
    location: 'Arku',
    grade: 'CULTURAL RELAX',
    hotelLink:'https://www.agoda.com/en-in/city/araku-in.html?site_id=1829956&tag=0ecc4ece-55f7-46b0-9e58-89ca4cf26153&gad_source=1&device=c&network=g&adid=360104880155&rand=15249097424336683803&expid=&adpos=&gclid=Cj0KCQjwj4K5BhDYARIsAD1Ly2oOVOdWs5YWytkpzam2wanlTHUAJF31wPQvLFuF5qlF-vHXDlTwhuwaAn7UEALw_wcB&checkIn=2024-11-09&checkOut=2024-11-10&adults=2&rooms=1&pslc=1&ds=bWFfPO0n6zKvi0oA',
    place:'https://www.google.com/maps/place/Araku+Valley,+Andhra+Pradesh/@18.3273796,82.849836,12z/data=!3m1!4b1!4m6!3m5!1s0x3a3cbd3f5a6f1d7b:0xc6bb1b374531b7d8!8m2!3d18.3333333!4d82.8666667!16zL20vMDFyNDI3?authuser=0'
  },
  {
    id: 4,
    imgsrc: img9,
    destTitle: 'Alluri Sitharama Raju',
    location: 'Papikondalu',
    grade: 'CULTURAL RELAX',
    hotelLink:'https://www.agoda.com/en-in/search?guid=75a6a68b-2827-430a-84cb-768707c3226b&hotel=36764707&selectedproperty=36764707&asq=%2FwKQfVVauX%2FpOVB%2BTrkfUJufa9Vwpz6XltTHq4n%2B9gNsk7bCfkjNaDjVNkJspDvLf5MC2pexves%2F7ptr81uL4CHqGk9TpVUn0jmPQmWYeeeJAFMGT93bykeqncVLf19ej5eRnL32DvjLRi89sgANuW22IQLX1WPksKVIOcf0AOGflsXSKDHf5msaSyruRAsxovaXr%2Bd%2BmZ6Lq8HPtOVC1LvuPqHftCJfJM2nxNGWOjULInlOkZdqPbOMfO6tL6QDsmjyWNmMX928FoOFbzLxCYk8gKycnJYnnznk%2Fnen8Sk%3D&tick=638658380792&locale=en-in&ckuid=67fc8910-3b77-4fbf-a212-d915c63b2c7b&prid=0&gclid=Cj0KCQjwj4K5BhDYARIsAD1Ly2oOVOdWs5YWytkpzam2wanlTHUAJF31wPQvLFuF5qlF-vHXDlTwhuwaAn7UEALw_wcB&currency=INR&correlationId=6d323f95-62de-4b4d-89f0-35a05ba297f2&analyticsSessionId=1414172151067883188&pageTypeId=5&realLanguageId=15&languageId=1&origin=IN&stateCode=AP&cid=1829956&tag=0ecc4ece-55f7-46b0-9e58-89ca4cf26153&userId=67fc8910-3b77-4fbf-a212-d915c63b2c7b&whitelabelid=1&loginLvl=0&storefrontId=3&currencyId=27&currencyCode=INR&htmlLanguage=en-in&cultureInfoName=en-in&machineName=sg-pc-6i-geo-web-user-756b449c86-xrpf4&trafficGroupId=5&sessionId=lkvrn2lftbloueol5modbzjr&trafficSubGroupId=67&aid=82361&useFullPageLogin=true&cttp=4&isRealUser=true&mode=production&browserFamily=Chrome&cdnDomain=agoda.net&checkIn=2024-11-07&checkOut=2024-11-08&rooms=1&adults=2&children=0&priceCur=INR&los=1&textToSearch=Papikondalu+Resorts&travellerType=1&familyMode=off&ds=D76Mo6obrdtqmtRT&productType=-1',
    place:'https://www.google.com/maps/place/Papikondalu,+Andhra+Pradesh/@17.3690387,81.4346316,12z/data=!3m1!4b1!4m6!3m5!1s0x3a37370c72ff5e69:0x8a2fcde8d056f2e2!8m2!3d17.3794!4d81.4914!16zL20vMDI1NGNt?authuser=0'
  },
];

const handlePlaceClick = (hotelLink) => {
  window.open(hotelLink, '_blank'); 
};
 const handleLocationClick =  (place) =>
 {
  window.open(place, '_blank'); 
 }

const Popular = ({ onAmravathiClick, onArkuClick, onPapiClick , onTiruClick }) => {
  return (
    <section className='popular section container'>
      <div className="secContainer">
        <div className="secHeader flex">
          <div className="textDiv">
            <h2 className="secTitle">Popular Destination</h2>
            <p>From historical cities to natural spectacles, come see the best of the world!</p>
          </div>

          <div className="iconDiv flex">
            <BsArrowLeftShort className='icon' />
            <BsArrowRightShort className='icon' />
          </div>
        </div>

        <div className="mainContent grid">
          {Data.map(({ id, imgsrc, destTitle, location , hotelLink , place }) => {
            return (
              <div className="singleDestination" key={id}>
                <div className="destImage">
                  <img src={imgsrc} alt={destTitle} className="" />
                  <div className="overlayInfo">
                    <h3>{destTitle}</h3>
                    <p>{location}</p>

                    <BsArrowRightShort
                      className='icon'
                      onClick={() => {
                        if (location === 'Amaravathi') {
                          onAmravathiClick();
                        } else if (location === 'Arku') {
                          onArkuClick();
                        } else if (location === 'Papikondalu') {
                          onPapiClick();
                        }else if (location === 'Tirumala') {
                          onTiruClick();
                        }
                      }}
                    />
                  </div>
                </div>
                <div className="destFooter">
                  <div className="number">0{id}</div>
                  <div className="destText flex">
                    <h6>{location}</h6>
                    <span className="flex">
                      <span className="dot"><BsDot className='icon' /></span> Dot
                      
                      
                      
                    </span>
                    
                  </div>
                  <div className='hotels'>
                  <button className='build' onClick={() => handlePlaceClick(hotelLink)}><FaHotel className='hotel' /></button>
                  <span>
                    <button onClick={() => handleLocationClick(place)} >
                          <FaLocationDot className='location' />
                         
                    </button>
                  </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Popular;