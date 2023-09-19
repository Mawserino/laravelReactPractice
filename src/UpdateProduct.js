import Header from "./Header"
import { useEffect, useState } from "react"
import {
    useLocation,
    useNavigate,
    useParams
  } from "react-router-dom";
  
  function withRouter(Component) {
    function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
        <Component
          {...props}
          router={{ location, navigate, params }}
        />
      );
    }
  
    return ComponentWithRouterProp;
  }

function UpdateProduct(props) {

    const [data,setData]=useState([])
    console.warn("props",props.router.params.id)
    useEffect(() => {
        productData()
    }, [])

    async function productData() {
        let result =await fetch("http://localhost:8000/api/product/"+props.router.params.id)
            result=await result.json();
            setData(result)

    }
    
    return (
        
        <div>
            <Header />
            <h1>Update Page</h1>
            <div className="col-sm-6 offset-sm-3">
                <br />
                <input type="text" className="form-control" defaultValue={data.name}></input>
                <br />
                <input type="text" className="form-control" defaultValue={data.price}></input>
                <br />
                <input type="text" className="form-control" defaultValue={data.description}></input>
                <br />
                <input type="file" className="form-control" defaultValue={data.file_path}></input>
                <img  style={{ width: 400, height: 300 }} src={"http://localhost:8000/" + data.file_path} />
                <br />
                <button className="btn btn-primary" >Update</button>

            </div>
        </div>
    )
}

export default withRouter(UpdateProduct)