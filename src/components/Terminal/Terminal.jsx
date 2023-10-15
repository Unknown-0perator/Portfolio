import './Terminal.scss';
import { useState } from 'react';
import { useRef } from 'react';




const Terminal = () => {
    const [terminalInput, setTerminalInput] = useState("");
    const [commentHistory, setCommentHistory] = useState([])
    const [git, setGit] = useState(0);
    const [pw, setPw] = useState(false)
    const cursorRef = useRef();

    const inputRef = useRef();
    const beforeOutputRef = useRef();
    const terminalAreaRef = useRef();
    const commandRef = useRef();

    const typeIt = (e) => {
        e = e || window.event;
        let tw = e.target.value;

        if (!pw) {
            setTerminalInput(formatInput(tw))
        }
    }

    const moveCursor = (count, e) => {
        e = e || window.event;
        let keycode = e.keyCode || e.which;
        if (keycode == 37 && parseInt(cursorRef.current.style.left) >= 0 - (count - 1) * 10) {
            cursorRef.current.style.left = parseInt(cursorRef.current.style.left) - 10 + "px";
        } else if (keycode == 39 && parseInt(cursorRef.current.style.left) + 10 <= 0) {
            cursorRef.current.style.left = parseInt(cursorRef.current.style.left) + 10 + "px";
        }
    }

    const newTab = (link) => {
        setTimeout(() => {
            window.open(link, "_blank")
        }, 500)
    }



    const addLine = (text, style, time) => {
        setTimeout(() => {
            let t = formatInput(text)
            let next = document.createElement('p');
            next.innerHTML = t;
            next.className = style;
            beforeOutputRef.current.parentNode.insertBefore(next, beforeOutputRef.current);
            terminalAreaRef.current.scrollTo(0, document.body.offsetHeight);
        }, time);
    };

    const loopLines = (lines, style, timeInterval) => {
        lines.forEach((line, index) => {
            setTimeout(() => {
                addLine(line, style, index * timeInterval);
            }, index * timeInterval);
        });
    };

    const handleInputChange = (e) => {
        setTerminalInput(e.target.value);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            if (terminalInput.toLowerCase() === 'history') {
                setCommentHistory([...commentHistory])
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
            commandRef.current.innerHTML = commentHistory[git - 1];
        } else if (event.key === 'ArrowDown' && git !== commentHistory.length) {
            setGit((prevGit) => prevGit + 1);
            setTerminalInput(commentHistory[git + 1] || '');
            commandRef.current.innerHTML = commentHistory[git + 1] || '';
        }
    };

    const formatInput = (text) => {
        return text.replace(/(\r\n|\n|\r)/g, '');
    }




    const terminalOutputRef = useRef();


    const commander = (command) => {
        switch (formatInput(command.toLowerCase())) {
            case "help":
                const helpLines = [
                    "<br>",
                    '<span class="terminal-text__command">whoami</span>          <span class="terminal-text__description">About me</span>  ',
                    '<span class="terminal-text__command">help</span>         <span class="terminal-text__description">Help</span>',
                    '<span class="terminal-text__command">github</span>          <span class="terminal-text__description">GitHub Account</span>  ',
                    '<span class="terminal-text__command">linkedin</span>         <span class="terminal-text__description">LinkedIn Account</span>',
                    '<span class="terminal-text__command">history</span>          <span class="terminal-text__description">Terminal History</span>  ',
                    '<span class="terminal-text__command">clear</span>         <span class="terminal-text__description">Clear Terminal</span>',
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
                loopLines(aboutMe, 'terminal__text--about', 80)
                break;
            case "history":
                if (commentHistory.length > 0) {
                    addLine("<br>", "", 0);
                    loopLines(commentHistory, "color__secondary", 80);
                    addLine('<br>', "", commentHistory.length * 150);
                } else {
                    addLine('<br>', "", 0)
                    addLine("You haven't type any command", "", 80);
                    addLine('<br>', "", 160)
                }
                break;
            case "clear":
                setTimeout(() => {
                    if (terminalOutputRef.current && beforeOutputRef) {
                        terminalOutputRef.current.innerHTML = `<a className="terminal__output--before" ref={beforeOutputRef}></a>`
                    }
                }, 1)
                break;
            default:
                addLine('<br>', "", 0)
                addLine('Invalid command', "", 80)
                addLine('<br>', "", 160)
        }
    }




    return (
        <section className="terminal" onClick={e => {
            e.preventDefault()
            inputRef.current.focus();
        }}>
            <div className="terminal__toolbar-container">
                <h3 className="terminal__heading">Terminal</h3>
            </div>
            <div className="terminal__area" ref={terminalAreaRef}>
                <div ref={terminalOutputRef} className="terminal__output">
                    <span className="terminal__output--before" ref={beforeOutputRef}></span>
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
                    <span className="terminal__typer" ref={commandRef}>{terminalInput}</span><b ref={cursorRef} className="terminal__cursor" >█</b>
                </div>
            </div>
        </section>
    )
}

export default Terminal;