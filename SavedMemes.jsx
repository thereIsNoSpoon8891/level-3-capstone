function SavedMemes(props) {
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
  
    function deleteMeme() {
      onDelete(id);
    }
  
    return (
      <div className="saved-memes--container">
        <h2 className="saved-memes--top-text">
          {editedTopText ? editedTopText : topText}
        </h2>
        <h2 className="saved-memes--bottom-text">
          {editedBottomText ? editedBottomText : bottomText}
        </h2>
        <img className="saved-memes--img" width="400px" src={imageUrl} alt="Meme"></img>
        <button className="saved-memes--save-button" id={id} onClick={deleteMeme}>
          Delete this Meme
        </button>
        <button className="saved-memes--edit-button">Edit this Meme</button>
        <input type="text" value={editedTopText} onChange={onEditTopText} />
        <input type="text" value={editedBottomText} onChange={onEditBottomText} />
      </div>
    );
  }
  
export default SavedMemes


