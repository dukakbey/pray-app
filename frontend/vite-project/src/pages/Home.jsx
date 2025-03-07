import React, { useState } from "react";
import axios from "axios";

const Home = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [name, setName] = useState("Sezgin");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Gönderilecek veri
    const data = {
      startDate: startDate,
      endDate: endDate,
      name: name
    };

    try {
      // Backend'e POST isteği gönder
      const response = await axios.post("/api/dates", data);
      alert(response.data.message);
    } catch (error) {
      console.error("Hata:", error);
      alert("Bir hata oluştu!");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-header text-center bg-primary text-white">
              <h3>Tarih Aralığı</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="startDate" className="form-label">
                    Başlangıç Tarihi
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="startDate"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="endDate" className="form-label">
                    Bitiş Tarihi
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="endDate"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    required
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Gönder
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
