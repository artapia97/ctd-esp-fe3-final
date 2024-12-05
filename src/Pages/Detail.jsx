import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Detail = () => {

  const [dentist, setDentist] = useState({});
  const { id } = useParams();
  console.log(id);

  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  useEffect(() => {
    axios(url)
      .then((response) => {
        console.log(response.data);
        setDentist(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>Detail Dentist {id}</h1>
      {dentist && Object.keys(dentist).length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{dentist.name}</td>
              <td>{dentist.email}</td>
              <td>{dentist.phone}</td>
              <td>{dentist.website}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  )
}

export default Detail;