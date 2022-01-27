
//==========================================================================================================================
// Wrote in Functional Component First and Later Changed to Class Component to retain State
// import React from 'react'
// import ListProducts from './product.json'
// import Product from './Product'

// const ProductList = () => {

//     const ProductRenderData = ListProducts.map(product => <Product key={product.id} product={product}></Product>)

//     function handleSearch(event){
        
//     }

//     return (
//         <div>
//             <div className="componentName"><h1>ProductList Component [withCounter Higher Order Component]</h1></div>
//             <input onClick={handleSearch}/>
//             {
//                 ProductRenderData
//             }
//         </div>
//     )
// }

// export default ProductList


//==========================================================================================================================
// Wrote in Class Component to retain State
// import ListProducts from './product.json'
// import Product from './Product'
// import React, { Component } from 'react'

// class ProductList extends Component {

//     constructor(props) {
//         super(props)
    
//         this.state = {
//              searchTerm: '',
//              filteredProduct: ListProducts
//         }
//     }

//     handleSearch = (event) => {
//         const searchTerm = event.target.value.toUpperCase()
//         const filteredProduct = ListProducts.filter(product => {
//             let str = `${product.title} ${product.style} ${product.sku}  ${product.description}`.toUpperCase();
//             return str.indexOf(searchTerm) >= 0;
//         })

//         this.setState({
//             searchTerm: searchTerm,
//             filteredProduct: filteredProduct
//         })
//     }

//     render() {
//         const { filteredProduct } = this.state;
//         const ProductRenderData = filteredProduct.map(product => <Product key={product.id} product={product}></Product>)
//         return (
//             <div>
//                 <div className="componentName"><h1>ProductList Component [withCounter Higher Order Component]</h1></div>
//                 <input onChange={this.handleSearch} value={this.state.searchTerm}/>
//                 {
//                     ProductRenderData
//                 }
//             </div>
//         )
//     }
// }

// export default ProductList


//==========================================================================================================================
// Wrote in Functional Component using HOC
import ListProducts from './product.json'
import Product from './Product'
import React from 'react'
import withSearch from './withSearch'

const ProductList = ({searchTerm, ...props}) => {

    const filterProducts = (searchTerm) => {
        searchTerm = searchTerm.toUpperCase()

        return ListProducts.filter(product => {
            let str = `${product.title} ${product.style} ${product.sku}  ${product.description}`.toUpperCase();
            return str.indexOf(searchTerm) >= 0;
        })
    }
    
    let filteredProducts = filterProducts(searchTerm);
    const ProductRenderData = filteredProducts.map(product => <Product key={product.id} product={product}></Product>)
    const { shopOwner } = props;

    return(
        <div>
            <div className="componentName"><h1>ProductList Component [withCounter Higher Order Component]</h1></div>
            <h2>ShopOwner: {shopOwner}</h2>
            {
                ProductRenderData
            }
        </div>   
    )
}

export default withSearch(ProductList) 