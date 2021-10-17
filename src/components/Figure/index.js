import React from 'react';
import Square from '../Square';
import Circle from '../Circle';
import Triangle from '../Triangle';
import Rectangle from '../Rectangle';


class Figure extends React.Component{

    render () {

        if(this.props.type === 'square') {
            return ( <Square/>)
            }


        if(this.props.type === 'circle') {
            return( <Circle/>)
            }

        if(this.props.type === 'triangle') {
            return (<Triangle/>)
            }

        if(this.props.type === 'rectangle') {
            return(<Rectangle/>)   
            }

    return (
        <div/>
    )
}
}
export default Figure;