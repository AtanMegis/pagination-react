import { useState } from 'react'
import './App.css'

import { Data } from './Data.js'

function App() {
    const [currentPage, setcurrentPage] = useState(1)
    const recordsPerPage = 5
    const lastIndex = currentPage * recordsPerPage
    const firstIndex = lastIndex - recordsPerPage
    const records = Data.slice(firstIndex, lastIndex)
    const nPage = Math.ceil(Data.length / recordsPerPage)
    const numbers = [...Array(nPage + 1).keys()].slice(1)

    console.log('firstIndex', firstIndex)
    console.log('lastIndex', lastIndex)
    console.log('Data', Data.length)
    console.log('records', records) //? SHOW RECORDS BY FIRST INDEX TO LAST INDEX
    console.log('nPage', nPage) //? TO MOVE TO THE PAGE || LOOK AT function (nextPage)
    console.log('numbers', numbers) //? RETURN NEW ARRAY FOR SWITCHING PAGE || NUMBER OF PAGINATION

    const prePage = () => {
        if (currentPage !== 1) {
            setcurrentPage(currentPage - 1)
        }
    }

    const nextPage = () => {
        if (currentPage !== nPage) {
            setcurrentPage(currentPage + 1)
        }
    }

    const changeCurrentPage = (id) => {
        setcurrentPage(id)
    }

    return (
        <>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((d, i) => (
                            <tr key={i}>
                                <td>{d.ID}</td>
                                <td>{d.Name}</td>
                                <td>{d.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <nav>
                    <ul className="pagination">
                        <li className="page-item">
                            <a href="#" className="page-link" onClick={prePage}>
                                Prev
                            </a>
                        </li>
                        {numbers.map((n, i) => (
                            <li
                                className={`page-item ${
                                    currentPage === n ? 'active' : ''
                                }`}
                                key={i}
                            >
                                <a
                                    href="#"
                                    className="page-link"
                                    onClick={() => changeCurrentPage(n)}
                                >
                                    {n}
                                </a>
                                {console.log('n', n)}
                            </li>
                        ))}
                        <li className="page-item">
                            <a
                                href="#"
                                className="page-link"
                                onClick={nextPage}
                            >
                                Next
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default App
