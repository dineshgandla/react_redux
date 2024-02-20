import React, { useState } from 'react'
import { connect } from 'react-redux';



const AddProduct = (value) => async (dispatch) => {
    dispatch(
        {
            type: "ADD",
            payload: value
        }
    )
}

const RemoveProduct = (value) => {
    return (
        async (dispatch) => {
            dispatch(
                {
                    type: "REMOVE",
                    payload: { name: value }
                })
        })
}

const Card = ({ products, AddProduct, RemoveProduct }) => {
    const [item, setItem] = useState("")
    const submitHandler = async (e) => {
        e.preventDefault();
        if (item === "") {
            alert("Enter Something to add")
        }
        else {
            AddProduct({ name: item });
            setItem("")
        }
    }

    return (<div>
        <center>
            <div className="card mt-2" style={{ width: "18rem" }}>

                <div className="card-body">
                    <form onSubmit={submitHandler}>
                        <input type="text" value={item} onChange={(e) => setItem(e.target.value)} />
                        <br></br>
                        <br></br>
                        <button type="submit" className="btn btn-success">Add Product</button>
                    </form >
                    <br></br>
                    {
                        products.map(product => {
                            return (
                                <div className="bg-light border row py-2 mt-2 justify-content-between align-items-center" key={product.name}>
                                    <div className="col-auto mx-2">{product.name}</div>
                                    <div className="col-auto">
                                        <span onClick={() => RemoveProduct(product.name)} className="badge square-pill bg-danger mx-2 py-2" style={{ cursor: "pointer" }}>
                                            Delete
                                        </span>
                                    </div>
                                </div>
                                    )
                        })
                    }
                </div>

            </div>
        </center>
    </div>
    )
}

const mapStateToProps = (state) => ({
    products: state
}
)


export default connect(mapStateToProps, { AddProduct, RemoveProduct })(Card)
