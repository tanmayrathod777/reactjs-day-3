import React , {Component} from 'react' ;

class Usergreet extends Component {
 constructor (props){

   super(props)
     this.state ={
       isLoggedin : false 
     
   }
 }
 
 
  render() {
    if(this.state.isLoggedin){
      console.log('welcome');
      
    }
    else {
      console.log('guest');
      
    }
    <div>
   welcome
    </div>
  }
}

export default Usergreet ;