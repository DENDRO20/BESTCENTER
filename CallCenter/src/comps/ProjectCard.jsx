import {Col} from "react-bootstrap"
import Collapsible from 'react-collapsible';

export function ProjectCard({title, description, imgUrl}){
return (
    // <Col sm={6} md={3}>
    <div>
    
    <Collapsible trigger={title}>
        <div className="proj-imgbx">
            <img src={imgUrl}/>
            <div className="proj-txtx">
            <h4>{title}</h4>
            <p>{description}</p>
            </div>
            
        </div>
        </Collapsible>
        <hr />
    </div>
    )
    {/* </Col> */}

}