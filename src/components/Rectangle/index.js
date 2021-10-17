import React from 'react';

class Rectangle extends React.Component{

    render () {
        return (
            <div>
                <span>{this.props.title}</span>
                   
                    <div 
                        style={{background:this.props.color}}
                        className="rectangle">
                    </div>    

            </div>

        )
    }
}
export default Rectangle; 