
function SavedMemes (props){
console.log(props)

    const {topText, bottomText, imageUrl, id} = props

    function deleteMeme(e){

    }
    return(
        <div className="saved-memes--container">

            <h2 className="saved-memes--top-text">
                {topText}
            </h2>

            <h2 className="saved-memes--bottom-text">
                {bottomText}
            </h2>

            <div className="saved-memes--image-container">
                <img className="saved-memes--img" width="500px" src={imageUrl}></img>
            </div>

            <div className="saved-memes--button-container">
                
                <button className="saved-memes--save-button" id={id} >
                    Delete this Meme
                </button>

                <button className="saved-memes--edit-button">
                    Edit this Meme
                </button>

            </div>
        </div>
    )
}

export default SavedMemes