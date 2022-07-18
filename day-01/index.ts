import axios from 'axios'
interface ToDo {
  title: String
  id: number
}
const url = 'http://jsonplaceholder.typicode.com/todos/1'

axios.get(url).then((res) => {
  const data = res.data as ToDo

  console.log(data.id)
  console.log(data.title)
})
