 var dateToday = new Date()
const todoList=require('../todo');

const{ all, add, markAsComplete, overdue, dueToday, dueLater}= todoList();

describe("Todolist Test Suite",()=>{
    beforeAll(()=>{
        add(
            {
                title: "Test todo",
                completed: false,
                dueDate: dateToday.getDate() - 1,

            }
          );

        add(
            {
                title: "Test todo1",
                completed: false,
                dueDate:dateToday.getDate() - 1 ,

            }
        );

        add(
            {
                title: "Test todo3",
                completed: false,
                dueDate: dateToday.getDate() +1,

            }
        );

        add(
            {
                title: "Test todo2",
                completed: false,
                dueDate: dateToday.getDate(),

            }
        );

        add(
            {
                title: "Test todo3",
                completed: false,
                dueDate: dateToday.getDate() +1,

            }
        );
    })
    
    test("Should add new todo",()=>{
        const todoItemsCount = all.length;
        add(
            {
                title:" Test todo",
                completed:false,
                dueDate: dateToday.getDate() +1,
            }
        );
        expect(all.length).toBe(todoItemsCount+1);
    });
    
    test("Should mark as todo as complete",()=>{
        expect(all[0].completed).toBe(false);
        markAsComplete(0);
        expect(all[0].completed).toBe(true);
    })

    test("check retrival of overdue items", () => {
        let t = overdue();
        expect(t.length).toBe(2);
        expect(t[0]).toBe(all[0]);
        expect(t[1]).toBe(all[1]);

      });

      test("check retrival of today dueitems", () => {
        let s= dueToday();
        expect(s.length).toBe(1);
        expect(s[0]).toBe(all[3]);
      });

      test("check retrival of duelater items", () => {
        let r = dueLater();
        expect(r.length).toBe(3);
        expect(r[0]).toBe(all[2]);
        expect(r[1]).toBe(all[4]);
        expect(r[2]).toBe(all[5]);
      });
});