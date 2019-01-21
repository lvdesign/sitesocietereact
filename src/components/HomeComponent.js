import React from 'react'
import { Card, CardImg, CardText, CardBody, CardSubtitle,  CardTitle } from 'reactstrap';


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
        <h4>Home</h4>

        <div className="row align-items-start">
            <div className="col-12 col-md m-1">
             <RenderCard item={props.product} />
            </div>
        </div>
        </div>
    )
}

export default Home;