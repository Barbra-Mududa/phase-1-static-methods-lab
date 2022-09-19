class Formatter {
  //add static methods here
  static capitalize(string){
    const firstLetter = string[0].toUpperCase()
    return string.replace(string[0],firstLetter)
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9\-\'\ ]/g,"")
  }
  static titleize(string){
    const sentence = string.split(' ');
    const sentenceCapital= sentence.map(word => {
      const wordSelected = word.toLowerCase()
      let result
      if(wordSelected !== "the" && wordSelected !== "a" && wordSelected !== "an" && wordSelected !== "but" && wordSelected !== "of" && wordSelected !== "and" && wordSelected !== "for" && wordSelected !== "at" && wordSelected !== "by" && wordSelected !== "from") {
      result = wordSelected.replace(wordSelected.charAt(0),wordSelected.charAt(0).toUpperCase())
      }else{
      result = wordSelected
      }
      return result
    })
    let firstWord = sentenceCapital.join(" ")
    firstWord = firstWord.replace(firstWord.charAt(0),firstWord.charAt(0).toUpperCase())
    return firstWord
  }
}