async function getData() {
  const res = await fetch('http://localhost:3000/api/getproduct');
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
    <table className="table table-hover table-bordered">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Product Name</th>
      <th scope="col">Product Brand</th>
      <th scope="col">Product Owner</th>
    </tr>
  </thead>
  <tbody>
    {data.data.map((val: any) => (
      <tr
        key={val.product_id}
        className="hover:bg-gray-50 border-t transition"
      >
        <td className="px-4 py-2 border">{val.product_id}</td>
        <td className="px-4 py-2 border">{val.product_name}</td>
        <td className="px-4 py-2 border">{val.product_brand}</td>
        <td className="px-4 py-2 border">{val.owner_name}</td>
      </tr>
    ))}
  </tbody>
</table>
</div>
</div>
</div>
  );
}

export default Page;
