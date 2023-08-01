export default {
  name: 'abouts',
  title: 'Abouts',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'cvUrl',
      title: 'cvUrl',
      type: 'file',
      options: {
        storeOriginalFilename: true,
      },
    },
  ],
}
