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
