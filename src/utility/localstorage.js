import { toast } from "react-toastify"


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


      if (newData.includes(id)) {
            toast.error(`Item already exist in ${key}`)
            return

      }
      else {
            newData.push(id)
            const dataStr = JSON.stringify(newData)
            localStorage.setItem(key, dataStr)
            toast.success(`Item added to ${key}`)
      }

}
const removeItemFromLocal = (key, id) => {


      const loalData = getDataFromLocal(key)
      const filterData = loalData.filter(data => parseInt(data) !== id)
      const filterDataString = JSON.stringify(filterData)
      localStorage.setItem(key, filterDataString)
}

export { getDataFromLocal, setDataToLocal, removeItemFromLocal }