import './button.scss'

export default function Button({ children, onClick, mode }) {
    return <buton className={`main_button ${mode}`} onClick={onClick}>{children}</buton>
}