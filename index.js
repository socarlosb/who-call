const axios = require('axios')
const fastdom = require('fastdomparse-node')

const url = 'https://ligaram-me.com/numero'

const who = (num) => {
  axios
    .get(`${url}/${num}`)
    .then((res) => {
      const html = new fastdom(res.data.toString()) //, options)
      const comments = html.querySelectorAll('.comments .media .media-body p')
      const total = comments.length
      console.info(`Found ${total} comments about number: ${num}`)
      comments.map((el, index) => {
        const removeN = el
          .getInnerHTML()
          .replace(/\n/g, ' ')
          .replace('<span>', '')
        console.info(`${index + 1} - ${removeN}`)
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
