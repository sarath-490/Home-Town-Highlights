import React from 'react';
import './offerDetails.css'; // Ensure your CSS has styles for the new elements

const TirupatiDetails = () => {
  const imgSrc = "./../Interactive/Tirupathi/tirumala.jpg"; // Replace with actual image path
  const imgGallery = [
    "", // Replace with actual image paths
    "../../Interactive/Tirupathi/tirumala.jpg",
    "path_to_tirupati_image3.jpg"
  ];
  const destTitle = "Tirupati";
  //const location = "Tirupati";
  const price = "₹7,000";
  const description = "Tirupati is famous for its Venkateswara Temple, a revered pilgrimage site known for its rich traditions and vibrant culture.";
  
  const travelTips = [
    "Visit early in the morning to avoid crowds.",
    "Dress modestly and respect local customs.",
    "Try the local cuisine, especially the famous Tirupati laddoo."
  ];

  const nearbyAttractions = [
    "Sri Bhu Varaha Swamy Temple",
    "Akasa Ganga",
    "Tirumala Hills",
    "Sri Venkateswara National Park"
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

export default TirupatiDetails;
