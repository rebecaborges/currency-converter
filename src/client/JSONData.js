const JSONData = async() => {
  try {
    const response = await fetch("http://www.floatrates.com/daily/brl.json")
    return await response.json()
  } catch (error) {
    console.error('Error trying to fetch in JSONData: ', error)
    return Error('Error trying to fetch in JSONData')
  }
}
  
module.exports = JSONData