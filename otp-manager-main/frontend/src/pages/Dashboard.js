import React, { useState } from 'react'


const Header = () => {
    const deliveryDetails = [
        {
            productName: "Water Can",
            productDeliveryTime: "Delivery with in 24Hrs",
            productDeliveryDetails: "Water can which you order today will be delivered with in 24 Hrs. Delivery charge will be Low.",
        },
        {
            productName: "Water Can",
            productDeliveryTime: "Delivery with in 12Hrs",
            productDeliveryDetails: "Water can which you order today will be delivered with in 12 Hrs. Delivery charge will be Medium.",
        },
        {
            productName: "Water Can",
            productDeliveryTime: "Delivery with in 02Hrs",
            productDeliveryDetails: "Water can which you order today will be delivered with in 2 Hrs. Delivery charge will be High.",
        },
    ];
    const CartList =
    [
        {
        itemName:"Tomato",
        quantity:"1Kg",
        price:"Rs.100",
        },
        {
            itemName:"Sprite 500ml",
            quantity:"1",
            price:"Rs.40",
            },
            {
                itemName:"Water Cane",
                quantity:"1",
                price:"Rs.25",
                },
               
        
            ]





    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = (productName) => {
        const waterCane = deliveryDetails.find(detail => detail.productName === productName);
        if (waterCane) {
            const existingItemIndex = cartItems.findIndex(item => item.itemName === productName);
            const newCartItems = [...cartItems];
            if (existingItemIndex !== -1) {
                newCartItems[existingItemIndex].quantity = parseInt(newCartItems[existingItemIndex].quantity) + 1;
            } else {
                newCartItems.push({
                    itemName: waterCane.productName,
                    quantity: "1",
                    price: "Rs.25",
                });
            }
            // Adjust quantity and price based on conditions
            const quantity = parseInt(newCartItems[existingItemIndex]?.quantity || "1");
            let price = 25 * quantity;
            if (quantity > 1 && quantity % 2 === 0) {
                price -= (quantity / 2) * 5;
            }
            newCartItems[existingItemIndex].price = `Rs.${price}`;
            setCartItems(newCartItems);
        }
    };









  return (

    
    <header style={{ marginBottom:"24px", }}>
        <nav className="navbar navbar-expand-md py-3">
            <div className="container"><a className="navbar-brand d-flex align-items-center" href="#"><span className="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex justify-content-center align-items-center me-2 bs-icon"><svg className="bi bi-basket2" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
    <path d="M4 10a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0zm3 0a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0zm3 0a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0z"></path>
    <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-.623l-1.844 6.456a.75.75 0 0 1-.722.544H3.69a.75.75 0 0 1-.722-.544L1.123 8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.163 8l1.714 6h8.246l1.714-6H2.163z"></path>
</svg></span><span>MAX Market</span></a><button className="cart-toggler" data-bs-toggle="offcanvas" data-bs-target="#navbar" data-bs-placement="end" aria-controls="navbar" style={{ fontSize:"22px", background:"rgb(214,86,30)", }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-cart4" style={{ marginRight:"7px", paddingBottom:"0px", marginBottom:"4px", }}>
                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"></path>
                    </svg><span style={{ color:"rgb(13,234,9)", }}>Cart</span></button><button data-bs-toggle="collapse" className="navbar-toggler text-end" data-bs-target="#navcol-2"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse text-center" id="navcol-2" style={{ margin:"0px", }}>
                    <ul className="navbar-nav navbar-nav-scroll ms-auto">
                        <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Category</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Third Item</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Third Item</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Third Item</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Third Item</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Third Item</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="container d-flex flex-row flex-grow-1 flex-shrink-1 justify-content-evenly"><input className="bg-secondary-subtle border rounded-pill border-primary-subtle shadow-lg d-flex flex-row flex-grow-1" type="search" placeholder="Search for Products, Brands and More" autoFocus="" autoComplete="on" style={{ paddingLeft:"20px", margin:"0px", marginRight:"10px", marginLeft:"0px", paddingTop:"0px", paddingRight:"0px", }}/><button className="btn btn-primary" type="submit">Search</button></div>
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="navbar" aria-labelledby="navbarLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="navbarLabel">Cart</h5><button className="btn-close" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <div className="table-responsive" style={{ height:"100vh", }}>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Item name</th>
                                <th>Quantity</th>
                                <th>price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Tomato</td>
                                <td>1Kg</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>Lays</td>
                                <td>2</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td>Sprite 500ml</td>
                                <td>1</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>Sprite 500ml</td>
                                <td>1</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>Sprite 500ml</td>
                                <td>1</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>Sprite 500ml</td>
                                <td>1</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>Sprite 500ml</td>
                                <td>1</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>Sprite 500ml</td>
                                <td>1</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>Sprite 500ml</td>
                                <td>1</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>Sprite 500ml</td>
                                <td>1</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>Sprite 500ml</td>
                                <td>1</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>Sprite 500ml</td>
                                <td>1</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>Sprite 500ml</td>
                                <td>1</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>Sprite 500ml</td>
                                <td>1</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>Sprite 500ml</td>
                                <td>1</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>Sprite 500ml</td>
                                <td>1</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>Sprite 500ml</td>
                                <td>1</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>Sprite 500ml</td>
                                <td>1</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>Sprite 500ml</td>
                                <td>1</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>Sprite 500ml</td>
                                <td>1</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>Sprite 500ml</td>
                                <td>1</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>Sprite 500ml</td>
                                <td>1</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>Sprite 500ml</td>
                                <td>1</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>Sprite 500ml</td>
                                <td>1</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>Sprite 500ml</td>
                                <td>1</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>Sprite 500ml</td>
                                <td>1</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>Sprite 500ml</td>
                                <td>1</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>Sprite 500ml</td>
                                <td>1</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Total:</td>
                                <td></td>
                                <td>1000</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-xl-6 text-center mx-auto">
                    <h2>Water</h2>
                    <p className="w-lg-50">Water Can which are listed below are 25 Liters per can. You can choose up to 10 can's per order. We are happy to deliver it to your home.</p>
                </div>
            </div>

            <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
                {deliveryDetails.map((detail, index) => (
                    <div className="col" key={index} style={{ borderStyle: "solid" }}>
                        <div className="p-4">
                            <span className="badge rounded-pill bg-primary mb-2">{detail.productName}</span>
                            <h4>{detail.productDeliveryTime}</h4>
                            <p>{detail.productDeliveryDetails}</p>
                            <div className="row row-cols-1 justify-content-center align-items-center">
                                <div className="col-xl-9 offset-4">
                                    <input className="border rounded-pill border-5 focus-ring form-control-sm float-start" type="number" max="10" min="1" step="1" style={{ marginRight: "0px" }} name={detail.productDeliveryTime} required="" />
                                </div>
                                <div className="col-xl-9">
                                    <button className="btn btn-primary font-monospace text-truncate" type="button" style={{ margin: "0px", marginTop: "10px", marginLeft: "30px" }} onClick={() => handleAddToCart(detail.productName)}>Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="row">
                <div className="col">
                    <h2>Cart</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Item Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.itemName}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

    </header>
  
                          )  }
export default Header