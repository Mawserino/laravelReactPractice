import Header from "./Header"
import { useState } from "react"
import { Table, Card, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";

function SearchProduct() {

    const [data, setData] = useState([])
    async function search(key) {
        console.warn(key)

        let result = await fetch("http://localhost:8000/api/search/" + key)
        result = await result.json()
        setData(result)
    }

    return (
        <div>
            <Header />
            <div className="col-sm-6 offset-sm-4">
                <h1>Search Page</h1>
                <br></br>
                <input type="text" onChange={(e) => search(e.target.value)} className="form-control" placeholder="Search Product" />
            </div>
            <div className="col-sm-10  offset-sm-1">
                <Table class="table">
                    <thead>
                        <tr>
                            <td scope="col">Id</td>
                            <td scope="col">Name</td>
                            <td scope="col">Price</td>
                            <td scope="col">Description</td>
                            <td scope="col">Image</td>
                            <td scope="col">Operations</td>
                        </tr>
                    </thead>
                    {
                        data.map((item) =>
                            <tbody>
                                <tr className="">
                                    <td scope="row">{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.description}</td>
                                    <td><img style={{ width: 200, height: 200 }} src={"http://localhost:8000/" + item.file_path} /></td>
                                    <td>
                                        <Link to={"update/" + item.id}>
                                            <span className="update">Update</span>
                                        </Link></td>

                                </tr>
                            </tbody>
                        )
                    }
                </Table>
                <div>


                    {
                        data.map((item) =>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={"http://localhost:8000/" + item.file_path} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        {item.description}
                                    </Card.Text>
                                    <Card.Text>
                                        {"$" + item.price}
                                    </Card.Text>
                                    <Link to={"update/" + item.id}><Button variant="primary"  >Update</Button></Link>
                                </Card.Body>
                            </Card>
                        )
                    }
                </div>
            </div>


        </div>
    )

}

export default SearchProduct