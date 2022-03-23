import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAlbums } from '../services/album'
import UserCard from '../components/UserCard'
import '../styles/albumsPreview.css'

export default function AlbumPreiew(props){
  const [albums, setAlbums] = useState([])
  useEffect(() => {
    getAlbums(props.user.id).then(resp => {
      setAlbums(resp)
    })
  }, [props.user])

  if(!albums.length){
    return <p>loading...</p>
  }
  return <div className="albums_container">
    <ul class="albums_list">
      {albums.map((album) => 
        <li key={album.id}>
          <p>{album.title}</p>
          <div>
            <button><Link to={`/album/${album.id}`}>Ver Album</Link></button>
          </div>
        </li>)}
    </ul>
  </div>
}