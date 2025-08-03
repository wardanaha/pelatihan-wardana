"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

function MyComponent() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/platzi/getprofile'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  if (isLoading) {
    return <div>Loading data...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const keyfilt = 'avatar';
  return (
    <div className="container" style={{padding: 10 + 'px'}}>
        <div className="row">
            <div className="col-md-12">
                <h1>Retrieving User Profile</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
                {Object.entries(data.data).map(([key, value]) => (
                    <div key={key} className="row">
                    <div className="col-md-3">
                    <label className="form-label">{key}</label>
                    </div>
                    <div className="col-md-1">
                    <label className="form-label">:</label>
                    </div>
                    <div className="col-md-8">
                    <label className="form-label">{value}</label>
                    </div>
                    </div>
                ))}
            </div>
            <div className="col-md-6">
              {Object.entries(data.data).map(([key, value]) =>
                key === keyfilt ? (
                  <img key={key} src={value} className="img-thumbnail"/>
                ) : null
              )}
            </div>
        </div>
    </div>
  );
}

export default MyComponent;