import {useEffect, useState} from "react";
import {Link, Routes, Route, useNavigate} from 'react-router-dom';

function Addpage() {
    const [error, setError] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        document.title = "Add Product";
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        let passedAllDatas = true;
        for(let i=1;i<e.target.elements.length;i++){
            if(e.target.elements[i].value.length<1){
                passedAllDatas=false;
                setError("Please, submit required data");
            }
        }
        if(passedAllDatas){
            let allNumber = true;
            for(let i=5;i<e.target.elements.length;i++){
                if (isNaN(e.target.elements[i].value)){
                    allNumber = false;
                    setError("Please, provide "+e.target.elements[i].id);
                }
            }
            if(allNumber){
                e.target.elements[0].style.visibility = "hidden";
                let dataField = "";
                switch (e.target.elements[4].value) {
                    case "DVD":dataField = '{"Size":"'+e.target.elements[5].value+' MB"}';break;
                    case "Book":dataField = '{"Weight":"'+e.target.elements[5].value+' KG"}';break;
                    case "Furniture":dataField = '{"Dimension":"'+e.target.elements[5].value+'x'+e.target.elements[6].value+'x'+e.target.elements[7].value+'"}';break;
                }
                fetch('https://yourdomain.com/Backend.php?addProduct&s='+e.target.elements[1].value+'&n='+e.target.elements[2].value+'&p='+e.target.elements[3].value+'&d='+dataField)
                    .then(res => res.json())
                    .then(
                        (result) => {
                            if(result['Status']=="ERROR"){
                                setError(result['Message']);
                                e.target.elements[0].style.visibility = "visible";
                            }else{
                                navigate('/');
                            }
                        }
                    )
            }
        }
    };
    const handleSelect = (e) => {
        switch (e.target.value) {
            case "DVD":
                document.getElementById("dynamicArea").innerHTML='<div class="mb-3"><label for="size" className="form-label">Size (MB)</label><input type="text" class="form-control" id="size" /></div>';
                break;
            case "Book":
                document.getElementById("dynamicArea").innerHTML='<div class="mb-3"><label for="weight" className="form-label">Weight (KG)</label><input type="text" class="form-control" id="weight" /></div>';
                break;
            case "Furniture":
                document.getElementById("dynamicArea").innerHTML='<div class="mb-3"><label for="height" className="form-label">Height (CM)</label><input type="text" class="form-control" id="height" /></div>';
                document.getElementById("dynamicArea").innerHTML+='<div class="mb-3"><label for="width" className="form-label">Width (CM)</label><input type="text" class="form-control" id="width" /></div>';
                document.getElementById("dynamicArea").innerHTML+='<div class="mb-3"><label for="length" className="form-label">Length (CM)</label><input type="text" class="form-control" id="length" /></div>';
                break;
        }
    }


    return (
        <div>
            <form id="product_form" className="needs-validation" noValidate onSubmit={handleSubmit}>
            <div className="row mt-3">
                <div className="col-6">
                    <h1>Add Product</h1>
                </div>
                <div className="col-6 d-flex flex-column justify-content-center">
                    <div className="d-flex justify-content-end">
                        <button type="submit" className="btn btn-success fw-bold me-1">Save</button>
                        <Link to="/" className="btn btn-danger fw-bold">Cancel</Link>
                    </div>
                </div>
            </div>
            <hr />


            <div className="col-sm-12 col-md-8 col-lg-6">
                <div className="mb-3">
                    <label htmlFor="sku" className="form-label">SKU</label>
                    <input type="text" className="form-control" id="sku" />
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" />
                </div>

                <div className="mb-3">
                <label htmlFor="pDiv" className="form-label">Price</label>
                <div className="input-group" id="pDiv">
                    <input type="tel" className="form-control" id="price" onKeyPress={(e) => !/[0-9.]/.test(e.key) && e.preventDefault()} />
                    <span className="input-group-text" id="basic-addon1">$</span>
                </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="productType" className="form-label">Type Switcher</label>
                    <select id="productType" className="form-select" onChange={handleSelect}>
                        <option value="DVD">DVD</option>
                        <option value="Book">Book</option>
                        <option value="Furniture">Furniture</option>
                    </select>
                </div>

                <div id="dynamicArea">
                    <div className="mb-3">
                        <label htmlFor="size" className="form-label">Size (MB)</label>
                        <input type="text" className="form-control" id="size"/>
                    </div>
                </div>





            </div>
                <b>{error}</b>
            </form>









        </div>
    );
}

export default Addpage;