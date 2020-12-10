const Employee= require('../lib/Employee');
const testEmployee= new Employee('EmployeeName','EmployeeId','EmployeeEmail');
describe('Test constructor parameters for proper calls',()=>{
    
    
    test('test employee name ',()=>{
        expect(testEmployee.name).toEqual(expect.any(String));
    });

    test('test employee id',()=>{
        expect(testEmployee.id).toEqual(expect.any(String));
    });

    test('test employee email',()=>{
     expect(testEmployee.email).toEqual(expect.any(String));
    });


});

describe('Test method calls',()=>{
    test('Test getName method',()=>{
        expect(testEmployee.getName()).toEqual(expect.any(String));
    });
    test('Test getId method',()=>{
        expect(testEmployee.getId()).toEqual(expect.any(String));
    });
    test('Test getEmail method',()=>{
        expect(testEmployee.getEmail()).toEqual(expect.any(String));
    });
    test('Test getRole method',()=>{
        expect(testEmployee.getRole()).toEqual(expect.any(String));
    });
   
});