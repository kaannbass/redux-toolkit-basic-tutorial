import React, { useCallback } from 'react'
import { amountAdded, increment } from '../features/counter/counter-slice'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { useFetchBreedsQuery } from '../features/dogs/dogs-api-slice'

function Home({ counter }) {
    const dispacth = useAppDispatch()
    const count = useAppSelector((state) => state.counter.value)

    const handleClick = () => {
        dispacth(amountAdded(4))
    }

    const { data = [], isFetching } = useFetchBreedsQuery();

    if (isFetching) {
        return <p>Loading...</p>
    }

    return (
        <div>Home Props:{counter}
            <hr />
            <h2>Component içindeki: {count}</h2>
            <button onClick={handleClick} className=' bg-black ring-emerald-200 text-white h-14 w-7'>{counter}</button>
            <hr />
            <br />
            <div>
                <p>Number of dogs fetched: {data.length}</p>
                {data.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Temperament</th>
                                <th>Breed Group</th>
                                <th>Imperial</th>
                                <th>Metric</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((breed) => (
                                <tr key={breed.id}>
                                    <td>{breed.id}</td>
                                    <td>{breed.name}</td>
                                    <td>{breed.temperament || 'N/A'}</td>
                                    <td>{breed.breed_group || 'N/A'}</td>
                                    <td>{breed.height?.imperial || 'N/A'}</td>
                                    <td>{breed.height?.metric || 'N/A'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No dogs fetched.</p>
                )}
            </div>
        </div>
    )
}

export default Home