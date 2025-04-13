import React, { useState } from 'react';
import './MedicineReminder.css';

const MedicineReminder = () => {
  const [medicines, setMedicines] = useState([
    { id: 1, name: 'Metformin', dosage: '500mg', time: '08:00 AM', frequency: 'Daily' },
    { id: 2, name: 'Atorvastatin', dosage: '20mg', time: '09:00 PM', frequency: 'Daily' },
  ]);

  const [newMedicine, setNewMedicine] = useState({
    name: '',
    dosage: '',
    time: '',
    frequency: 'Daily'
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMedicine(prev => ({ ...prev, [name]: value }));
  };

  const addMedicine = () => {
    if (newMedicine.name && newMedicine.dosage && newMedicine.time) {
      setMedicines([...medicines, { ...newMedicine, id: Date.now() }]);
      setNewMedicine({ name: '', dosage: '', time: '', frequency: 'Daily' });
      setIsModalOpen(false);
    }
  };

  const deleteMedicine = (id) => {
    setMedicines(medicines.filter(med => med.id !== id));
  };

  return (
    <div className="medicine-reminder-container">
      <div className="main-content">
        <div className="header-section">
          <h1 className="app-title">Medicine Reminder</h1>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="add-medicine-btn"
          >
            <span className="plus-icon">+</span> Add Medicine
          </button>
        </div>

        <div className="upcoming-reminders-section">
          <h2 className="section-title">Upcoming Reminders</h2>
          <div className="reminders-card">
            {medicines.length > 0 ? (
              medicines.map(medicine => (
                <div key={medicine.id} className="reminder-item">
                  <div className="medicine-info">
                    <h3 className="medicine-name">{medicine.name}</h3>
                    <p className="medicine-details">{medicine.dosage} • {medicine.frequency}</p>
                  </div>
                  <div className="time-and-delete">
                    <span className="time-badge">{medicine.time}</span>
                    <button 
                      onClick={() => deleteMedicine(medicine.id)}
                      className="delete-btn"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="empty-state">No medicines added yet</p>
            )}
          </div>
        </div>

        <div className="medications-section">
          <h2 className="section-title">Your Medications</h2>
          <div className="medications-grid">
            {medicines.map(medicine => (
              <div key={medicine.id} className="medication-card">
                <div className="card-header">
                  <h3 className="medicine-name">{medicine.name}</h3>
                  <span className="frequency-badge">{medicine.frequency}</span>
                </div>
                <p className="dosage">{medicine.dosage}</p>
                <div className="card-footer">
                  <span className="time">{medicine.time}</span>
                  <button 
                    onClick={() => deleteMedicine(medicine.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2 className="modal-title">Add New Medicine</h2>
              
              <div className="form-fields">
                <div className="form-group">
                  <label className="form-label">Medicine Name</label>
                  <input
                    type="text"
                    name="name"
                    value={newMedicine.name}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="e.g. Metformin"
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Dosage</label>
                  <input
                    type="text"
                    name="dosage"
                    value={newMedicine.dosage}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="e.g. 500mg"
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Time</label>
                  <input
                    type="time"
                    name="time"
                    value={newMedicine.time}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Frequency</label>
                  <select
                    name="frequency"
                    value={newMedicine.frequency}
                    onChange={handleInputChange}
                    className="form-input"
                  >
                    <option>Daily</option>
                    <option>Weekly</option>
                    <option>Twice Daily</option>
                    <option>As Needed</option>
                  </select>
                </div>
              </div>
              
              <div className="modal-actions">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="cancel-btn"
                >
                  Cancel
                </button>
                <button
                  onClick={addMedicine}
                  className="confirm-btn"
                >
                  Add Reminder
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MedicineReminder;