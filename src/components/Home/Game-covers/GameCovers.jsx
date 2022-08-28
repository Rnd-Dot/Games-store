import './GameCovers.css'

const GameCover = ({image = ''}) => {
    return <div className="game_cover" style={{backgroundImage:`url(${image})`}}/>
}

export default GameCover