async function getData() {
  const res = await fetch('http://localhost:3000/api/platzi/getprofile');
  // Handle errors if the API call fails
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

  const data = await getData();
function Page() {
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
                <img src="https://i.imgur.com/LDOO4Qs.jpg" className="img-thumbnail" alt="..."></img>
            </div>
        </div>
    </div>
  );
}

export default Page;
