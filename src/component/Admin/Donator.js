import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

function Donator() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []); 
    function getUsers() {
        axios.get('http://localhost/finalYearProject/Donator.php').then(function(response) {
            console.log(response.data);
            setUsers(response.data);
        });
    }
    return (
        <div id="Login" style={{marginLeft:'225px'}}>
        <div className="container" style={{ margin: '30px auto', boxShadow: 'inset 0px 10px 10px rgba(0, 0, 0, 0.5)', padding: '30px', borderRadius: '20px', background: '#e9ecef', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}> 
            <h1>Donator</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">address</th>
                        <th scope="col">city</th>
                        <th scope="col">state</th>
                        <th scope="col">amount</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, key) =>
                        <tr key={key}>
                            <td>{user.name}</td>
                            <td>{user.address}</td>
                            <td>{user.city}</td>
                            <td>{user.state}</td>
                            <td>{user.amount}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
        </div>
    )
}
export default Donator;