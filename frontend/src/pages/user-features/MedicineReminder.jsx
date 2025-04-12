import React, { useState } from 'react';

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
    <div className="min-h-screen bg-blue-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
         <h1 style={{ color: '#343434', textDecoration: 'none ' }}>Medicine Reminder</h1>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center"
          >
            <span className="mr-2">+</span> Add Medicine
          </button>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Upcoming Reminders</h2>
          <div className="bg-white rounded-xl shadow-md p-6">
            {medicines.length > 0 ? (
              medicines.map(medicine => (
                <div key={medicine.id} className="flex justify-between items-center p-4 border-b border-gray-100 last:border-0">
                  <div>
                    <h3 className="font-bold text-lg text-zinc-950">{medicine.name}</h3>
                    <p className="text-gray-600">{medicine.dosage} • {medicine.frequency}</p>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full mr-4">
                      {medicine.time}
                    </span>
                    <button 
                      onClick={() => deleteMedicine(medicine.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center py-8">No medicines added yet</p>
            )}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Your Medications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {medicines.map(medicine => (
              <div key={medicine.id} className="bg-white rounded-xl shadow-md p-6">
                <div className="flex justify-between">
                  <h3 className="font-bold text-xl mb-2 text-zinc-950">{medicine.name}</h3>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                    {medicine.frequency}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{medicine.dosage}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium">{medicine.time}</span>
                  <button 
                    onClick={() => deleteMedicine(medicine.id)}
                    className="text-red-500 hover:text-red-700 px-2"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md">
              <h2 className="text-2xl font-bold mb-4">Add New Medicine</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Medicine Name</label>
                  <input
                    type="text"
                    name="name"
                    value={newMedicine.name}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="e.g. Metformin"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Dosage</label>
                  <input
                    type="text"
                    name="dosage"
                    value={newMedicine.dosage}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="e.g. 500mg"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Time</label>
                  <input
                    type="time"
                    name="time"
                    value={newMedicine.time}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>
                
                <div>
                  <label className="block text-zinc-950 mb-2">Frequency</label>
                  <select
                    name="frequency"
                    value={newMedicine.frequency}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 text-zinc-950 rounded-lg"
                  >
                    <option>Daily</option>
                    <option>Weekly</option>
                    <option>Twice Daily</option>
                    <option>As Needed</option>
                  </select>
                </div>
              </div>
              
              <div className="flex justify-end space-x-4 mt-6">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-zinc-950"
                >
                  Cancel
                </button>
                <button
                  onClick={addMedicine}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
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