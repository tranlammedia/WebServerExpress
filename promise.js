const check = (number) => {
    return new Promise((resolve, reject)=> {
        if(number > 10) {
            resolve("lon hon")
        } else reject("that bai")
    })
}

check(10)
    .then(data => console.log(data))
    .catch((err) => console.log(err))