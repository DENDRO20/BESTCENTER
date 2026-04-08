import { Banner } from "./Banner";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { AboutUs } from "./AboutUs";
import { Collapsing } from "./Collapsing";


export function Content(){
    return <>
        <div className="ban-prj">
        <Banner />
        <AboutUs />
        <Projects />
        {/* <Collapsing /> */}
        <Skills />
        
        </div>
        </>
}