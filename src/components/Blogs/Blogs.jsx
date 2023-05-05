import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='quiz-container'>
            <div className='div-single'>
                <h3>quiz-1: What is differences between uncontrolled and controlled components?
               </h3>
            <p>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>

            </div>
             <div className='div-single'>
               <h3>quiz-2: How to validate React props using PropTypes?  </h3>
                <p>PropTypes are simply a mechanism that ensures that the passed value is of the correct datatype. This makes sure that we dont receive an error at the very end of our app by the console which might not be easy to deal with.</p>
            
             </div>
             <div className='div-single'>
                 <h3>quiz-3:   What is difference between nodejs and express js?</h3>
                 <p>
                 Node.js is the underlying platform that allows developers to write server-side code using JavaScript, while Express.js is a framework built on top of Node.js that makes it easier to build web applications by providing a set of abstractions and utilities for handling HTTP requests, managing routes, rendering views, and more.
                 </p>
             </div>
             <div className='div-single'>
                  <h3> quiz-4: What is a custom hook, and why will you create a custom hook?</h3>
                  <p>
                  Imagine you have a set of components that all need to fetch data from a server and manage the loading state of the data. Instead of duplicating the same logic and state management code in each of the components, you could create a custom hook that encapsulates the fetch logic and state management, and then use that hook in each of the components.
                  </p>
             </div>
        </div>
    );
};

export default Blogs;