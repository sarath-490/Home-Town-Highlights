// import React from 'react';
// import './offerDetails.css';

// const LepakshiDetails = () => {
//   const imgSrc = "path_to_lepakshi_image.jpg"; // Replace with actual image path
//   const destTitle = "Lepakshi";
//   const location = "Lepakshi Nandi";
//   const price = "₹3,500";
//   const description = "Lepakshi is renowned for its monolithic Nandi sculpture and stunning temples with exquisite carvings.";

//   const handleBooking = () => {
//     const isLoggedIn = localStorage.getItem('isLoggedIn'); // Check login status
//     if (isLoggedIn) {
//       alert(`Booking for ${destTitle} confirmed!`);
//     } else {
//       alert('Please log in to book your trip.');
      
//     }
//   };

//   return (
//     <div className="offer-details-container">
//       <h2>{destTitle}</h2>
//       <img src={imgSrc} alt={destTitle} className="offer-details-image" />
//       <p className="offer-description">{description}</p>
//       <h4 className="offer-price">{price}</h4>
//       <button className="offer-book-button" onClick={handleBooking}>Book Now</button>
//     </div>
//   );
// };

// export default LepakshiDetails;




import React from 'react';
//import './offerDetails.css'; // Ensure your CSS has styles for the new elements
//import img1 from '../../Interactive/Lepakshi/Lepakshi Nandi.jpg'
const LepakshiDetails = () => {
  const imgSrc = "path_to_lepakshi_image.jpg"; // Replace with actual image path
  const imgGallery = [
    '../../Interactive/Lepakshi/Lepakshi Nandi.jpg', // Replace with actual image paths
    "../../Interactive/Lepakshi/Lepakshi Nandi.jpg",
    "path_to_lepakshi_image3.jpg"
  ];
  const destTitle = "Lepakshi";
  const location = "Lepakshi Nandi";
  const price = "₹3,500";
  const description = "Lepakshi is famous for the monolithic Bull (Nandi) and rich architectural heritage, showcasing intricate carvings and historical significance.";

  const travelTips = [
    "Visit early to avoid crowds, especially on weekends.",
    "Wear comfortable shoes for walking around the site.",
    "Respect the local customs and traditions while visiting the temple."
  ];

  const nearbyAttractions = [
    "Nandi Temple",
    "Lepakshi Temple",
    "Bhoga Nandeeshwara Temple",
    "Gandikota Fort"
  ];

  const handleBooking = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn'); // Check login status
    if (isLoggedIn) {
      alert(`Booking for ${destTitle} confirmed!`);
    } else {
      alert('Please log in to book your trip.');
      // Redirect to login page or show login modal
    }
  };

  return (
    <div className="offer-details-container">
      <h2>{destTitle}</h2>
      <img src={imgSrc} alt={destTitle} className="offer-details-image" />
      <p className="offer-description">{description}</p>
      <h4 className="offer-price">{price}</h4>
      
      <h3>Image Gallery</h3>
      <div className="image-gallery">
        {imgGallery.map((src, index) => (
          <img key={index} src={src} alt={`${destTitle} ${index + 1}`} className="gallery-image" />
        ))}
      </div>
      
      <h3>Travel Tips</h3>
      <ul className="travel-tips">
        {travelTips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>

      <h3>Nearby Attractions</h3>
      <ul className="nearby-attractions">
        {nearbyAttractions.map((attraction, index) => (
          <li key={index}>{attraction}</li>
        ))}
      </ul>

      <button className="offer-book-button" onClick={handleBooking}>Book Now</button>
    </div>
  );
};

export default LepakshiDetails;
