// import React from "react";
import React,{ useState,useEffect } from "react";
import axios from "axios";
const ProfileOverview = () => {
  const [cruds, setCruds] = useState({});

	useEffect(function () {
		async function getCruds() {
			try {
				const response = await axios.get("http://127.0.0.1:4000/report/view");
        console.log(response);
				setCruds(response);
			} catch (error) {
				console.log("error", error);
			}
		}
		getCruds();
	}, []);
  const arr=Object.values(cruds);
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
								<tr>
									<td>{crud.Reg_no}</td>
									<td>{crud.address}</td>
									<td>{crud.Active_}</td>
									<td>
                    <button type="button" className="btn btn-success">Accept</button>
									</td>
									<td>
                  <button type="button" className="btn btn-danger">Reject</button>
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
// const ProfileOverview = () => {
//   return (
//     <div>
//       i am here
//     </div>
//   );
// };

// export default ProfileOverview;
