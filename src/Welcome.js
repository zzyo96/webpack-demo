import React from 'react';
class Welcome extends React.Component {
    constructor(props){
        super(props)
     	this.state = {
       		date: new Date()
     	}
	    setInterval(()=>{ 
	      this.setState ({
	        date: new Date()
	      })
	    })
    }
    render() {
        return <h1>Hello, Component</h1>;
    }
}

export default Welcome 