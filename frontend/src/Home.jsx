import { useEffect,useState} from "react"
import axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Home(){

    const[data,setData]=useState([])
    const navigate=useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:8001/users`)
        .then(res=>setData(res.data))
        console.log(data)
    },[])
   
    function handledelete(id) {
        axios.delete(`http://localhost:8001/users/${id}`)
          .then(() => {
            setData(res => res.filter(item => item._id !== id));
            navigate('/');
          })
      }
    return(
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-screen-xl bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">My CRUD Operation</h2>
          <div className="flex justify-end mb-4">
            <Link to="/create" className="bg-violet-600 text-white px-4 py-2 rounded-lg">ADD</Link>
          </div>
  
          <div className="overflow-x-auto">
            <table className="min-w-full bg-indigo-100 rounded-lg table-auto">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-600 text-center px-4 py-2">ID</th>
                  <th className="border border-gray-600 px-4 py-2">FirstName</th>
                  <th className="border border-gray-600 px-4 py-2">LastName</th>
                  <th className="border border-gray-600 px-4 py-2">Email</th>
                  <th className="border border-gray-600 px-4 py-2">Gender</th>
                  <th className="border border-gray-600 px-4 py-2">JobTitle</th>
                  <th className="border border-gray-600 px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="border border-gray-700 text-center px-4 py-2">{item._id}</td>
                    <td className="border border-gray-700 px-4 py-2">{item.firstName}</td>
                    <td className="border border-gray-700 px-4 py-2">{item.lastName}</td>
                    <td className="border border-gray-700 px-4 py-2">{item.email}</td>
                    <td className="border border-gray-700 px-4 py-2">{item.gender}</td>
                    <td className="border border-gray-700 px-4 py-2">{item.jobTitle}</td>
                    <td className="border border-gray-700 text-center px-4 py-2">
                      <Link to={`/edit/${item._id}`} className="bg-amber-400 text-white px-4 py-1 rounded-lg mr-2">Update</Link>
                      <button onClick={() => handledelete(item._id)} className="bg-red-700 text-white px-4 py-1 rounded-lg">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
}
export default Home