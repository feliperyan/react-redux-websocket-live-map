import React from 'react'

const QuadrantListComponent = (props) => {
    // const items = props.quadrants.map((item)=>
    //         <li>item</li>
    //     );
    
    const items = ["quad1", "quad2", "quad3"].map((item)=>
        <li>item</li>
    );
    
    return (        
        <div>
            <ul>
                {items}
            </ul>
        </div>
    )
}

export default QuadrantListComponent;