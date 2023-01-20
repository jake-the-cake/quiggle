import * as fs from 'fs'

function ruleTypeRouter(type: string): void {
  console.log(type)
  switch (type) {
    case 'SET_DEFAULT':
      console.log('defaule setting')
      break
    default:
      console.log('default default setting')
      break
  }
}

const getFileToParse = function () {
  return new Promise(function (resolve, reject) {
    fs.readFile('./settings/defaults.config.qgl', 'utf8', function (err, data) {
      if (err) {
        reject(err)
        throw new Error(err.message)
      }
      const rules = []
      const codedRules = String(data)
        .split('\n')
        .join('')
        .split('!!')
        .filter((x) => x !== '')
      codedRules.forEach((rule) => {
        const ruleParams = rule.split(' ').filter((x) => x !== '')
        ruleTypeRouter(ruleParams[0])
      })
      // console.log(codedRules)
    })
  })
}

getFileToParse()
