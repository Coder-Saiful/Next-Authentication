import { NextResponse } from "next/server";

export async function GET() {
    const data = [
        { title: 'delectus aut autem', id: 1 },
        { title: 'quis ut nam facilis et officia qui', id: 2 },
        { title: 'fugiat veniam minus', id: 3 },
        { title: 'et porro tempora', id: 4 },
        {
          title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
          id: 5
        },
        { title: 'qui ullam ratione quibusdam voluptatem quia omnis', id: 6 },
        { title: 'illo expedita consequatur quia in', id: 7 },
        { title: 'quo adipisci enim quam ut ab', id: 8 },
        { title: 'molestiae perspiciatis ipsa', id: 9 },
        { title: 'illo est ratione doloremque quia maiores aut', id: 10 },
        { title: 'vero rerum temporibus dolor', id: 11 },
        { title: 'ipsa repellendus fugit nisi', id: 12 },
        { title: 'et doloremque nulla', id: 13 },
        { title: 'repellendus sunt dolores architecto voluptatum', id: 14 },
        { title: 'ab voluptatum amet voluptas', id: 15 },
        { title: 'accusamus eos facilis sint et aut voluptatem', id: 16 },
        { title: 'quo laboriosam deleniti aut qui', id: 17 },
        { title: 'dolorum est consequatur ea mollitia in culpa', id: 18 },
        {
          title: 'molestiae ipsa aut voluptatibus pariatur dolor nihil',
          id: 19
        },
        { title: 'ullam nobis libero sapiente ad optio sint', id: 20 },
        {
          title: 'suscipit repellat esse quibusdam voluptatem incidunt',
          id: 21
        },
        { title: 'distinctio vitae autem nihil ut molestias quo', id: 22 },
        {
          title: 'et itaque necessitatibus maxime molestiae qui quas velit',
          id: 23
        },
        {
          title: 'adipisci non ad dicta qui amet quaerat doloribus ea',
          id: 24
        },
        {
          title: 'voluptas quo tenetur perspiciatis explicabo natus',
          id: 25
        },
        { title: 'aliquam aut quasi', id: 26 },
        { title: 'veritatis pariatur delectus', id: 27 },
        { title: 'nesciunt totam sit blanditiis sit', id: 28 },
        { title: 'laborum aut in quam', id: 29 },
        {
          title: 'nemo perspiciatis repellat ut dolor libero commodi blanditiis omnis',
          id: 30
        },
        { title: 'repudiandae totam in est sint facere fuga', id: 31 },
        { title: 'earum doloribus ea doloremque quis', id: 32 },
        { title: 'sint sit aut vero', id: 33 },
        { title: 'porro aut necessitatibus eaque distinctio', id: 34 },
        { title: 'repellendus veritatis molestias dicta incidunt', id: 35 },
        {
          title: 'excepturi deleniti adipisci voluptatem et neque optio illum ad',
          id: 36
        },
        { title: 'sunt cum tempora', id: 37 },
        { title: 'totam quia non', id: 38 },
        {
          title: 'doloremque quibusdam asperiores libero corrupti illum qui omnis',
          id: 39
        },
        { title: 'totam atque quo nesciunt', id: 40 },
        {
          title: 'aliquid amet impedit consequatur aspernatur placeat eaque fugiat suscipit',
          id: 41
        },
        { title: 'rerum perferendis error quia ut eveniet', id: 42 },
        { title: 'tempore ut sint quis recusandae', id: 43 },
        {
          title: 'cum debitis quis accusamus doloremque ipsa natus sapiente omnis',
          id: 44
        },
        { title: 'velit soluta adipisci molestias reiciendis harum', id: 45 },
        { title: 'vel voluptatem repellat nihil placeat corporis', id: 46 },
        { title: 'nam qui rerum fugiat accusamus', id: 47 },
        { title: 'sit reprehenderit omnis quia', id: 48 },
        {
          title: 'ut necessitatibus aut maiores debitis officia blanditiis velit et',
          id: 49
        },
        {
          title: 'cupiditate necessitatibus ullam aut quis dolor voluptate',
          id: 50
        },
        { title: 'distinctio exercitationem ab doloribus', id: 51 },
        {
          title: 'nesciunt dolorum quis recusandae ad pariatur ratione',
          id: 52
        },
        { title: 'qui labore est occaecati recusandae aliquid quam', id: 53 },
        { title: 'quis et est ut voluptate quam dolor', id: 54 },
        {
          title: 'voluptatum omnis minima qui occaecati provident nulla voluptatem ratione',
          id: 55
        },
        { title: 'deleniti ea temporibus enim', id: 56 },
        {
          title: 'pariatur et magnam ea doloribus similique voluptatem rerum quia',
          id: 57
        },
        {
          title: 'est dicta totam qui explicabo doloribus qui dignissimos',
          id: 58
        },
        {
          title: 'perspiciatis velit id laborum placeat iusto et aliquam odio',
          id: 59
        },
        { title: 'et sequi qui architecto ut adipisci', id: 60 },
        { title: 'odit optio omnis qui sunt', id: 61 },
        { title: 'et placeat et tempore aspernatur sint numquam', id: 62 },
        { title: 'doloremque aut dolores quidem fuga qui nulla', id: 63 },
        {
          title: 'voluptas consequatur qui ut quia magnam nemo esse',
          id: 64
        },
        {
          title: 'fugiat pariatur ratione ut asperiores necessitatibus magni',
          id: 65
        },
        { title: 'rerum eum molestias autem voluptatum sit optio', id: 66 },
        {
          title: 'quia voluptatibus voluptatem quos similique maiores repellat',
          id: 67
        },
        { title: 'aut id perspiciatis voluptatem iusto', id: 68 },
        {
          title: 'doloribus sint dolorum ab adipisci itaque dignissimos aliquam suscipit',
          id: 69
        },
        { title: 'ut sequi accusantium et mollitia delectus sunt', id: 70 },
        { title: 'aut velit saepe ullam', id: 71 },
        {
          title: 'praesentium facilis facere quis harum voluptatibus voluptatem eum',
          id: 72
        },
        {
          title: 'sint amet quia totam corporis qui exercitationem commodi',
          id: 73
        },
        { title: 'expedita tempore nobis eveniet laborum maiores', id: 74 },
        { title: 'occaecati adipisci est possimus totam', id: 75 },
        { title: 'sequi dolorem sed', id: 76 },
        {
          title: 'maiores aut nesciunt delectus exercitationem vel assumenda eligendi at',
          id: 77
        },
        {
          title: 'reiciendis est magnam amet nemo iste recusandae impedit quaerat',
          id: 78
        },
        { title: 'eum ipsa maxime ut', id: 79 },
        {
          title: 'tempore molestias dolores rerum sequi voluptates ipsum consequatur',
          id: 80
        },
        { title: 'suscipit qui totam', id: 81 },
        { title: 'voluptates eum voluptas et dicta', id: 82 },
        { title: 'quidem at rerum quis ex aut sit quam', id: 83 },
        { title: 'sunt veritatis ut voluptate', id: 84 },
        { title: 'et quia ad iste a', id: 85 },
        { title: 'incidunt ut saepe autem', id: 86 },
        {
          title: 'laudantium quae eligendi consequatur quia et vero autem',
          id: 87
        },
        {
          title: 'vitae aut excepturi laboriosam sint aliquam et et accusantium',
          id: 88
        },
        { title: 'sequi ut omnis et', id: 89 },
        { title: 'molestiae nisi accusantium tenetur dolorem et', id: 90 },
        { title: 'nulla quis consequatur saepe qui id expedita', id: 91 },
        { title: 'in omnis laboriosam', id: 92 },
        {
          title: 'odio iure consequatur molestiae quibusdam necessitatibus quia sint',
          id: 93
        },
        { title: 'facilis modi saepe mollitia', id: 94 },
        {
          title: 'vel nihil et molestiae iusto assumenda nemo quo ut',
          id: 95
        },
        { title: 'nobis suscipit ducimus enim asperiores voluptas', id: 96 },
        { title: 'dolorum laboriosam eos qui iure aliquam', id: 97 },
        {
          title: 'debitis accusantium ut quo facilis nihil quis sapiente necessitatibus',
          id: 98
        },
        { title: 'neque voluptates ratione', id: 99 },
        { title: 'excepturi a et neque qui expedita vel voluptate', id: 100 }
      ]
    return NextResponse.json(data);
}