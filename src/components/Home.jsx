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
                    id="1234"
                    title='The Ickabog By J.K. Rowlings'
                    imageurl="https://assets.theickabog.com/wp-content/uploads/2020/07/Ickabog_Homepage_Hero_US.jpg"
                    price={8000}
                    rating={5}
                />
                <Product
                    id="1235"
                    title='The Ickabog By J.K. Rowlings'
                    imageurl="https://assets.theickabog.com/wp-content/uploads/2020/07/Ickabog_Homepage_Hero_US.jpg"
                    price={8000}
                    rating={5}
                />
                <Product
                    id="1236"
                    title='The Ickabog By J.K. Rowlings'
                    imageurl="https://assets.theickabog.com/wp-content/uploads/2020/07/Ickabog_Homepage_Hero_US.jpg"
                    price={8000}
                    rating={5}
                />
                <Product
                    id="1237"
                    title='The Ickabog By J.K. Rowlings'
                    imageurl="https://assets.theickabog.com/wp-content/uploads/2020/07/Ickabog_Homepage_Hero_US.jpg"
                    price={8000}
                    rating={5}
                />
            </div>
            <div className="home_row">
                <Product
                    id="1238"
                    title='The Ickabog By J.K. Rowlings'
                    imageurl="https://assets.theickabog.com/wp-content/uploads/2020/07/Ickabog_Homepage_Hero_US.jpg"
                    price={8000}
                    rating={5}
                />
                <Product
                    id="1239"
                    title='The Ickabog By J.K. Rowlings'
                    imageurl="https://assets.theickabog.com/wp-content/uploads/2020/07/Ickabog_Homepage_Hero_US.jpg"
                    price={8000}
                    rating={5}
                />
                <Product
                    id="1240"
                    title='The Ickabog By J.K. Rowlings'
                    imageurl="https://assets.theickabog.com/wp-content/uploads/2020/07/Ickabog_Homepage_Hero_US.jpg"
                    price={8000}
                    rating={5}
                />
            </div>
            <div className="home_row">
                <Product
                    id="1241"
                    title='The Ickabog By J.K. Rowlings'
                    imageurl="https://assets.theickabog.com/wp-content/uploads/2020/07/Ickabog_Homepage_Hero_US.jpg"
                    price={8000}
                    rating={5}
                />
                <Product
                    id="1242"
                    title='The Ickabog By J.K. Rowlings'
                    imageurl="https://assets.theickabog.com/wp-content/uploads/2020/07/Ickabog_Homepage_Hero_US.jpg"
                    price={8000}
                    rating={5}
                />
                <Product
                    id="1243"
                    title='The Ickabog By J.K. Rowlings'
                    imageurl="https://assets.theickabog.com/wp-content/uploads/2020/07/Ickabog_Homepage_Hero_US.jpg"
                    price={8000}
                    rating={5}
                />
                <Product
                    id="1244"
                    title='The Ickabog By J.K. Rowlings'
                    imageurl="https://assets.theickabog.com/wp-content/uploads/2020/07/Ickabog_Homepage_Hero_US.jpg"
                    price={8000}
                    rating={5}
                />
                <Product
                    id="1245"
                    title='The Ickabog By J.K. Rowlings'
                    imageurl="https://assets.theickabog.com/wp-content/uploads/2020/07/Ickabog_Homepage_Hero_US.jpg"
                    price={8000}
                    rating={5}
                />
                <Product
                    id="1246"
                    title='The Ickabog By J.K. Rowlings'
                    imageurl="https://assets.theickabog.com/wp-content/uploads/2020/07/Ickabog_Homepage_Hero_US.jpg"
                    price={8000}
                    rating={5}
                />
            </div>
        </div>
    )
}

export default Home
