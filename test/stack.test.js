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
};
describe("My Stack", () => {

    it('is crated empty', () => {
        const stack = new Stack();

        expect(stack.top).toBe(-1);
        expect(stack.items).toEqual({});
    });
    //  to Hold off on a test add .todo EXAMPLE: it.todo('is crated empty');
    it.todo('can push to the top of the stack');
    it.todo('can pop off the stack');
})