import './Terminal.scss';
import maximizeIcon from '../../assests/icons/maximize.svg';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';

const CommandList = () => {
    return (
        <>
            '<span class="command">about</span>          About me',
            '<span class="command">github</span>         GitHub Account',
            '<span class="command">linkedIn</span>       LinkedIn Account',
            '<span class="command">projects</span>       My Projects',
            '<span class="command">history</span>        Commands History',
            '<span class="command">help</span>           Help',
            '<span class="command">clear</span>          Clear Terminal',
        </>
    )
}

const Terminal = () => {
    const [terminalInput, setTerminalInput] = useState("");
    const [commentHistory, setCommentHistory] = useState([])



    const handleInputChange = (e) => {
        setTerminalInput(e.target.value);
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleEnterPress()
        }
    }

    const formatInput = (text) => {
        return text.replace(/(\r\n|\n|\r)/g, '');
    }

    const addTerminalOutput = (output) => {
        const terminalOutputContainer = terminalOutputRef.current;
        ReactDOM.render(output, terminalOutputContainer)
    }


    const terminalOutputRef = useRef();
    const addLine = (text) => {
        const newLine = document.createElement('p');
        newLine.innerHTML = text
        const terminalOutputContainer = terminalOutputRef.current;
        terminalOutputContainer.append(newLine);
        terminalOutputContainer.scrollTop = terminalOutputContainer.scrollHeight;

    }

    const commander = (command) => {
        switch (formatInput(command.toLowerCase())) {
            case "help":
                addLine(`Unknown-0perator$: ${terminalInput}`);
                addTerminalOutput(<CommandList />)
                break;
            case "clear":
                addLine(`Unknown-0perator$: ${terminalInput}`);
                handleClear();
                break;
            default:
                addLine('Command not found')
        }
    }

    const handleEnterPress = () => {
        if (terminalInput) {
            setCommentHistory([...commentHistory, terminalInput])
            commander(terminalInput)
            setTerminalInput('')
        }

    }
    const handleClear = () => {
        setCommentHistory([]);
        const terminalOutputContainer = terminalOutputRef.current;
        terminalOutputContainer.innerHTML = ""

    }

    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, [])
    return (
        <section className="terminal" onClick={e => {
            inputRef.current.focus();
        }}>
            <div className="terminal__toolbar-container">
                <h3 className="terminal__heading">Terminal</h3>
                <img src={maximizeIcon} alt="" className="terminal__icon" />
            </div>
            <div className="terminal__area">
                <div ref={terminalOutputRef} className="terminal__output">
                </div>
                <div className="terminal__command">
                    <textarea
                        className="terminal__input"
                        value={terminalInput}
                        onChange={handleInputChange}
                        ref={inputRef}
                        onKeyDown={handleKeyDown}
                    >
                    </textarea>
                </div>
                <div className="terminal__liner">
                    <span className="terminal__typer">{terminalInput}</span><b className="terminal__cursor">█</b>
                </div>
            </div>
        </section>
    )
}

export default Terminal;