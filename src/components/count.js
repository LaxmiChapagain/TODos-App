
const countUncompleted=(todos) =>{
    var count = 0;
    todos.map((i)=>{
      if (! i.completed)
      count++
      return 0;
    })
    return count;
  }
  export default countUncompleted;