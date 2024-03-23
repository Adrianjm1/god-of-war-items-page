import './gameSelector.css'
export const GameSelector = () => {
    return (
        <div className="game-selector">
            <i className="fas fa-pencil-alt"></i>
            <span style={{ fontSize: '14px' }}>Select a game</span>
            <i className="fas fa-chevron-down"></i>
        </div>
    )
}
