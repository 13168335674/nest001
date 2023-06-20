import { EntityManager } from 'typeorm';
import { AppDataSource } from './data-source';
import { Article } from './entity/Article';
import { Tag } from './entity/Tag';
import { User } from './entity/User';

AppDataSource.initialize()
  .then(async () => {
    const entityManager = AppDataSource.manager;

    // const article = await entityManager.find(Article, {
    //   relations: {
    //     tags: true,
    //   },
    // });

    // console.log(`ADI-LOG => article`, article);
    // console.log(
    //   `ADI-LOG Check Remove => article.map(item => item.tags)`,
    //   article.map((item) => item.tags),
    // );

    // const article1 = await entityManager.findOne(Article, {
    //   where: {
    //     id: 2,
    //   },
    //   relations: {
    //     tags: true,
    //   },
    // });

    // article1.title = 'cccc';
    // article1.tags = article1.tags.filter((item) =>
    //   item.name.includes('ttt111'),
    // );

    // await entityManager.save(article1);

    // console.log(`ADI-LOG => article1`, article1);

    // const article = await entityManager
    //   .createQueryBuilder(Article, 'a')
    //   .leftJoinAndSelect('a.tags', 't')
    //   .getMany();
    // console.log(`ADI-LOG => article`, article);
    // console.log(
    //   `ADI-LOG Check Remove => article.map(item => item.tags)`,
    //   article.map((item) => item.tags),
    // );

    const tags = await entityManager.find(Tag, {
      relations: {
        article: true,
      },
    });

    console.log(`ADI-LOG => tags`, tags);
  })
  .catch((error) => console.log(error));
