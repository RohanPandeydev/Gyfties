async function CopyText(text) {
    try {
        const copied = await navigator.clipboard.writeText(text);
        // console.log("copied", copied);
    } catch (error) {
        console.error(error.message);
    }
}

export default CopyText;
