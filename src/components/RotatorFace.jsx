import React from 'react';

function RotatorFace({ faceWidth, index, children }) {
    const getStyle = function () {
        let angleY = 0;
        switch (index) {
            case 1:
                angleY = 90;
                break;
            case 2:
                angleY = 180;
                break;
            case 3:
                angleY = -90;
                break;
            default:
                angleY = 0;
        }

        return {
            position: `absolute`,
            width: `${faceWidth}px`,
            transform: `rotateX(0deg) rotateY(${angleY}deg) translateZ(${faceWidth / 2}px)`,
            backfaceVisibility: `hidden`
        };
    }
    const faceStyle = getStyle();

    return (
        <div style={faceStyle}>
            {children}
        </div>);
}
RotatorFace.propTypes = {
    faceWidth: React.PropTypes.number.isRequired,
    index: React.PropTypes.number.isRequired,
    children: React.PropTypes.array.isRequired,
}

export default RotatorFace;