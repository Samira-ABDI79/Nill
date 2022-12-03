import hoverEffect from 'hover-effect';
import { useEffect } from 'react';
import "./WaterEffect.css";


function WaterEffect(props) {

    useEffect(() => {
        let image_animate = new hoverEffect({
            parent: document.querySelector(".item-image"),
            intensity: 0.3,
            image1: props.image1,
            image2: props.image2,
            displacementImage: props.image3,
        });
    })
    return (
        <>
            <div className="container-1 ">
                <div className="item-image-dad">
                    <div className="item-header">
                    </div>
                    <div className="item-image"></div>
                    <div className="item-footer">
                    </div>
                </div>
            </div>
        </>
    );
}

export default WaterEffect;
