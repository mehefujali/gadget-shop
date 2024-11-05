const getDataFromLocal = (key) => {

      const localData = localStorage.getItem(key)


      if (localData) {
            const dataPars = JSON.parse(localData)
            return dataPars
      }
      else {
            return []
      }
}

const setDataToLocal = (key, id) => {
      let newData = getDataFromLocal(key)
      console.log(newData);

      newData.push(id)
      const dataStr = JSON.stringify(newData)
      localStorage.setItem(key, dataStr)

}

export { getDataFromLocal, setDataToLocal }