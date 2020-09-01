{items.map((product, index) => {
    return (
        <div>
            <div className="product-box product-box--list variable-product" key="index">
                <div className="row">
                    <div className="col-md-4">
                        <div className="zeref-box-image">
                            <img
                                src={product.imageUrl}
                                alt="product image"
                                className="primary_image" />
                            <img
                                src="assets/img/fashion/product/4.jpg"
                                alt="product image"
                                className="secondary_image" />
                            <a href="#" data-toggle="modal"
                                data-target="#productModal"
                                className="quick-view"> <i
                                    className="fa fa-eye"></i> </a>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="zeref-box-desc">
                            {/* <a href="/single-product {index}" className="zeref-box-title">{value.name}</a> */}
                            <Link
                                to={"/single-product/" + product.id}
                                className="zeref-box-title">{product.name}</Link>
                            <p className="zeref-box-price">
                                <span
                                    className="sale-price">{product.price}TK</span>
                                <span className="regular-price">{product.price}</span>
                            </p>
                            <p className="zeref-box-descript">{product.description}</p>
                            <a href="#" className="btn add-to-cart btn-style-2" onClick={() => this.cartAdd(product)}><i
                                className="fa fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})}


