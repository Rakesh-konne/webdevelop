var dateToday = new Date()

const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }
  
    const overdue = () => {
      return all.filter(function(el) {
        return el.dueDate ===  dateToday.getDate() - 1;
      });
    };
  
    const dueToday = () => {
      var a=all.filter(function(el) {
          return el.dueDate===  dateToday.getDate();
        });

        return a;
       
     
    };
  
    const dueLater = () => {
      var a=all.filter(function(el) {
        return el.dueDate===  dateToday.getDate() +1;
      });

      return a;
      
    };
  
    const toDisplayableList = (list) => {
      let b = list
      .map(
        function(value) {
         return `${value.completed ? "[x] " : "[ ] "}${value.title} ${
            value.dueDate === today ? " " : value.dueDate
          }`}
      )
      .join("\n");
    return b;
    };
  
    return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
  };
module.exports = todoList;
