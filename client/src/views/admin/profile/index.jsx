const ProfileOverview = () => {
  const [cruds, setCruds] = useState({});

	useEffect(function () {
		async function getCruds() {
			try {
				const response = await axios.get("/report/view");
				setCruds(response);
			} catch (error) {
				console.log("error", error);
			}
		}
		getCruds();
	}, []);
  const arr=Object.values(cruds);
	const handleacceptClick=async()=>{

	}
  const handlerejectlick=async()=>{
    
  }
  return (
    <div className="container">
      <div className="table-responsive">
			<table className="table riped  table-hover table-bordered container">
				<thead>
        <tr>
						<th>Reg_no</th>
						<th>Address</th>
						<th>Status</th>
						{/* <th>Location</th> */}
						<th>Accept</th>
						{/* <th>Edit</th> */}
						<th>Decline</th>
					</tr>
				</thead>
				<tbody>
					{arr &&
						arr.map((crud) => {
							return (
								<tr key={crud._id}>
									<td>{crud.Reg_no}</td>
									<td>{crud.address}</td>
									<td>{crud.Active_}</td>
									<td>
                    <button type="button" className="btn btn-success" onClick={handleacceptClick}>Accept Report</button>
									</td>
									<td>
                  <button type="button" className="btn btn-danger" onClick={handlerejectlick}>Reject Report</button>
									</td>
								</tr>
							);
						})}
				</tbody>
			</table>
			</div>
		</div>
  );
};

export default ProfileOverview;
