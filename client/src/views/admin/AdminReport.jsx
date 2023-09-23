import React,{useState} from 'react'
import axios from 'axios';
import './Table.css';
const AdminReport = () => {
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
    <div className='btn'>
    <button onClick={bringdata}>Show</button>
    </div>
      
      <div className="container">
      <div className="table-responsive">
			<table className="custom-table table riped  table-hover table-bordered container">
				<thead>
        <tr>
						<th>Reg_no</th>
						<th>Address</th>		{/* <th>Location</th> */}
						<th>Status</th>
						{/* <th>Edit</th> */}
						<th>Status</th>
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
									<td>hcrud.Active_}</td> */}
									<td>
                    <button type="button" className="btn1 btn-success" id="button1">Accept</button>
									</td>
									<td>
                  <button type="button" className="btn2 btn-danger" id="button2">Reject</button>
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
}

export default AdminReport