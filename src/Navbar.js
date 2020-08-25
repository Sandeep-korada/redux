import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';
class Navbar extends React.Component{
 
    

   
    render(){
   
             
       
        return(

            <div className='navbarbg'> 
                              
                    <h2 className="navpbg">Product Inventory System</h2>
                    <h3 className="rightbg">
                        <button><Link to='/'>Home</Link></button>
                    </h3>
                              
            </div>
                
        );}
}
            
        
    

export default Navbar;