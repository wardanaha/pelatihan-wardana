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
                <h1>Table Product</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
    <table class="table table-hover table-bordered">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>John</td>
      <td>Doe</td>
      <td>@social</td>
    </tr>
  </tbody>
</table>
</div>
</div>
</div>
  );
}

export default Page;
