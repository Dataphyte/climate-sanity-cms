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
      name: 'description',
      title: 'Description',
      type: 'string',
    },

    {
      name: 'publish_date',
      title: 'Publish Date',
      type: 'date',
    },

    {
      name: 'author',
      title: 'Author',
      type: 'string',
    },

    {
      name: 'image',
      title: 'Post Image',
      type: 'image',
    },

    {
      name: 'link',
      title: 'Link to post',
      type: 'url',
    },
  ],
};
