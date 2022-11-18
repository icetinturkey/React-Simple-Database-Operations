import { useState,useEffect } from "react";
import {Link} from "react-router-dom";


function Main() {
    const [check, setCheck] = useState(false);
    const [items, setItems] = useState([]);

    const handleClick = event => {
        let aa = document.getElementsByClassName("delete-checkbox");
        let first = true;
        let breakOperation = true;
        let finalString = "";
        for (let i=0; i < aa.length; i++){
            if(aa[i].checked) {
                breakOperation = false;
                if (first) {
                    first = false;
                    finalString += "'"+ aa[i].id + "'";
                } else {
                    finalString += ",'" + aa[i].id + "'";
                }
            }
        }
        if(breakOperation){
            //alert("Operation Cancelled !");
        }else{
            fetch("https://yourdomain.com/Backend.php?delProduct&s="+ finalString)
                .then(res => res.json())
                .then(
                    (result) => {
                        console.log(result);
                        refresh();
                    }
                )
        }
    };
    function refresh(){
        setItems([]);
        fetch("https://yourdomain.com/Backend.php?getProducts")
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result);
                }
            )
    }
    useEffect(() => {
        document.title = "Product List";
        refresh();
    }, []);

    return (
        <div>
            <div className="row mt-3">
                <div className="col-6">
                    <h1>Product List</h1>
                </div>
                <div className="col-6 d-flex flex-column justify-content-center">
                    <div className="d-flex justify-content-end">
                        <Link to="/add-product" className="btn btn-light fw-bold me-1">ADD</Link>
                        <button type="button" id="delete-product-btn" className="btn btn-danger fw-bold" onClick={handleClick}>MASS DELETE</button>
                    </div>
                </div>
            </div>
            <hr />


            <div className="row">
                {items.length ? items.map(item => (
                    <div className="mt-2 col-sm-6 col-md-4 col-lg-3 products" key={item.sku}>
                        <input type="checkbox" id={item.sku} className="delete-checkbox" />
                        <label htmlFor={item.sku}>{item.sku}<br/>{item.name}<br/>{item.price}$<br/>
                            {
                                Object.entries(JSON.parse(item.data)).map(spec => (
                                    spec[0] + " : " + spec[1]
                                ))
                            }
                        </label>
                    </div>
                )) : "no products found!"}
            </div>
        </div>
    );
}

export default Main;