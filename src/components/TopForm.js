import React from "react";

const TopForm = () => {
    let input
    return (
    <header className="component-top-form">
        <div class="form-group">
        <label for="exampleInputEmail1">Image</label>
        <input class="form-control" placeholder="Enter image url" value="" ref={node => input = node} ></input>
        </div>
    </header>
    )
}

export default TopForm