let moment = require('moment')
let {httpDate} = require('../../../utils/getDate')
module.exports = async function (arr1, arr2, arr3) {
    let date = parseInt(moment().format("YYYYMMDD"))

    let obj = httpDate(date)
    let list = obj.list
    await arr1.map(e => {
        let _t = parseInt(e.times)
        if (_t <= date && _t > date - 10) {
            let i = _t + 9 - date
            list[i].failCount = e.failCount
            list[i].failAvgTime = e.loadTime
        }
    })

    await arr2.map(e => {
        let _t = parseInt(e.times)
        if (_t <= date && _t > date - 10) {
            let i = _t + 9 - date
            list[i].successCount = e.successCount
            list[i].successAvgTime = e.loadTime
        }
    })
    obj.failInfo = arr3
    return obj
}