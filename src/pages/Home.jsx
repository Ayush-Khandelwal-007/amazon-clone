import React from 'react'
import "../components/HomeComponents/Home.css"
import Product from '../components/HomeComponents/Product'

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
                    title='The Ickabog By J.K. Rowlings The Ickabog By J.K. Rowlings The Ickabog By J.K. Rowlings The Ickabog By J.K. Rowlings The Ickabog By J.K. Rowlings The Ickabog By J.K. Rowlings The Ickabog By J.K. Rowlings The Ickabog By J.K. Rowlings'
                    imageurl="https://assets.theickabog.com/wp-content/uploads/2020/07/Ickabog_Homepage_Hero_US.jpg"
                    price={8000}
                    rating={5}
                />
                <Product
                    id="1235"
                    title='Samsung 48.9" Ultra-wide Curved Gaming Monitor'
                    imageurl="data:image/jpeg;base64,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"
                    price={110187.74}
                    rating={4}
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
