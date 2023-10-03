import React, {useState} from 'react';

export default function ProductForm()  {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [avaiability, setAvailability] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    //instead of 5 seperate states above, we use one state to manage all - below - depends on personal preference
/*     const [userInput, setUserInput] = useState({
        name: '',
        price: '',
        description: '',
        avaiability:'',
        imageUrl: '',
    });
 */
    function nameInputHandler(event) {
        setName(event.target.value);

            //Not the best approach, of updating from previous state, react doesn't update in sequence. Unstable in what snapshot you are getting
/*         setUserInput({
            ...userInput,
            name: event.target.value
        }) */

        //best approach to updating value based on prev state. 
/*         setUserInput((prev) => {
            return {...prev, name: event.target.value}
        }) */
    }

    function priceInputHandler(event) {
        setPrice(event.target.value);
/*         setUserInput({
            ...userInput,
            price: event.target.value
        }) */
    }

    function descriptionInputHandler(event) {
        setDescription(event.target.value);
/*         setUserInput({
            ...userInput,
            description: event.target.value
        }) */
    }

    function availabilityInputHandler(event) {
        setAvailability(event.target.checked);
/*         setUserInput({
            ...userInput,
            avaiability: event.target.value
        }) */
    }

    function imageInputHandler(event) {
        setImageUrl(event.target.value);
/*         setUserInput({
            ...userInput,
            imageUrl: event.target.value
        }) */
    }

    return (
        <form className="row g-3">
        <div className="col-md-6">
            <label for="name">Product Name</label>
            <input type="text" 
                    className="form-control" 
                    id="name" 
                    placeholder="Product Name" 
                    onChange={nameInputHandler} />
        </div>
        <div className="col-md-6">
            <label for="price">Product Price</label>
            <input type="number" 
                    min="0.01" step="0.01" 
                    className="form-control" 
                    id="price" 
                    placeholder="Product Price"
                    onChange={priceInputHandler} />
        </div>

        <div className="form-group">
            <label for="description">Product Description</label>
            <input type="text" 
                    className="form-control" 
                    id="description" 
                    placeholder="Product Description" 
                    onChange={descriptionInputHandler}/>
        </div>

        <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="isAvailable" 
            onChange={availabilityInputHandler}/>
            <label class="form-check-label" for="isAvailable">Is product available in stock?</label>
        </div>

        <div className="form-group">
            <label for="select-image">Select product image</label>
            <input type="file" className="form-control" id="select-image" 
            onChange={imageInputHandler}/>
        </div>
        

        <button type="submit" className="btn btn-primary">Add Product</button>
    </form>
    );
    }