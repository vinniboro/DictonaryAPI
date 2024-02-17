import React from "react";

interface ProgressProps {
    progress: number;
}

const ProgressBar: React.FC<ProgressProps> = ({ progress }) => {
    return (
        <div className='progress-bar'>
            <div style={{transition: '1s ease',borderRadius: 100 +'px' , height: 20,width: progress * 100+ "%", backgroundColor: "orange" }}></div>
        </div>
    );
};

export default ProgressBar;
