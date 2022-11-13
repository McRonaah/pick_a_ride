import React from 'react'
import '../CSS/contact.css';
// import "bootstrap/dist/css/bootstrap.min.css";

 function Contact() {
  return (
    <div>
     
     
         <h1 className="display-4 mb-4">Contact Us</h1>
         <hr className="t_border my-4 ml-0 text-left" />
     
     <br/>

         <h3 className="color_sec py-4">Get in touch</h3>
         <address>
           <strong>Email:</strong>{" "}
           
           <br />
           <br />
            ? (
             <p>
               <strong>Phone:</strong> 
             </p>
           ) : (
             ""
           )
         </address>
         
    
         <form  className="contact__form w-100">
          
               <input
                 className="form-control"
                 id="name"
                 name="name"
                 placeholder="Name" 
                 type="text"
                 required 
               />
        
               <input
                 className="form-control rounded-0"
                 id="email"
                 name="email"
                 placeholder="Email"
                 type="email" 
                 required 
               />
           
           <br/>
           <textarea
             className="form-control rounded-0"
             id="message"
             name="message"
             placeholder="Message"
             rows="5" 
             required
           ></textarea>
           <br />
      
               <button className="btn ac_btn" type="submit"> 
               Send
               </button>
           
           
         </form>
       
    
    </div>
  )
}
export default Contact;