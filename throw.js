const test = () => {
    console.log(123)
    throw {
        message: 'meassage throw'
    }
}

try {
    test()
} catch(err) {
    console.log(err)
}