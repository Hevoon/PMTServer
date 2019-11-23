let moment = require('moment')
let {pageDate} = require('../../../utils/getDate')
module.exports = async function (arr1) {
    let date = parseInt(moment().format("YYYYMMDD"))

    let pageList = {}
    console.log(arr1)
    await arr1.map(e => {
        let _t = parseInt(e.times)
        if (_t <= date && _t > date - 10) {
            let a = pageList[e.url] = pageDate(date)
            let i = _t + 9 - date
            a[i].domTreeCons = e.domTreeCons
            a[i].whiteScreen = e.whiteScreen
            a[i].sourceLoad = e.sourceLoad
            a[i].pageLoad = e.pageLoad
        }
    })
    return pageList
}