import React, { useState } from 'react';
import jsonplaceholder from './apis/jsonplaceholder';
import Button from './components/Button';
import Resources from './components/Resources';

const App = () => {

    const [resources, setResources] = useState([]);

    const getPosts = async () => {
        try {
            const posts = await jsonplaceholder.get('/photos');
            setResources(posts.data);
        } catch (err) {
            console.log(err);
        }
    }

    const getAlbums = async () => {
        try {
            const albums = await jsonplaceholder.get('/todos');
            setResources(albums.data);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="ui container" style={{ marginTop: '30px', display: 'flex' }}>
            <Button onClick={getPosts} color='blue' text="Posts" />
            <Button onClick={getAlbums} color='red' text="Albums" />
            <Resources resources={resources} />
        </div>
    )
}

export default App;
