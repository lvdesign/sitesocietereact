import React from 'react'
import { Card, CardImg, CardText, CardBody, CardSubtitle, CardTitle } from 'reactstrap';


function RenderCard({item}){
    return(
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.summary ? <CardSubtitle>{item.summary} </CardSubtitle> : null}
            </CardBody>
            <CardText>{item.description}</CardText>
        </Card>
    )
}




function Home(props){
    return (    
        
        <div className="container">

            {/*  Image Fond --   */}
            <div className="row ">
                <div className="col-12 col-md m-1">
                        <h4>Image fond</h4>
                </div>
            </div>


           {/*  Best feature  */}
            <div className="row text-center" id="best-features">
                <div className="col-12 col-md m-1">
                    <h4>Je vous propose…</h4>

                    <div className="row d-flex justify-content-center mb-4">
                        <div className="col-md-8">
                            <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi voluptate hic provident nulla repellat
                                facere esse molestiae ipsa labore quam aut audic to offici odiorem quiant atis magnisq uisqui odit quam quaerat rem, natus repudiandae debitis est
                                sit pariatur.</p>
                        </div>
                    </div>
               
                    <div className="row d-flex">
                        
                        <div className="col-md-4 mb-5">
                            <i className="fa fa-user fa-4x text-success sr-icons"></i>
                            <h4 className="my-4 ">Experiences</h4>
                            <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima
                                assumenda deleniti hic.</p>
                        </div>
                    
                        <div className="col-md-4 mb-5">
                            <i className="fa fa-heart fa-4x text-success sr-icons"></i>
                            <h4 className="my-4">Happiness</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima
                                assumenda deleniti hic.</p>
                        </div>
                    
                        <div className="col-md-4 mb-1">
                            <i className="fa fa-history fa-4x text-success sr-icons"></i>
                            <h4 className="my-4">Services</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima
                                assumenda deleniti hic.</p>
                        </div>
                    
                    </div>
                </div>
            </div>
            {/*  ENDBest feature  */}


            {/*  Réalisation  */}
            <div className="row text-center" id="examples">

                <div className="col-12 col-md m-1">
                    <h2 className="mb-2 font-weight-bold text-center">Nos réalisations</h2>
                
                
                <div className="row">
           
            
                        <div className="col-lg-4 col-md-12 mb-2 zoom">
                            <div className="shadow p-3 mb-3 bg-white ">
                                <img src="assets/img/imgfleurs/ex1.png" className=" img-fluid" alt="fleurs" />
                            </div>

                                <h4 className="mt-2 font-weight-bold">Maiores</h4>
                                <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam,
                                aperiam minima assumenda deleniti hic.</p>
                        </div>
          
                        <div className="col-lg-4 col-md-6 mb-2 zoom">
                            <div className="shadow p-3 mb-3 bg-white ">
                                <img src="assets/img/imgfleurs/ex2.png" className="img-fluid"  alt="fleurs"/>
                            </div>
                            <h4 className="mt-2 font-weight-bold">Consectetur</h4>
                            <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam,
                                aperiam minima  assumenda deleniti hic.</p>
                        </div>
            
                        <div className="col-lg-4 col-md-6 mb-2 zoom">
                            <div className="shadow p-3 mb-3 bg-white">
                                <img src="assets/img/imgfleurs/ex3.png" className="img-fluid"  alt="fleurs"/>
                            </div>
                            <h4 className="mt-2 font-weight-bold">Deleniti</h4>
                            <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam,
                                aperiam minima  assumenda deleniti hic.</p>
                        </div>

                </div>

            </div>

            </div>
         
          
            
         
            {/*  End Réalisation  */}



            {/*  Product  */}
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                <RenderCard item={props.product} />
                </div>
            </div>

            {/*  End Product  */}
           

            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                        <h4>Exemple</h4>
                </div>
            </div>

           
        </div>
            
   
    )
}

export default Home;