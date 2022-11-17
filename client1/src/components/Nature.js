import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Nature.css';
import map from 'file:///C:/Users/arunk/OneDrive/Desktop/bigbang/client/src/images/maps.jpg';
import man from 'file:///C:/Users/arunk/OneDrive/Desktop/bigbang/client/src/images/guy.jpg';

export default function Nature(){

    return(
        <>
        <div className="full">
            
        <div className="container-fluid nature_background">
        <div className="row">
            <div className="col-lg-3 text-white headmenu">Logo</div>
            <div className="col-lg-6 headmenu">
                <ul>
                    <li>About us</li>
                    <li>Destination</li>
                    <li>Gallery</li>
                    <li>Contacts</li>
                </ul>
            </div>
            <div className="col-lg-3 headmenu">
                <button className="headbtn1">Login</button>
                <button className="headbtn2">Register</button>
            </div>
        
        </div>
        <div className="row">
            <div className="col-lg-12 nature_heading">
                <h1>LIVE YOUR ADVENTURE</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            
            <div className="col-lg-12">
                <div className="d-flex flex-row justify-content-center text-white ">
                    <div className="col-lg-3">
                        <h6>Location</h6>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Obcaecati praesentium tempore repellendus?</p>
                    </div>
                    <div className="col-lg-3">
                        <h6>Location</h6>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Obcaecati praesentium tempore repellendus?</p>
                    </div>
                    <div className="col-lg-3">
                        <h6>Location</h6>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Obcaecati praesentium tempore repellendus?</p>
                    </div>
                </div>
                
            </div>
        </div>
       

    </div>
   
   <div className="seconddiv_background">
        <div className="row">
            <div className="col-lg-12 p-3 ">
                <h1 className="text-light ml-5">find  popular destination</h1>
            </div>
                 <div className="col-lg-3">&nbsp;</div>
                    <div className="seconddiv_menu">
                        <ul>
                            <li>Filter :</li>
                            <li>All</li>
                            <li>adventure</li>
                            <li>water bodies</li>
                            <li>explore the nature</li>
                        </ul>

                    </div>
                        <div className="col-lg-3">&nbsp;</div>
      </div>
        <div className="row">
            <div className="col-lg-2">&nbsp;</div>
            <div className="seconddiv_box1">
                <div className="threeimage"></div>
                    <h1>chengeri hill</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Obcaecati praesentium tempore repellendus?</p>
                            <button className="bodybtn1">view more</button>
            </div>
            <div className="seconddiv_box1">
            <div className="threeimage"></div>
                    <h1>chengeri hill</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Obcaecati praesentium tempore repellendus?</p>
                            <button className="bodybtn1">view more</button>
            </div>
            <div className="seconddiv_box1">
                    <div className="threeimage"></div>
                    <h1>chengeri hill</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Obcaecati praesentium tempore repellendus?</p>
                            <button className="bodybtn1">view more</button>
            </div>
            <div className="col-lg-2">&nbsp;</div>
        </div>
        </div>
            <div className="seconddiv_image4">
            <h1 >Discover the wayanad in<br/> a new way</h1>
                {/* <div>
                    <h1 >Discover the wayanad in<br/> a new way</h1>
                    <h6>Lorem ipsum, dolor</h6>
                    <p>Lorem ipsum, dolor sit amet consectetur <br/>adipisicing
                            Obcaecati praesentium </p>
                </div> */}

            </div>

            <div>
                    <div className="row">
                        <div className="col-lg-4">&nbsp;</div>
                            <div className="col-lg-6 mapdiv_1">
                                <h1>Start your new adventure<br/>
                                arround the waynad</h1>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing
                                    Obcaecati praesentium <br/>Lorem ipsum, dolor sit amet consectetur adipisicing
                                    Obcaecati praesentium</p>
                            </div>
                            
                            <div className="mapimg">
                                <img src={map} className="mapimg"/>

                            </div>
                        <div className="col-lg-2">&nbsp;</div>
                    </div>
                    <div className="row">
                        <div className="col-lg-1">&nbsp;</div>
                                <div className="mapdiv_1 col-lg-5 p-5" >
                                <h1>Start your new adventure<br/>
                                            arround the waynad</h1>
                                            <p>Lorem ipsum, dolor sit amet consectetur <br/>
                                                Obcaecati praesentium Lorem ipsum,<br/> dolor 
                                                Obcaecati praesentium</p>
                                </div>
                                <div className="manimage col-lg-5">
                                    <img src={man}/>
                            

                                </div>
                                <div className="col-lg-1">&nbsp;</div>
                    </div>

            </div>
            <div className="card">
                    <div className="row">
                    <div className="col-lg-1">&nbsp;</div>
                        <div className="card2 col-lg-10 m-3">
                                <h1>get started with<br/>travelious</h1>
                                <p>Lorem ipsum, dolor sit amet consectetur <br/>
                                Obcaecati praesentium Lorem ipsum,<br/> dolor 
                                    Obcaecati praesentium</p>
                                    <button className="cardbtn1">Get start</button>
                        </div>
                        <div className="col-lg-1">&nbsp;</div>
                    </div>
            </div>
            <div className="card_footer">

            </div>
            <div className="lastdiv p-3">
                

            </div>
            </div>
        </>
    );
}