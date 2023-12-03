import { useState } from "react";
import accordionData from "./accordionData";
import { AccordionWrapper } from "./AccordionStyled";

const Accordion = () =>{
    const [isClicked, setIsClicked] = useState(null);

    const handleIsClicked = (id) =>{
        if(isClicked === id){
            return setIsClicked(null);
        }

        setIsClicked(id);
    };
    return(
        <>
        <section className="section">
            <AccordionWrapper>
                {
                    accordionData.map((currValue) =>{
                        return (
                            <div className="accordion_item" key={id}>
                                <div className={`accordion_title ${isClicked === id ? "active" : ''}`}
                                onClick={() => handleIsClicked(id)}
                                >
                                    <h2>{title}</h2>
                                    <div className="toggle_icon">
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                                <div className="accordion_content">
                                    <p>{content}</p>
                                </div>
                            </div>
                        );
                    })
                }
            </AccordionWrapper>
        </section>
        </>
    );
};

export default Accordion;