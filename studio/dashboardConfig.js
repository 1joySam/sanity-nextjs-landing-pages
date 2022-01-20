export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61e943fae232b60e49cea078',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-7pjy2hrj',
                  apiId: '1e808674-d641-4f09-a1b5-71be5e1ad33c'
                },
                {
                  buildHookId: '61e943fa1855ef18cb19aba8',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ec5o7z1n',
                  apiId: 'cb5e7656-8296-48fc-b55d-6fba51c9ffce'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/1joySam/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ec5o7z1n.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
