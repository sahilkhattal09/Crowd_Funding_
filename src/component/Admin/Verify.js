import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

function Verify (){

    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []); 
   
    function getUsers() {
        axios.get('http://localhost/FinalYearProject/verify.php').then(function(response) {
            console.log(response.data);
            setUsers(response.data);
        });
    }
    return(
        <> 
        <div id="Login" style={{marginLeft:'225px'}}>
        <div className="container"> 
        <br/><br/>
        <div className='divTable' style={{ background:'#e9ecef',padding: '30px', borderRadius: '20px', border: '1px solid #ccc', boxShadow: 'inset 10px 10px 10px rgba(0, 0, 0.3, 0.3)',}}>
            <h1>Verify</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">amount</th>
                        <th scope="col">status</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, key) =>
                        <tr key={key}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.amount}</td>
                            <td>{user.status}</td>
                            <td>
                            <Link to={{
                                    pathname: `/pverify/${user.id}`,
                                    state: {
                                        userId: user.id
                                    }
                                }} style={{marginRight: "10px" ,width:'200px'}} className="btn btn-info">Check Verification form</Link>
                                
                                 <Link to={{
                                    pathname: `/UserData/${user.id}`,
                                    state: {
                                        userId: user.id
                                    }
                                }} style={{marginRight: "10px" ,width:'200px'}} className="btn btn-info">Check user data</Link>
                            </td>
                            
                        </tr>
                    )}
                </tbody>
            </table>
        </div> 
    </div>
    </div>
        </>
    )
}
export default Verify;