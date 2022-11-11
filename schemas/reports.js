export default {
  name: 'reports',
  title: 'Reports',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },

    {
      name: 'content',
      title: 'Content',
      type: 'string',
    },

    {
      name: 'image',
      title: 'Post Image',
      type: 'image',
    },
  ],
};
