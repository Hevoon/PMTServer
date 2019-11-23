function pvDate(date) {
    let list = new Array(10)
    for (let i = 0; i < list.length; i++) {
        let time = date - 9 + i - 20190000
        list[i] = {
            times: time,
            pv: 0,
            uv: 0
        }
    }
    return list
}

function httpDate(date) {
    let list = new Array(10)
    let failInfo = []
    for (let i = 0; i < list.length; i++) {
        let time = date - 9 + i - 20190000
        list[i] = {
            times: time,
            failCount: 0,
            successCount: 0,
            successAvgTime: 0,
            failAvgTime: 0
        }
    }
    return {
        list,
        failInfo
    }
}

function pageDate(date) {
    let list = new Array(10)
    for (let i = 0; i < list.length; i++) {
        let time = date - 9 + i - 20190000
        list[i] = {
            times: time,
            domTreeCons: 0,
            whiteScreen: 0,
            pageLoad: 0,
            sourceLoad: 0
        }
    }
    return list
}

module.exports = {
    pvDate,
    httpDate,
    pageDate
}
// let moment = require('moment')
// module.exports = async function (arr1, arr2) {
//     let date = moment().format("YYYYMMDD")
//     let list = new Array(10).fill(0)
//     list.map((e,index) => {
//         e={sd}
//     })
//     await arr1.map(e => {
//         let _t = parseInt(e.times)
//         if (_t <= date && _t > date - 10) {
//             let i = _t + 9 - date
//             e.pv = 0
//             list[i] = e
//         }
//     })
//     await arr2.map(e => {
//         let _t = parseInt(e.times)
//         if (_t <= date && _t > date - 10) {
//             let i = _t + 9 - date
//             if (list[i] !== 0) {
//                 list[i].pv = e.pv
//             } else {
//                 e.uv = 0
//                 list[i] = e
//             }
//         }
//     })
//     return list
// }