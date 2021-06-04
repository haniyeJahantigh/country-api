import Header from "./Header";
import Footer from './Footer'
import React from 'react'

export default function PageTemplate(props) {
    return (
        <div>
            <Header/>
            <div className="row flex-row-reverse">
                <div className="col-md-12">
                    {props.children}
                </div>
            </div>
            <Footer/>


        </div>


    )
}