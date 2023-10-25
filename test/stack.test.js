/**GOAL: create a stack data structure and you are not allowed to use Arrays
 * When a stack(instantiated) is created , the index of the TOP value should be -1
 * Will use an object{} to represent the stack ( call it iteems), bcz we are not allowed to use ARRAYS
 * Will call the object items
 */
class Stack {
    constructor() {
        this.top = -1;
        this.items = {};
    }

    get peek() {
        // uses the top index value to get the item at the top of the stack
        return this.items[this.top];
    }

    push(item) {
        this.top += 1;
        this.items[this.top] = item;
    }
};
describe("My Stack", () => {

    let stack;
    beforeEach(() => {
        stack = new Stack();
    })

    it('is crated empty', () => {
        expect(stack.top).toBe(-1);
        expect(stack.items).toEqual({});
    });
    //  to Hold off on a test add .todo EXAMPLE: it.todo('is crated empty');
    it('can push to the top of the stack', () => {
        stack.push("foo");
        expect(stack.top).toBe(0);
        expect(stack.peek).toBe("foo");
    });
    it.todo('can pop off the stack');
})