const axios = require('axios')
const { parse } = require('node-html-parser')

const url = 'https://ligaram-me.com/numero'
let html

const who = (num) => {
  const options = { lowerCaseTagName: false, script: false, style: false }
  axios
    .get(`${url}/${num}`)
    .then((res) => {
      html = parse(res.data, options)
      const comments = html.querySelectorAll('.comments__comment .media-body p')
      const total = comments.length
      console.info(`Found ${total} comments about number: ${num}`)
      comments.map((el) => {
        const removeN = el.rawText.replace(/\n/g, ' ')
        console.info(`- ${removeN}`)
      })
      console.info('Information by http://ligaram-me.com')
    })
    .catch(function (error) {
      console.log(
        "Information not found, try another number (and don't use country prefix +351)"
      )
    })
}
const checkArguments = () => {
  if (process.argv.length > 2) return process.argv[2]
}

exports.start = () => {
  const arg = checkArguments()
  if (!arg) {
    console.error('No arguments provided, provide a full number!')
    return
  }

  /**
   * Commands example:
   * node index 931104990
   */
  who(arg)
}
