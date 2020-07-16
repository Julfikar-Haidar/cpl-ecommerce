import React, { Component } from 'react';

class ShopSidebar extends Component {
    state = {}
    render() {
        return ( 
            <div>
            {/* <!-- Sidebar Start --> */}
                <aside className="sidebar shop-sidebar">
                    <div className="search-filter">

                        {/* <!-- Category Search filter Start --> */}
                        <div className="filter-box mb--30">
                            <div className="filter-title">
                                <h2>Filter by categories</h2>
                            </div>
                            <ul className="search-filter-list">
                                <li className="custom-checkbox">
                                    <input type="checkbox" name="bookandboardgame" id="bookandboardgame" className="zeref-checkbox" />
                                    <label htmlFor="bookandboardgame" className="zeref-checkbox-label">Dresses</label>
                                </li>
                                <li className="custom-checkbox">
                                    <input type="checkbox" name="babydols" id="1" className="zeref-checkbox" />
                                    <label htmlFor="1" className="zeref-checkbox-label">Accessories</label>
                                </li>
                                <li className="custom-checkbox">
                                    <input type="checkbox" name="babydols" id="2" className="zeref-checkbox" />
                                    <label htmlFor="2" className="zeref-checkbox-label">Handbag</label>
                                </li>
                                <li className="custom-checkbox">
                                    <input type="checkbox" name="babydols" id="3" className="zeref-checkbox" />
                                    <label htmlFor="3" className="zeref-checkbox-label">Watches</label>
                                </li>
                                <li className="custom-checkbox">
                                    <input type="checkbox" name="babydols" id="4" className="zeref-checkbox" />
                                    <label htmlFor="4" className="zeref-checkbox-label">Jewelery</label>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- Category Search filter End --> */}

                        {/* <!-- Brand Search filter Start --> */}
                        <div className="filter-box mb--30">
                            <div className="filter-title">
                                <h2>Filter by brand</h2>
                            </div>
                            <ul className="search-filter-list">
                                <li className="custom-checkbox">
                                    <input type="checkbox" name="bookandboardgame" id="cat" className="zeref-checkbox" />
                                    <label htmlFor="cat" className="zeref-checkbox-label">Nike</label>
                                </li>
                                <li className="custom-checkbox">
                                    <input type="checkbox" name="babydols" id="5" className="zeref-checkbox" />
                                    <label htmlFor="5" className="zeref-checkbox-label">zeref</label>
                                </li>
                                <li className="custom-checkbox">
                                    <input type="checkbox" name="babydols" id="6" className="zeref-checkbox" />
                                    <label htmlFor="6" className="zeref-checkbox-label">Lorem</label>
                                </li>
                                <li className="custom-checkbox">
                                    <input type="checkbox" name="babydols" id="7" className="zeref-checkbox" />
                                    <label htmlFor="7" className="zeref-checkbox-label">Ipsum</label>
                                </li>
                                <li className="custom-checkbox">
                                    <input type="checkbox" name="babydols" id="8" className="zeref-checkbox" />
                                    <label htmlFor="8" className="zeref-checkbox-label">Dolet</label>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- Category Search filter End --> */}

                        {/* <!-- Price Search filter Start --> */}

                        <div className="filter-box mb--30">
                            <div className="filter-title">
                                <h2>Filter by price</h2>
                            </div>
                            <ul className="search-filter-list">
                                <li className="custom-radio">
                                    <input type="radio" name="price" id="sixtentoeighteen" className="zeref-radio-input" />
                                    <label htmlFor="sixtentoeighteen" className="zeref-radio-label"><span></span> $10.00 - $15.00 (5) </label>
                                </li>
                                <li className="custom-radio">
                                    <input type="radio" name="price" id="twentyfivetothirtytwo" className="zeref-radio-input" />
                                    <label htmlFor="twentyfivetothirtytwo" className="zeref-radio-label"><span></span> $16.00 - $25.00 (22)</label>
                                </li>
                                <li className="custom-radio">
                                    <input type="radio" name="price" id="fiftytofiftythree" className="zeref-radio-input" />
                                    <label htmlFor="fiftytofiftythree" className="zeref-radio-label"><span></span> $26.00 - $35.00 (53)</label>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- Price Search filter End --> */}

                        {/* <!-- Size Search filter Start --> */}
                        <div className="filter-box mb--30">
                            <div className="filter-title">
                                <h2>Tags</h2>
                            </div>
                            <ul className="tag-list">
                                <li><a href="#">Man</a></li>
                                <li><a href="#">Women</a></li>
                                <li><a href="#">Accessories</a></li>
                                <li><a href="#">Shoes</a></li>
                                <li><a href="#">Children</a></li>
                                <li><a href="#">Toys</a></li>
                                <li><a href="#">Games</a></li>
                            </ul>
                        </div>
                        {/* <!-- Size Search filter End --> */}
                    </div>
                </aside>
            {/* <!-- Sidebar End --> */}
            </div>
        );
    }
}
    
export default ShopSidebar;