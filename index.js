selfDefinedCommands = [
    {
        prompt: 'LogMaker📑: ❓Why',
        displayed: `<span style="background-color: orange; color: papayawhip; font-size: larger; font-style: italic; font-weight: bold">WHY?</span>`,
    },
    {
        prompt: 'LogMaker📑: ⁉️What is this?',
        displayed: `<span style="background-color: red; color: papayawhip; font-size: larger; font-style: italic; font-weight: bold">WHAT?</span>`,
    },
    {
        prompt: 'LogMaker📑: 🛎️Important!',
        displayed: `<span style="background-color: teal; color: papayawhip; font-size: larger; font-style: italic; font-weight: bold">IMPORTANT!</span>`
    }
]

function main() {
    selfDefinedCommands.forEach(
        c => {
            logseq.Editor.registerSlashCommand(
                c.prompt,
                async () => {
                    logseq.Editor.insertAtEditingCursor(c.displayed)
                },
            )
        });
}

// bootstrap
logseq.ready(main).catch(console.error);