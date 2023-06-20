import { Department } from './entity/Department';
import { Employee } from './entity/Employee';
import { AppDataSource } from './data-source';

AppDataSource.initialize()
  .then(async () => {
    // const e1 = new Employee();
    // e1.name = '张三';

    // const e2 = new Employee();
    // e2.name = '李四';

    // const e3 = new Employee();
    // e3.name = '王五';

    // const d1 = new Department();
    // d1.name = '技术部';
    // d1.employee = [e1, e2, e3];

    // AppDataSource.manager.save(Department, d1);

    // const deps = await AppDataSource.manager.find(Department, {
    //   relations: {
    //     employee: true,
    //   },
    // });
    // console.log(deps);
    // console.log(deps.map((item) => item.employee));

    const deps = await AppDataSource.manager.find(Department, {
      relations: {
        employee: true,
      },
    });
    await AppDataSource.manager.delete(Employee, deps[0].employee);
    await AppDataSource.manager.delete(Department, deps[0].id);
  })
  .catch((error) => console.log(error));
