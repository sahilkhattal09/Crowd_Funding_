import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

function ListUser() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []); 
    function getUsers() {
        axios.get('http://localhost/FinalYearProject/view.php').then(function(response) {
            console.log(response.data);
            setUsers(response.data);
        });
    }
    return (
        <>
        <div id="Login" style={{marginLeft:"225px"}}>
        <section className="vh-100" >
        <div className="container" style={{ margin: '30px auto', boxShadow: 'inset 0px 10px 10px rgba(0, 0, 0, 0.5)', padding: '30px', borderRadius: '20px', background: '#e9ecef', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h1>Users</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, key) =>
                        <tr key={key}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.mobile}</td>
                            <td>{user.email}</td>
                        </tr>
                    )}
                </tbody>
            </table>   
        </div> 
        </section>
        </div>
        </>
    )
}
export default ListUser;