import React from "react";

import { _url } from "config/utils";


// Components
import {
    Header,
    Footer,
    Delivery,
} from "components/layouts"

import {
    SliderMain,
    SliderMini,
    SliderProducts
} from "components/slider"

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Home">
                <Header />

                <SliderMain />
                <SliderMini />
                <SliderProducts />


                <Delivery />
                <Footer />
            </div>
        )
    }
}

export default Home;