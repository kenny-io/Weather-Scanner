import React from "react";

const SForm = (props) => {
    return (
        <form onSubmit={props.loadWeather}>
            <input type="text" name="city" placeholder="City..." />
            <input type="text" name="country" placeholder="Country..." />
            <button>Get Weather</button>
        </form>
    )

    /*since we are returning just one root element (form), we could 
    get rid of the return statement and explicitly return the element (form)
    from the arrow function :

    const SForm = (props) => (
    
        <form onSubmit={props.loadWeather}>
            <input type="text" name="city" placeholder="City..." />
            <input type="text" name="country" placeholder="Country..." />
            <button>Get Weather</button>
        </form>
    )
    */

    /*Also if we are returning just one argument (props) in an arrow function, we 
    could then get rid of the parenthesis wrapping it :
    
    const SForm = props => (
    
        <form onSubmit={props.loadWeather}>
            <input type="text" name="city" placeholder="City..." />
            <input type="text" name="country" placeholder="Country..." />
            <button>Get Weather</button>
        </form>
    )
    
    And it still works just like the first time.
    */

}

export default SForm;