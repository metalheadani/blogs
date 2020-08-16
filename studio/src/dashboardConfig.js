export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f3948dffb8f78516af53b3c',
                  title: 'Sanity Studio',
                  name: 'blogs-studio',
                  apiId: 'f939b613-aadc-41a9-b9e6-b1c03e944c48'
                },
                {
                  buildHookId: '5f3948e072903e9388781b2b',
                  title: 'Blog Website',
                  name: 'blogs-web',
                  apiId: '47e0f160-6d98-4156-8e5a-c47836957207'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/metalheadani/blogs',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://blogs-web.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
