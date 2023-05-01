import React, { useState } from 'react'
import { useFetchBreedsQuery } from '../redux/features/dogs-api-slice';

const DogsApi = () => {

    const [numOfDogs, setNumberOfDogs] = useState(10);
    const [num, setNum] = useState(0);

    const { data = [], isFetching } = useFetchBreedsQuery(numOfDogs);

    console.log("petsData", isFetching, data)

    return (
        <div>
            <h1>Pets Api</h1>

            <div>
                <p>Dogs to fetch</p>
                <input type="number" value={num} onChange={(e) => setNum(e.target.value)} placeholder='enter number of dogs to fetch' />
                <button onClick={() => setNumberOfDogs(num)} >Fetch</button>
            </div>

            {isFetching ? (<div>...loading</div>) :
                <div>
                    <p>Number of dogs Fetched : {data.length}</p>
                    <table style={{ margin: "auto" }} >
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Picture</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(item => (
                                <tr key={item.id} >
                                    <td>{item.name}</td>
                                    <td>
                                        <img src={item.image.url} alt={item.name} style={{ width: "100px" }} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            }

        </div>
    )
}

export default DogsApi