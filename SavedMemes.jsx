
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
            <img className="saved-memes--img" width="400px" src={imageUrl}></img>
            <button className="saved-memes--save-button" id={id} onClick={x}>
                delete this Meme
            </button>
            <button className="saved-memes--edit-button">
                Edit this Meme
            </button>
        </div>
    )
}

export default SavedMemes