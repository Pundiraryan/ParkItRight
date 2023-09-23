// import React from "react";
import React,{ useState,useEffect } from "react";
import axios from "axios";
const ProfileOverview = () => {
  const [cruds, setCruds] = useState([]);
  const bringdata=async()=>{
    try {
      const response = await axios.get("http://127.0.0.1:4000/report/view");
      // console.log(response);
      // setResp(response);
      setCruds(response.data.report);
    } catch (error) {
      console.log("error", error);
    }
  }
  console.log('below')
  console.log(cruds);
  // const arr=Object.entries(cruds);
  // console.log(arr.length);
  return (
    <>
      <button onClick={bringdata}>Show</button>
      <div className="container">
      <div className="table-responsive">
			<table className="table riped  table-hover table-bordered container">
				<thead>
        <tr>
						<th>Reg_no</th>
						<th>Address</th>		{/* <th>Location</th> */}
						<th>Accept</th>
						{/* <th>Edit</th> */}
						<th>Decline</th>
					</tr>
				</thead>
				<tbody>
					{cruds&&
						cruds.map((crud) => {
							return (
                // <tr >
								<tr key={crud._id}>
                  <td>{crud.Reg_no}</td>
                  <td>{crud.address}</td>
									{/* <td>{crud.Reg_no}</td>
									<td>{crud.address}</td>
									<td>{crud.Active_}</td> */}
									<td>
                    <button type="button" className="btn btn-success">Accept</button>
									</td>
									<td>
                  <button type="button" className="btn btn-danger">Reject</button>
									</td>
								</tr>
                // </tr>
							);
						})}
				</tbody>
			</table>
			</div>
		</div>
    </>
    // <div>
    //   {cruds.map((crud) => {
		// 		return (
		// 			<div key={crud._id}>
    //         <div>
    //           {crud.Reg_no}
    //         </div>
		// 				</div>
		// 		);
		// 	})}
    // </div>
    
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
