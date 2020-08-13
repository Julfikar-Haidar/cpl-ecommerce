import React, { Component } from 'react';
import axios from 'axios'
import Banner from '../layouts/Banner'
import Cartcounter from '../layouts/Cart-counter'
const $ = window.$;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            products: [],
            productListCount: 0,
            total_amount: 0
        };
        
      }

      componentDidMount(){
          let total_price = 0
        axios.get('https://nodejs-backend-apis.herokuapp.com/api/product')
          .then(response => {
            this.setState({ products: response.data.data });
            console.log(response.data.data)
          })
          .catch(function (error) {
            console.log(error);
        })

        const productCollect = JSON.parse(window.localStorage.getItem('myProduct')) || []
        console.log('test', productCollect);
        console.log('check length', productCollect.length);

        productCollect.map(function (productlist) {
            total_price += +parseFloat(productlist.price);
            console.log('price 39',total_price);
        })

        this.setState({
            productListCount: productCollect.length,
            total_amount: total_price
        })
        
        this.setState({
            productListCount:productCollect.length

        })

    
        $('.js-tanding-product-1').owlCarousel({
		items: 3,
	    loop:false,
	    nav: true,
	    dots: false,
	    autoplay: false,
	    autoplayTimeout: 5000,
	    navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">'],    
	    responsive:{
	        0:{
	            items:1,
	        },
	        480:{
	            items:2,
	        },
	        600:{
	            items:2,
	        },
	        992:{
	            items:4,
	        }
    	}
	});


	/**********************
	*Related Product Carousel 2 Activation
	***********************/

    $('.js-related-product').owlCarousel({
        items: 4,
        margin: 30,
        loop:false,
        nav: true,
        dots: false,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">'],    
        responsive:{
            0:{
                items:1,
            },
            576:{
                items:2,
            },
            768:{
                items:3,
            },
            992:{
                items:4,
            },
            1200:{
                items:4,
            }
        }
    });

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var currentID = e.target.getAttribute('href');
        $(currentID).find('.owl-item').trigger('refresh.owl.carousel');
        $(currentID).find('.owl-item').resize();
    });

      
    }

/**********************
	*product add in cart box 
	***********************/
    cartAdd=(item)=>{
        let total_price = 0
        let productlist =JSON.parse(localStorage.getItem('myProduct')) || []
        
         productlist.push(item)
         console.log("productlist",productlist.length, typeof(productlist.length));

         productlist.map(function (productlist) {
            total_price += +parseFloat(productlist.price);
            console.log('price 39',total_price);
        })

        this.setState({
            productListCount: productlist.length,
            total_amount: total_price
        })
         console.log('data conyhbt',this.state.productListCount)
         console.log('product price 43 line',this.state.total_amount)
         localStorage.setItem('myProduct', JSON.stringify(productlist))
         
        

            // amount: getPrice
       
        //  console.log('data conyhbt',this.state.productListCount)
        //  console.log(' product price',this.state.amount)
        // localStorage.setItem('myProduct', JSON.stringify(productlist))

    }

   

    render() { 
        let { products,productListCount,total_amount} = this.state
        // console.log('productListCount',productListCount);
        console.log('product amount',total_amount);

        return ( 
            <div>
                {/* Main Wrapper Start */}

                {/* Page Content */}
                {/* Banner area Start */}

                <Cartcounter productListCount={productListCount} total_amount={total_amount}/>
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
                                     <h2>cart price {total_amount}</h2>
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
                                                        {
                                                            this.state.products.map((item,index)=>  
                                                                <div className="col-lg-4 col-sm-12">  
                                                            
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
                                                                </div>
                                                            )  
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        {/* Product Tab Content End */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                </section>

                {/* Combine Product area End */}

                <div className="overlay menu-overlay"></div>
            </div>
         );
    }
}
 
export default Home;