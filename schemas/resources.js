export default {
  name: 'resoureces',
  title: 'Resources',
  type: 'document',
  fields: [
    {
      name: 'state',
      title: 'state',
      type: 'string',
    },

    {
      name: 'no_of_lga',
      title: 'Nuber of LGAs',
      type: 'number',
    },

    {
      name: 'lga_affected',
      title: 'LGAs affected',
      type: 'array',
      of: [{ type: 'string' }],
    },

    {
      name: 'no_of_deaths',
      title: 'Number of Deaths',
      type: 'number',
    },

    {
      name: 'no_of_injured',
      title: 'Number of Injured',
      type: 'number',
    },

    {
      name: 'no_of_displaced',
      title: 'Number of Deaths',
      type: 'number',
    },

    {
      name: 'ref_link',
      title: 'Reference Link',
      type: 'url',
    },
  ],
};
