const axios = require('axios')
const fastdom = require('fastdomparse-node')

const url = 'https://ligaram-me.com/numero'

const sourceList = [
  {
    title: 'ligaram-me.com',
    url: 'https://ligaram-me.com/numero',
    query: '.comments .media .media-body p',
    replaceCode: (el) => {
      return el.getInnerHTML().replace(/\n/g, ' ').replace('<span>', '')
    },
  },
  {
    title: 'ligaram.me',
    url: 'https://ligaram.me',
    query: '.timeline .timeline-item .timeline-content article p',
    replaceCode: (el) => {
      return el.getInnerHTML()
    },
  },
  {
    title: 'tellows.pt',
    url: 'https://www.tellows.pt/num',
    query: '#singlecomments .comment-body',
    replaceCode: (el) => {
      const time = el
        .querySelector('.comment-meta')
        .getInnerHTML()
        .replace(/\n/g, '')
        .trim()
      const comment = el.querySelectorAll('p')[1].getInnerHTML()
      return `On ${time} > ${comment}`
    },
  },
]

const who = (num) => {
  sourceList.map((source) => {
    axios
      .get(`${source.url}/${num}`)
      .then((res) => {
        const html = new fastdom(res.data.toString()) //, options)
        const comments = html.querySelectorAll(source.query)
        const total = comments.length
        console.info('------------------------')
        console.info(
          `Found ${total} comments about number: ${num} on ${source.title}`
        )
        comments.map((el, index) => {
          const removeN = source.replaceCode(el)
          console.info(`${index + 1} - ${removeN}`)
        })
      })
      .catch(function (error) {
        console.error(
          "Information not found, try another number (and don't use country prefix +351)"
        )
        console.error({ error })
      })
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
