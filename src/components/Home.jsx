import React from 'react'
import "./HomeComponents/Home.css"
import Product from './HomeComponents/Product'

function Home() {
    return (
        <div className="home">
            <img
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt="Prime Video Banner"
                className="home_banner"
            />
            <div className="home_row">
                <Product
                    title='A Ickabog By J.K. Rowlings'
                    imageurl="https://assets.theickabog.com/wp-content/uploads/2020/07/Ickabog_Homepage_Hero_US.jpg"
                    price={8000}
                    rating={5}
                />
                <Product
                    title='A Ickabog By J.K. Rowlings'
                    imageurl="https://assets.theickabog.com/wp-content/uploads/2020/07/Ickabog_Homepage_Hero_US.jpg"
                    price={8000}
                    rating={5}
                />
                <Product
                    title='A Ickabog By J.K. Rowlings'
                    imageurl="https://assets.theickabog.com/wp-content/uploads/2020/07/Ickabog_Homepage_Hero_US.jpg"
                    price={8000}
                    rating={5}
                />
                <Product
                    title='A Ickabog By J.K. Rowlings'
                    imageurl="https://assets.theickabog.com/wp-content/uploads/2020/07/Ickabog_Homepage_Hero_US.jpg"
                    price={8000}
                    rating={5}
                />
            </div>
            <div className="home_row">
                <Product
                    title='A Ickabog By J.K. Rowlings'
                    imageurl="https://assets.theickabog.com/wp-content/uploads/2020/07/Ickabog_Homepage_Hero_US.jpg"
                    price={8000}
                    rating={5}
                />
                <Product
                    title='A Ickabog By J.K. Rowlings'
                    imageurl="https://assets.theickabog.com/wp-content/uploads/2020/07/Ickabog_Homepage_Hero_US.jpg"
                    price={8000}
                    rating={5}
                />
                <Product
                    title='A Ickabog By J.K. Rowlings'
                    imageurl="https://assets.theickabog.com/wp-content/uploads/2020/07/Ickabog_Homepage_Hero_US.jpg"
                    price={8000}
                    rating={5}
                />
            </div>
            <div className="home_row">
                <Product
                    title='A Ickabog By J.K. Rowlings'
                    imageurl="https://assets.theickabog.com/wp-content/uploads/2020/07/Ickabog_Homepage_Hero_US.jpg"
                    price={8000}
                    rating={5}
                />
                <Product
                    title='A Ickabog By J.K. Rowlings'
                    imageurl="https://assets.theickabog.com/wp-content/uploads/2020/07/Ickabog_Homepage_Hero_US.jpg"
                    price={8000}
                    rating={5}
                />
                <Product
                    title='A Ickabog By J.K. Rowlings'
                    imageurl="https://assets.theickabog.com/wp-content/uploads/2020/07/Ickabog_Homepage_Hero_US.jpg"
                    price={8000}
                    rating={5}
                />
                <Product
                    title='A Ickabog By J.K. Rowlings'
                    imageurl="https://assets.theickabog.com/wp-content/uploads/2020/07/Ickabog_Homepage_Hero_US.jpg"
                    price={8000}
                    rating={5}
                />
                <Product
                    title='A Ickabog By J.K. Rowlings'
                    imageurl="https://assets.theickabog.com/wp-content/uploads/2020/07/Ickabog_Homepage_Hero_US.jpg"
                    price={8000}
                    rating={5}
                />
                <Product
                    title='A Ickabog By J.K. Rowlings'
                    imageurl="https://assets.theickabog.com/wp-content/uploads/2020/07/Ickabog_Homepage_Hero_US.jpg"
                    price={8000}
                    rating={5}
                />
            </div>
        </div>
    )
}

export default Home
