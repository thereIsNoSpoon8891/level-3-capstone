import {useState, useEffect} from 'react'
import SavedMemes from './SavedMemes';
import { v4 as idGen } from 'uuid';
import './style.css'

function App (){
    const [memesList, setMemeList] = useState("")// holds all the memes 
    
    const [savedMemes, setSavedMemes] = useState([])// store saved memes
    

    const initValues = {
        topText: "",
        bottomText: "",
        imageUrl: "https://i.imgflip.com/33e92f.jpg",// initial image
        id: idGen()
    }
    const [currentMeme, setCurrentMeme] = useState(initValues)
    
useEffect( () => {
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(allMemes => setMemeList(allMemes.data.memes))
    .catch(error => console.log(error))
}, [])
    
function changeMeme (){
    const randomNumber = Math.floor(Math.random() * memesList.length)

    const image = memesList[randomNumber].url

    setCurrentMeme(prevMeme => ({
        ...prevMeme,
        imageUrl: image
    }))
}

function handleChange (e){
     setCurrentMeme(prevMeme => ({
        ...prevMeme,
        [e.target.name]: e.target.value
    }))
}

function saveMeme (e){
    e.preventDefault()
    setSavedMemes(prevMemes => ([...prevMemes, {
        topText: currentMeme.topText,
        bottomText: currentMeme.bottomText,
        imageUrl: currentMeme.imageUrl,
        id: idGen(),
    }]))
    setCurrentMeme(initValues)
}

function handleDelete(id){
    const UpdateMemes = savedMemes.filter((meme) => meme.id !== id);
        setSavedMemes(UpdateMemes);

}

    const savedMemesElements = savedMemes.map(meme => (
                                                <SavedMemes 
                                                topText={meme.topText}
                                                bottomText={meme.bottomText}
                                                imageUrl={meme.imageUrl}
                                                id={meme.id}
                                                key={meme.id}
                                                onDelete={handleDelete}
                                                setSavedMemes={setSavedMemes}
                                                savedMemes={savedMemes}
                                                />))
    return(
        <>
        <div className='main-container'>

            <h1 className='title'>
                Meme generator
            </h1>

            <div>
                <button 
                className='next-button' 
                onClick={changeMeme}
                >
                    Next Meme Image!
                </button>
            </div>

            <form className='form' >

                    <input
                        type="text"
                        placeholder="Top text"
                        className="form--input"
                        name="topText"
                        onChange={handleChange}
                        value={currentMeme.topText}
                    />

                    <input
                        type="text"
                        placeholder="Bottom text"
                        className="form--input"
                        name="bottomText"
                        onChange={handleChange}
                        value={currentMeme.bottomText}
                    />

                    <button 
                    className='save-button' 
                    onClick={saveMeme}>
                        Save Meme
                    </button>

                <div className='image-container'>

                    <h2 className='image-container--top-text'>
                        {currentMeme.topText}
                    </h2>

                    <img 
                    name="imageUrl" 
                    className='image' 
                    width="500px" 
                    src={currentMeme.imageUrl}
                    /> 
                    
                    <h2 className='image-container--bottom-text'>
                        {currentMeme.bottomText}
                    </h2>
                </div>

            </form>

            <div className='app-saved-meme-containers'>
                {savedMemesElements}
            </div>
        </div>

        </>
    )
}

export default App