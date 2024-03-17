const Product = (params) => {
    console.log(params.params.productId)

    return <p>Product : {params.params.productId}</p>
}

export default Product;