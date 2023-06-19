import { IdCard } from './entity/IdCard';
import { AppDataSource } from './data-source';
import { User } from './entity/User';

AppDataSource.initialize()
  .then(async () => {
    // const user = new User();
    // user.id = 4;
    // user.firstName = 'is';
    // user.lastName = 'adi';
    // user.age = 25;

    // const idCard = new IdCard();
    // idCard.id = 1;
    // idCard.cardName = '2222';
    // idCard.user = user;

    // await AppDataSource.manager.save(idCard);
    // const ics = await AppDataSource.manager.find(IdCard);
    // console.log(ics);
    // const ics = await AppDataSource.manager.find(IdCard, {
    //   relations: {
    //     user: true,
    //   },
    // });
    // console.log(ics);
    const user = await AppDataSource.manager.find(User, {
      relations: {
        idCard: true,
      },
    });
    console.log(user);

    await AppDataSource.manager.delete(User, 4);

    const ics = await AppDataSource.manager
      .getRepository(IdCard)
      .createQueryBuilder('ic')
      .leftJoinAndSelect('ic.user', 'u')
      .getMany();

    console.log(`ADI-LOG => ics`, ics);
  })
  .catch((error) => console.log(error));
