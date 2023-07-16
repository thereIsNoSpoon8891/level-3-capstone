
function SavedMemes (props){


const {
    topText,
    bottomText,
    imageUrl,
    id,
    onDelete,
    editedTopText,
    editedBottomText,
    onEditTopText,
    onEditBottomText
  } = props;

    function deleteMeme(){
        onDelete(id);
    }
    return(
        <div className="saved-memes--container">

            <h2 className="saved-memes--top-text">
            {editedTopText ? editedTopText : topText}
            </h2>

            <h2 className="saved-memes--bottom-text">
            {editedBottomText ? editedBottomText : bottomText}
            </h2>

            <div className="saved-memes--image-container">
                <img className="saved-memes--img" width="500px" src={imageUrl} alt="Meme"></img>
            </div>

            <div className="saved-memes--button-container">

                <button className="saved-memes--save-button" id={id} onClick={deleteMeme}>
                    Delete this Meme
                </button>

                <button className="saved-memes--edit-button">
                    Edit this Meme
                </button>

                <input type="text" value={editedTopText} onChange={onEditTopText} />
                <input type="text" value={editedBottomText} onChange={onEditBottomText} />
            </div>
        </div>
    )
}

export default SavedMemes