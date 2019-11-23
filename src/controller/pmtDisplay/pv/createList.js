let moment = require('moment')
let {pvDate} = require('../../../utils/getDate')
module.exports = async function (arr1, arr2) {
    let date = parseInt(moment().format("YYYYMMDD"))
    let list = pvDate(date)
    await arr1.map(e => {
        let _t = parseInt(e.times)
        if (_t <= date && _t > date - 10) {
            let i = _t + 9 - date
            list[i].uv = e.uv
            console.log(e.uv)
        }
    })
    await arr2.map(e => {
        let _t = parseInt(e.times)
        if (_t <= date && _t > date - 10) {
            let i = _t + 9 - date
            list[i].pv = e.pv
        }
    })
    return list
}