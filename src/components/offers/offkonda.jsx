// import React from 'react';
// import './offerDetails.css';
// import img9 from '../../Interactive/Heritage sites in Andhra Pradesh/Famous Forts/Kondaveedu Fort.jpg';

// const KondaveeduDetails = () => {
//   const imgSrc = img9; 
//   const destTitle = "Kondaveedu Fort";
//   const location = "Kondaveedu";
//   const price = "₹4,200";
//   const description = "Kondaveedu Fort is a historically significant hill fortress known for its scenic beauty and rich history.";

//   const handleBooking = () => {
//     const isLoggedIn = localStorage.getItem('isLoggedIn'); 
//     if (isLoggedIn) {
//       alert('Booking for ${destTitle} confirmed!');
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

// export default KondaveeduDetails;




import React from 'react';
import './offerDetails.css'; // Ensure your CSS has styles for the new elements

const KondaveeduDetails = () => {
  const imgSrc = "path_to_kondaveedu_image.jpg"; // Replace with actual image path
  const imgGallery = [
    "path_to_kondaveedu_image1.jpg", // Replace with actual image paths
    "path_to_kondaveedu_image2.jpg",
    "path_to_kondaveedu_image3.jpg"
  ];
  const destTitle = "Kondaveedu Fort";
  const location = "Kondaveedu";
  const price = "₹4,200";
  const description = "Kondaveedu Fort is a historically significant ancient hill fortress that offers stunning views and insights into the region's history.";

  const travelTips = [
    "Wear comfortable hiking shoes as the fort requires some trekking.",
    "Carry water and snacks for your journey to stay hydrated and energized.",
    "Visit during the early hours or late afternoon to enjoy cooler temperatures."
  ];

  const nearbyAttractions = [
    "Guntur",
    "Undavalli Caves",
    "Amaravati",
    "Bapatla Beach"
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

export default KondaveeduDetails;
