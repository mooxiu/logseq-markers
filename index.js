selfDefinedCommands = [
    {
        prompt: '❓ Why, but why',
        displayed: `<span style="background-color: orange; color: papayawhip; font-size: larger; font-style: italic; font-weight: bold">WHY?</span>`,
    },
    {
        prompt: '❓ What is this?',
        displayed: `<span style="background-color: red; color: papayawhip; font-size: larger; font-style: italic; font-weight: bold">WHAT?</span>`,
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