//890

var findAndReplacePattern = function(words, pattern) {
    const result = []
    for(let i=0; i < words.length; i++){
        const word = words[i]
        if(matchPattern(word, pattern)){
            result.push(word)
        }
    }
    return result
};

function matchPattern(word, pattern){
    const charMapping = {}
    const charSet = new Set()

    for(let i=0; i < pattern.length; i++){
        const charPattern = pattern[i]
        const charWord = word[i]

        const found = charMapping[charPattern]
        const used = charSet.has(charWord)
        const match = found && found === charWord

        if(!found && !used){
            charMapping[charPattern] = charWord
            charSet.add(charWord)
        } else if(!match || (!found && used)){
            return false
        }
    }

    return true
}