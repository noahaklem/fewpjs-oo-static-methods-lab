class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(sentence) {
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]

    let wordsArray = sentence.split(" ");
    let results = []
    
    wordsArray.map(word => {
      if (wordsArray[0] === word) {
        results.push(this.capitalize(word))
      } else {
        if (exceptions.includes(word)) {
          results.push(word)
        } else {
          results.push(this.capitalize(word))
        }
      }
    })

    return results.join(' ')
  }
}