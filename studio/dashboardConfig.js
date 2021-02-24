export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '6036b58ac5a9dd141685200d',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-fotfmfq2',
                  apiId: '1bad1ce2-0952-4573-9196-dfaf5f4cebbf'
                },
                {
                  buildHookId: '6036b58ae3107916a631ec2d',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-grjs6wsr',
                  apiId: '9a63a31c-e0c5-4f75-9714-e44cfe0dc2ec'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/krmlizm/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-grjs6wsr.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
