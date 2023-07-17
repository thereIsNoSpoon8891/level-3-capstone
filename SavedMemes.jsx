// workin  on solution ,
//you need to click the edit button enable edeting 
//current vetion makes all meme in savememes the same edit  

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
    onEditBottomText,
    onEdit,
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
      <div className="saved-memes--image-container">
        <img className="saved-memes--img" width="500px" src={imageUrl} alt="Meme" />
      </div>
      <div className="saved-memes--button-container">
        <button className="saved-memes--save-button" id={id} onClick={deleteMeme}>
          Delete this Meme
        </button>
        <button className="saved-memes--edit-button" onClick={() => onEdit(id)}>
          Edit this Meme
        </button>
        <input
          type="text"
          placeholder="Edit Top Text"
          value={editedTopText}
          onChange={onEditTopText}
        />
        <input
          type="text"
          placeholder="Edit Bottom Text"
          value={editedBottomText}
          onChange={onEditBottomText}
        />
      </div>
    </div>
  );
}

export default SavedMemes