import React, {Component} from 'react';
const webshot = require('webshot');

class Screenshot extends Component  {
  constructor() {
    super();
    this.state = ({
      isImageAdded: false
    });
  }

onClick = ()=>{
  const optionsMobile = {
    screenSize:{
      width: 414,
      height:736
    },
    shotSize:{
      width: 414,
      height: 'all'
    }
  };

  webshot('http://www.penta-code.com',
  'Images/pentacode-Mobile.png',optionsMobile, (err)=>{
    if(!err){
      this.setState({isImageAdded: true})
      console.log('screenshot taken!');
    }
  })
}

  render(){
    return (
      <React.Fragment>
      {
        this.isImageAdded?<img hrf="/Images/pentacode-Mobile.png" />:
        <div>
        <input placeholder="Enter the URL here" />
        <button className="screenshotButton" onClick={this.onClick}>Take a Shot</button>
        </div>
      }

      </React.Fragment>
    )
  }
}

export default Screenshot;
