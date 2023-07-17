
function SavedMemes (props){

const {
    topText,
    bottomText,
    imageUrl,
    id,
    onDelete,
    setSavedMemes,
    savedMemes,
    showEdit,
    setShowEdit
  } = props;

function deleteMeme(){
    onDelete(id);
}

function handleEdit(e){
    e.preventDefault();
        const {name, value} = e.target
        const editedMemes = savedMemes.map(meme => meme.id === id ? {...meme, [name]: value} : meme)
            setSavedMemes(editedMemes)
}

function showEditInputs (e){
    e.preventDefault();
        setShowEdit(prev => !prev)
}

    return(
        <div className="saved-memes--container">

            <h2 className="saved-memes--top-text">
                {topText}
            </h2>

            <h2 className="saved-memes--bottom-text">
                {bottomText}
            </h2>

            <div 
            className="saved-memes--image-container"
            >
                <img
                 className="saved-memes--img" 
                 width="500px" src={imageUrl} 
                 />
            </div>

            <div className="saved-memes--button-container">

                <button 
                className="saved-memes--save-button" 
                id={id} 
                onClick={deleteMeme}
                >
                    Delete this Meme
                </button>

                <button 
                onClick={showEditInputs}
                className="saved-memes--edit-button"
                >
                    {showEdit ? "Done" : "Edit this Meme"}
                </button>

                <form>
                    {showEdit && 
                    <div className='saved-memes--inputs-container'>
                        <input 
                        type="text" 
                        placeholder="Edit Top Text"
                        className='saved-inputs' 
                        onChange={handleEdit} 
                        name="topText"
                        />

                        <input 
                        type="text" 
                        placeholder="Edit Bottom Text"
                        className='saved-inputs'  
                        onChange={handleEdit} 
                        name="bottomText"
                        />
                    </div>}
                </form>
            </div>
        </div>
    )
}

export default SavedMemes