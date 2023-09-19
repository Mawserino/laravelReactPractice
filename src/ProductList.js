import Header from "./Header"
import React, { useState, useEffect } from "react"
import { Table } from 'react-bootstrap'
import { Link } from "react-router-dom";

function ProductList() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData()
    }, [])
    async function deleteOperation(id)
    {
        let result= await fetch("http://localhost:8000/api/delete/" +id,{
            method:'DELETE',
        });
        result=await result.json()
        console.warn(result)
        getData()

    }

    async function getData() {
        let result = await fetch("http://localhost:8000/api/list")
        result = await result.json()
        setData(result)

    }
    return (
        <div>
            <Header />
            <div className="col-sm-10 offset-sm-1">
                <h1>Product List</h1>
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
                                    <td><span onClick={()=>deleteOperation(item.id)} className="delete">Delete</span></td>
                                    <td>
                                        <Link to={"update/"+item.id}>
                                        <span className="update">Update</span>
                                        </Link></td>
                                        
                                </tr>
                            </tbody>
                        )
                    }
                </Table>
            </div>

        </div>
    )
}

export default ProductList;