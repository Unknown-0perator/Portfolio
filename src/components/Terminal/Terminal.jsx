import './Terminal.scss';
import { useState } from 'react';
import { useRef, useEffect } from 'react';
import { scrollToSection } from '../../utilities/utilities';




const Terminal = ({ projectSection }) => {
    const [terminalInput, setTerminalInput] = useState('');
    const [commentHistory, setCommentHistory] = useState([]);
    const [git, setGit] = useState(0);
    const inputRef = useRef(null);
    const cursorRef = useRef(null);
    const terminalOutputRef = useRef(null);

    useEffect(() => {
        addLine('Type help for command list', '', 80);
        if (cursorRef.current) {
            cursorRef.current = document.querySelector('.terminal__cursor');
        }
    }, []);

    const addLine = (text, style, time) => {
        setTimeout(() => {
            const formattedText = text.replace(/(\r\n|\n|\r)/g, '');
            const newLine = document.createElement('p');
            newLine.innerHTML = formattedText;
            newLine.className = style;
            terminalOutputRef.current.appendChild(newLine);
            terminalOutputRef.current.scrollTo(0, terminalOutputRef.current.scrollHeight);
        }, time);
    };

    const moveCursor = (e) => {
        e = e || window.event;
        let keycode = e.keyCode || e.which;
        const cursorPosition = parseInt(cursorRef.current.style.left || 0);
        const cursorWidth = cursorRef.current.offsetWidth;

        // Calculate the maximum left position considering cursor width
        const maxLeftPosition = -cursorWidth;

        if (keycode === 37 && cursorPosition > maxLeftPosition) {
            cursorRef.current.style.left = cursorPosition - 10 + "px";
        } else if (keycode === 39 && cursorPosition < 0) {
            cursorRef.current.style.left = cursorPosition + 10 + "px";
        }
    };

    const newTab = (link) => {
        setTimeout(() => {
            window.open(link, "_blank")
        }, 500)
    }


    const loopLines = (lines, style, timeInterval) => {
        lines.forEach((line, index) => {
            setTimeout(() => {
                addLine(line, style, index * timeInterval);
            }, index * timeInterval);
        });
    };

    const handleInputChange = (e) => {
        setTerminalInput(e.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            if (terminalInput.toLowerCase() === 'history') {
                setCommentHistory([...commentHistory]);
            } else {
                setCommentHistory([...commentHistory, terminalInput]);
            }
            setGit(commentHistory.length);
            addLine(`Unknown-0perator: ${terminalInput}`, 'no-animation', 0);
            commander(terminalInput.toLowerCase());
            setTerminalInput('');
            event.preventDefault();
        } else if (event.key === 'ArrowUp' && git !== 0) {
            setGit((prevGit) => prevGit - 1);
            setTerminalInput(commentHistory[git - 1]);
        } else if (event.key === 'ArrowDown' && git !== commentHistory.length) {
            setGit((prevGit) => prevGit + 1);
            setTerminalInput(commentHistory[git + 1] || '');
        }
    };
    const formatInput = (text) => {
        return text.replace(/(\r\n|\n|\r)/g, '');
    }




    const commander = (command) => {
        switch (formatInput(command.toLowerCase())) {
            case "help":
                const helpLines = [
                    "<br>",
                    '<span class="terminal-text__command">whoami</span><span class="terminal-text__description">About me</span>  ',
                    '<span class="terminal-text__command">help</span><span class="terminal-text__description">Help</span>',
                    '<span class="terminal-text__command">github</span><span class="terminal-text__description">GitHub Account</span>  ',
                    '<span class="terminal-text__command">linkedin</span><span class="terminal-text__description">LinkedIn Account</span>',
                    '<span class="terminal-text__command">history</span><span class="terminal-text__description">Terminal History</span>  ',
                    '<span class="terminal-text__command">project</span><span class="terminal-text__description">My Projects</span>',
                    '<span class="terminal-text__command">status</span><span class="terminal-text__description">Status</span>',
                    '<span class="terminal-text__command">clear</span><span class="terminal-text__description">Clear Terminal</span>',
                    "<br>",
                ];
                loopLines(helpLines, "terminal-text", 80);
                break;
            case "linkedin":
                addLine("Opening LinkedIn...", "terminal-text", 0);
                newTab('https://www.linkedin.com/in/ahmadrashidakhtar/');
                break;
            case "github":
                addLine("Opening GitHub...", "color__secondary", 0);
                newTab('https://github.com/Unknown-0perator/');
                break;
            case "whoami":
                const aboutMe = [
                    `<br>
                    <p>Hey, I am Ahmad Akhtar, a software engineer, 
                    and full-stack developer based in Vancouver, Canada. 
                    I graduated from Jain University, Bangalore, India, 
                    with a degree in Software Engineering. Later, 
                    I attended a Software Engineering bootcamp at BrainStation in Vancouver, Canada. 
                    My main hobby is playing soccer, and I also enjoy solving mathematics problems. 
                    I have knowledge of various programming languages, but I mostly prefer JavaScript.
                    </p>`,
                    `<p>
                    If you would like to contact me, feel free to reach out to me on LinkedIn.
                    </p>
                    <br>`
                ]
                loopLines(aboutMe, 'terminal__text--about', 80);
                break;
            case "history":
                if (commentHistory.length > 0) {
                    addLine("<br>", "", 0);
                    loopLines(commentHistory, "color__secondary", 80);
                    addLine('<br>', "", commentHistory.length * 150);
                } else {
                    addLine('<br>', "", 0);
                    addLine("You haven't typed any command", "", 80);
                    addLine('<br>', "", 160);
                }
                break;
            case "project":
                scrollToSection(projectSection);
                break;
            case "clear":
                setTimeout(() => {
                    if (terminalOutputRef.current) {
                        terminalOutputRef.current.innerHTML = '';
                    }
                }, 1);
                break;
            default:
                addLine('<br>', "", 0);
                addLine('Invalid command', "", 80);
                addLine('<br>', "", 160);
        }
    };




    return (
        <section className="terminal" onClick={(e) => { e.preventDefault(); inputRef.current.focus(); }}>
            <div className="terminal__toolbar-container">
                <h3 className="terminal__heading">Terminal</h3>
            </div>
            <div className="terminal__area">
                <div className="terminal__output" ref={terminalOutputRef}></div>
                <div className="terminal__command">
                    <textarea
                        className="terminal__input"
                        value={terminalInput}
                        onChange={handleInputChange}
                        ref={inputRef}
                        onKeyDown={e => { handleKeyDown(e); moveCursor(e) }}
                    ></textarea>
                </div>
                <div className="terminal__liner">
                    <span className="terminal__typer">{terminalInput}</span>
                    <b className="terminal__cursor" ref={cursorRef}>█</b>
                </div>
            </div>
        </section>
    )
}

export default Terminal;