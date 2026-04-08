import {Col} from "react-bootstrap"

export function ProjectDesc({title, description, imgUrl}){
return (
    <Col sm={6} md={3}>
        <div className="proj-imgbx1">
            <img src={imgUrl}/>
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </div>
    </Col>
)
}