import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TravelRequests.css';

const TravelRequests = () => {
  const navigate = useNavigate();
  const [travelRequests, setTravelRequests] = useState([
    {
      id: 1,
      source: 'New York',
      destination: 'Los Angeles',
      date: '2023-06-15',
      travelmode:'Bike',
      status: 'Pending'
    },
    {
      id: 2,
      source: 'Chicago',
      destination: 'Miami',
      date: '2023-06-20',
      travelmode:'Car',
      status: 'Approved'
    },
    {
      id: 3,
      source: 'Seattle',
      destination: 'Boston',
      date: '2023-07-05',
      travelmode:'Bus',
      status: 'Rejected'
    }
  ]);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this travel request?')) {
      setTravelRequests(travelRequests.filter(request => request.id !== id));
    }
  };

  const navigateToAddForm = () => {
    sessionStorage.setItem('travelRequests', JSON.stringify(travelRequests));
    navigate('/user-home/travel');
  };

  return (
    <div className="travel-requests-container">
      <header className="travel-header">
        <h1>Travel Requests</h1>
        <button 
          className="add-request-btn"
          onClick={navigateToAddForm}
        >
          + Add New Request
        </button>
      </header>
      
      <div className="requests-list">
        {travelRequests.map(request => (
          <div key={request.id} className="request-card">
            <div className="request-details">
              <div className="detail-row">
                <span className="detail-label">From:</span>
                <span className="detail-value">{request.source}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">To:</span>
                <span className="detail-value">{request.destination}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Date:</span>
                <span className="detail-value">{request.date}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Travel Mode:</span>
                <span className="detail-value">{request.travelmode}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Status:</span>
                <span className={`status-badge ${request.status.toLowerCase()}`}>
                  {request.status}
                </span>
              </div>

            </div>
            <div className="request-actions">
              <button 
                className="action-btn delete-btn"
                onClick={() => handleDelete(request.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelRequests;