function isEmpty(value, str) {
    if (value === "" || value === null || value === undefined || (value !== null && typeof value === "object" && !Object.keys(value).length)) {
        console.log("체크부분 ---> ",str);
        console.log("데이터가 없습니다 ---> ",value);
        return true
    } else {
        console.log("체크부분 ---> ",str);
        console.log("데이터 내용 ---> ",value);
        return false
    }
}

module.exports = {
    isEmpty: isEmpty
}