import React from 'react';

 class Triangle extends React.Component {

    render () {
        return(
            <div>
             <span>{this.props.title}</span>
                 <div
                    className="triangle"
                     style={{borderBottomColor:this.props.color}}>

                 </div>
                        
            </div>
            
        )
    }
}
export default Triangle;