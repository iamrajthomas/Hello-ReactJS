import React from 'react'

const inlineStyle = {
    color: 'red'
}

function Product({product}) {

    return (
        <div style={inlineStyle}>
            <p><b>Id: </b>{product.id}</p>
            <p><b>Title: </b>{product.title}</p>
            <p><b>Price: </b>{product.price}</p>
            <p><b>Sku: </b>{product.sku}</p>
            <p><b>Price: </b>{product.style}</p>
            <p><b>Description: </b>{product.description}</p>
            <p><b>Free shipping: </b>{product.isFreeShipping}</p>
            <hr/>
        </div>

    )
}

export default Product
