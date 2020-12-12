const { TestScheduler } = require('jest');
const Manager=require('../lib/Manager');

test('checks for name ', ()=>{
expect(Manager.name[1]).toEqual(expect.any(String));
});
