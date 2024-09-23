let commands = [
    {
        prompt: "Why",
        bk_color: "#b33a84",
        color: "#ffffff",
        font_size: "larger",
        font_style: "italic",
        font_weight: "bold",
        text: "WHY?"
    },
    {
        prompt: "️What is this?",
        bk_color: "#e30b0d",
        color: "#ffffff",
        font_size: "larger",
        font_style: "italic",
        font_weight: "bold",
        text: "WHAT?"
    },
    {
        prompt: "Important!",
        bk_color: "#6710a5",
        color: "#ffffff",
        font_size: "larger",
        font_style: "italic",
        font_weight: "bold",
        text: "IMPORTANT!"
    },
    {
        prompt: "How",
        bk_color: "#23743f",
        color: "#ffffff",
        font_size: "larger",
        font_style: "italic",
        font_weight: "bold",
        text: "How?"
    },
    {
        prompt: "?",
        bk_color: "rgba(165,171,173,0.65)",
        color: "#ffffff",
        font_size: "larger",
        font_style: "italic",
        font_weight: "bold",
        text: "Hypothesis"
    }
]

function main() {
    commands.map(c => {
        let style = `"color: ${c.color}; ` +
            `background-color: ${c.bk_color}; ` +
            `font-size: ${c.font_size}; ` +
            `font-weight: ${c.font_weight}; ` +
            `font-style: ${c.font_style}"`;
        return {
            prompt: `LogMaker📑${c.prompt}`,
            displayed: `<span style=${style}>${c.text}</span>`
        }
    }).forEach(
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