export default {
  name: 'telemetrics',
  title: 'Telemetrics',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'tag',
      title: 'Tag',
      type: 'string',
    },

    {
      name: 'vallue',
      title: 'Value',
      type: 'string',
    },

    {
      name: 'bad',
      title: 'Bad',
      type: 'boolean',
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'tag' },
  },
};
