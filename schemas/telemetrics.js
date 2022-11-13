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
      name: 'value',
      title: 'Value',
      type: 'string',
    },

    {
      name: 'people',
      title: 'Involves people',
      type: 'boolean',
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'tag' },
  },
};
