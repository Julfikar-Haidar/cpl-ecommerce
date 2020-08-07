import React, { Component } from 'react';
import axios from 'axios'
import Banner from '../layouts/Banner'
import Cartcounter from '../layouts/Cart-counter'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            products: [],
            productListCount: 0,
            amount: 0
        };
        
      }

      componentDidMount(){
        axios.get('https://nodejs-backend-apis.herokuapp.com/api/product')
          .then(response => {
            this.setState({ products: response.data.data });
            console.log(response.data.data)
          })
          .catch(function (error) {
            console.log(error);
          })

      
      }

    cartAdd=(item)=>{
        let productlist =JSON.parse(localStorage.getItem('myProduct')) || []
        
         productlist.push(item)
         console.log("productlist",productlist.length, typeof(productlist.length));
         this.setState({
            productListCount: productlist.length,
            amount: productlist.price
           
         })
         console.log('data conyhbt',this.state.productListCount)
         console.log(' product price',this.state.amount)
         localStorage.setItem('myProduct', JSON.stringify(productlist))
         
        
    }

   

    render() { 
        let { products,productListCount,amount} = this.state
        // console.log('productListCount',productListCount);
        console.log('product amount',amount);
        return ( 
            <div>
                {/* Main Wrapper Start */}

                {/* Page Content */}
                {/* Banner area Start */}
                <Cartcounter productListCount={productListCount} />
                <Banner/>
                
                {/* Banner area End */}
                {/* Combine Product area Start */}

                <section className="combine-product-area pb--80 pt--50">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-title text-center mb-50">
                                    <h2>New Collections <i className="fa fa-shopping-cart"></i></h2>
                                    <h1>Cart count {productListCount}</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="product-tab product-tab--3 content-grey-color">
                                    {/* Product Tab Head Start */}
                                    <div className="nav nav-pills zeref-product-tab" id="pills-tab" role="tablist">
                                        <a className="nav-link zeref-product-tab-link active" id="apples-tab" data-toggle="pill" href="#apples" role="tab" aria-controls="apples" aria-selected="true">Man</a>
                                        <a className="nav-link zeref-product-tab-link" id="avocodas-tab" data-toggle="pill" href="#avocodas" role="tab" aria-controls="avocodas" aria-selected="false">Women</a>
                                        <a className="nav-link zeref-product-tab-link" id="avocodas-2-tab" data-toggle="pill" href="#avocodas-2" role="tab" aria-controls="avocodas-2" aria-selected="false">Kids</a>
                                    </div>
                                    {/* Product Tab Head End */}
                                    {/* Product Tab Content Start */}
                                    <div className="tab-content zeref-ptab-content" id="pills-tabContent">
                                        <div className="tab-pane zeref-tab-pane show active" id="apples" role="tabpanel" aria-labelledby="apples-tab">
                                            {/* Women Product Area Start */}
                                            <div className="row">
                                                <div className="zeref-tproduct-carousel zeref-tproduct-carousel-area owl-carousel js-tanding-product-1">
                                                    {/* Product Box Start */}  
                                                    <div className="col-lg-12 col-sm-12">    
                                                    {
                                                        this.state.products.map((item,index)=>
                                                    
                                                        <div className="product-grid5">
                                                            <div className="product-image5">
                                                                <a href="# /">
                                                                    <img className="pic-1" alt="product image" src="assets/img/fashion/product/1.jpg" />
                                                                    <img className="pic-2" alt="product image" src="assets/img/fashion/product/2.jpg" />
                                                                </a>
                                                                <ul className="social">
                                                                    <li><a href="wishlist.html" data-tip="Add to Wishlist"><i className="fa fa fa-heart"></i></a></li>
                                                                    <li><a href="# /" data-tip="Quick View" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                    <li><a href="single-product.html" data-tip="Product Details"><i className="fa fa fa-link"></i></a></li>
                                                                </ul>
                                                                <a href="#" className="select-options" onClick={()=>this.cartAdd(item)}><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                                            </div>
                                                            <div className="product-content">
                                                                <h3 className="title"><a href="#">{item.name}</a></h3>
                                                                <div className="price">{item.price}TK</div>
                                                            </div>
                                                        </div>
                                                    
                                                        )    
                                                  }
                                                  </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Product Tab Content End */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Combine Product area End */}

                {/* Modal */}
                <div className="modal fade" id="productModal" tabindex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-md-5 col-sm-12">
                                        <div className="tab-content product-thumb-large">
                                            <div id="thumb1" className="tab-pane active show fade">
                                                <img src="assets/img/fashion/product/1.jpg" alt="product thumb" />
                                            </div>
                                            <div id="thumb2" className="tab-pane fade">
                                                <img src="assets/img/fashion/product/3.jpg" alt="product thumb" />
                                            </div>
                                            <div id="thumb3" className="tab-pane fade">
                                                <img src="assets/img/fashion/product/9.jpg" alt="product thumb" />
                                            </div>
                                            <div id="thumb4" className="tab-pane fade">
                                                <img src="assets/img/fashion/product/5.jpg" alt="product thumb" />
                                            </div>
                                        </div>
                                        <div className="product-thumbnail">
                                            <div className="thumb-menu owl-carousel" id="thumbmenu">
                                                <div className="thumb-menu-item">
                                                    <a href="#thumb1" data-toggle="tab" className="nav-link active">
                                                        <img src="assets/img/fashion/product/1.jpg" alt="product thumb" />
                                                    </a>
                                                </div>
                                                <div className="thumb-menu-item">
                                                    <a href="#thumb2" data-toggle="tab" className="nav-link">
                                                        <img src="assets/img/fashion/product/3.jpg" alt="product thumb" />
                                                    </a>
                                                </div>
                                                <div className="thumb-menu-item">
                                                    <a href="#thumb3" data-toggle="tab" className="nav-link">
                                                        <img src="assets/img/fashion/product/9.jpg" alt="product thumb" />
                                                    </a>
                                                </div>
                                                <div className="thumb-menu-item">
                                                    <a href="#thumb4" data-toggle="tab" className="nav-link">
                                                        <img src="assets/img/fashion/product/5.jpg" alt="product thumb" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-7 col-sm-12">
                                        <h3 className="product-title">Lorem ipsum solets</h3>
                                        <div className="product-price">
                                            <span className="sale-price">&dollar; 15.00</span>
                                        </div>
                                        <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore adipisci eligendi fuga reiciendis possimus et doloribus, quae explicabo! Dolore tenetur voluptate neque mollitia a hic, enim cumque natus repudiandae sequi? Sunt, ipsam! Temporibus facilis nam aperiam voluptatem ducimus, deserunt adipisci corrupti. Soluta ut asperiores est nihil porro. Obcaecati, velit repellendus.</p>
                                        <p><b>Availability:</b> In stock</p>
                                        <p><b>Condition:</b> New Product</p>
                                        <div className="product-varients">
                                            <div className="zeref-product-size pb--20">
                                                <span className="zeref-product-label"><b>Size: </b></span>
                                                <select className="zeref-product-select">
                                                    <option value="1">S</option>
                                                    <option value="2">M</option>
                                                    <option value="3">L</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="product-action-wrapper pb--20">
                                            <span><b>Quantity: </b></span>
                                            <div className="quantity">
                                                <input type="number" className="quantity-input" name="qty" id="qty" value="1" />
                                            </div>
                                        </div>
                                        <a href="#" className="btn">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="overlay menu-overlay"></div>
            </div>
         );
    }
}
 
export default Home;